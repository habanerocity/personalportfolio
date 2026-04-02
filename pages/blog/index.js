import React, { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import Container from "react-bootstrap/Container";
import classes from "./index.module.scss";

import BlogPagination from "../../components/Pagination";

import NavigationBar from '../../components/ui/NavigationBar';
import LogoBar from '../../components/ui/LogoBar';
import Footer from '../../components/ui/Footer';
import SectionContainer from '../../components/ui/SectionContainer';
import Headings from '../../components/ui/Headings';
import SplitHero from "../../components/ui/hero/SplitHero";

import renderBlogPostCards from "../../components/renderBlogPostCards";

import pageFadeInAnimation from "../../animations/pageFadeInAnimation";

import { client } from "../../components/utils/contentfulClient";

const POSTS_PER_PAGE = 6;

export async function getStaticProps() {
    const response = await client.getEntries({
        content_type: 'pageBlogPost',
        order: '-sys.createdAt', // Order by creation date, newest first
    });

    return {
        props: {
            posts: response.items,
        },
        revalidate: 60, // Revalidate every 60 seconds to keep content fresh
    }
}

const Blog = ({posts}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const mappedPosts = posts.map((item) => {
        const { fields, sys, metadata } = item;

        // 1. Get Sidebar Tags (Taxonomy) as fallback
        const platformTags = metadata?.tags?.map(tag => {
            const id = tag.sys.id;
            return id.charAt(0).toUpperCase() + id.slice(1);
        }) || [];

        // 2. Process the "Tags" or "Tools" field
        let customTags = [];
        const rawTags = fields.tags || fields.tools;
        if (rawTags) {
            if (Array.isArray(rawTags)) {
                customTags = rawTags;
            } else if (typeof rawTags === 'string') {
                customTags = rawTags.split(',').map(t => t.trim());
            }
        }

        return {
            id: sys.id,
            slug: fields.slug,
            title: fields.title,
            excerpt: fields.shortDescription,
            datePublished: fields.publishedDate || sys.createdAt,
            dateModified: sys.updatedAt,
            image: fields.featuredImage?.fields?.file?.url ? `https:${fields.featuredImage.fields.file.url}` : null,
            imageAlt: fields.featuredImage?.fields?.title || fields.title,
            readingTime: fields.readingTime || 5, // Note: consider adding to Contentful
            tools: customTags.length > 0 ? customTags : (platformTags.length > 0 ? platformTags : []),
            author: {
                name: fields.author?.fields?.name || "Lindy Ramirez",
                avatar: fields.author?.fields?.avatar?.fields?.file?.url 
                    ? `https:${fields.author.fields.avatar.fields.file.url}` 
                    : "/static/lindy-avatar.webp",
            }
        }
    })

    const latestPost = mappedPosts[0];

    // start pagination from second newest post
    const remainingPosts = mappedPosts.slice(1);

    // Calculate pagination
    const totalPages = Math.ceil(remainingPosts.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const currentPosts = remainingPosts.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Scroll to top of blog section
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if(!latestPost) return <div>Loading...</div>; // handle empty state

    return(

        <React.Fragment>
            <Head>
                <title>Blog - Lindy Ramirez | Freelance Web Developer in Los Angeles</title>
                <meta
                    name="description"
                    content="Web development content, insights, and tips from a Los Angeles-based freelance developer."
                />
                <meta name="keywords" content="wordpress blog, shopify, on page seo, los angeles wordpress developer" />
                <meta property="og:title" content="Blog | Lindy Ramirez - Freelance Web Developer" />
                <meta property="og:description" content="Web development content, insights, and tips from a Los Angeles-based freelance developer." />
                <meta property="og:image" content="https://www.lindyramirez.com/static/st_thomas_upstairs-twitter_card.png" />
                <meta property="og:url" content="https://www.lindyramirez.com/blog" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Blog | Lindy Ramirez - Freelance Web Developer" />
                <meta name="twitter:description" content="Web development content, insights, and tips from a Los Angeles-based freelance developer." />
                <meta name="twitter:image" content="https://www.lindyramirez.com/static/st_thomas_upstairs-twitter_card.png" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.lindyramirez.com/blog" />

                {/* Mobile optimization */}
                <meta name="theme-color" content="#ff6600" />

                {/* Geolocation Meta Tags */}
                <meta name="geo.region" content="US-CA" />
                <meta name="geo.placename" content="Los Angeles" />
                <meta name="geo.position" content="34.0522;-118.2437" />
                <meta name="ICBM" content="34.0522, -118.2437" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                                {
                                    "@type": "WebSite",
                                    "@id": "https://www.lindyramirez.com/#website",
                                    "url": "https://www.lindyramirez.com",
                                    "name": "Lindy Ramirez",
                                    "inLanguage": "en-US",
                                    "publisher": {
                                        "@id": "https://www.lindyramirez.com/#organization"
                                    }
                                },
                                {
                                    "@type": "Blog",
                                    "@id": "https://www.lindyramirez.com/blog#blog",
                                    "url": "https://www.lindyramirez.com/blog",
                                    "name": "Lindy Ramirez Web Development Blog",
                                    "description": "Insights, tutorials, and updates on web development, SEO, and digital marketing from Lindy Ramirez.",
                                    "inLanguage": "en-US",
                                    "publisher": {
                                        "@id": "https://www.lindyramirez.com/#organization"
                                    },
                                    "blogPost": mappedPosts.map(post => ({
                                        "@type": "BlogPosting",
                                        "headline": post.title,
                                        "description": post.excerpt,
                                        "datePublished": post.datePublished,
                                        "dateModified": post.dateModified,
                                        "mainEntityOfPage": {
                                            "@type": "WebPage",
                                            "@id": `https://www.lindyramirez.com/blog/${post.slug}`
                                        },
                                        "url": `https://www.lindyramirez.com/blog/${post.slug}`,
                                        "image": post.image,
                                        "author": {
                                            "@type": "Person",
                                            "name": post.author.name
                                        },
                                        "publisher": {
                                            "@id": "https://www.lindyramirez.com/#organization"
                                        }
                                    }))
                                },
                                {
                                    "@type": "WebPage",
                                    "@id": "https://www.lindyramirez.com/blog#webpage",
                                    "url": "https://www.lindyramirez.com/blog",
                                    "name": "Blog - Lindy Ramirez | Freelance Web Developer",
                                    "description": "My Latest Posts - Professional web development insights, WordPress & Shopify tips, and digital marketing strategies.",
                                    "inLanguage": "en-US",
                                    "isPartOf": {
                                        "@id": "https://www.lindyramirez.com/#website"
                                    },
                                    "keywords": "wordpress blog, shopify, on page seo, los angeles wordpress developer",
                                    "breadcrumb": {
                                        "@type": "BreadcrumbList",
                                        "itemListElement": [
                                            {
                                                "@type": "ListItem",
                                                "position": 1,
                                                "name": "Home",
                                                "item": "https://www.lindyramirez.com"
                                            },
                                            {
                                                "@type": "ListItem",
                                                "position": 2,
                                                "name": "Blog",
                                                "item": "https://www.lindyramirez.com/blog"
                                            }
                                        ]
                                    },
                                    "mainEntity": {
                                        "@id": "https://www.lindyramirez.com/blog#blog"
                                    }
                                },
                                {
                                    "@type": "Organization",
                                    "@id": "https://www.lindyramirez.com/#organization",
                                    "name": "Lindy Ramirez Web Development",
                                    "url": "https://www.lindyramirez.com",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://www.lindyramirez.com/static/Lr-svg.svg",
                                        "width": 100,
                                        "height": 100
                                    },
                                    "sameAs": [
                                        "https://www.linkedin.com/in/lindy-ramirez-8786102b/",
                                        "https://github.com/habanerocity",
                                        "https://x.com/LindyRamirez"
                                    ],
                                    "contactPoint": {
                                        "@type": "ContactPoint",
                                        "email": "hello@lindyramirez.com",
                                        "contactType": "Customer Service",
                                        "areaServed": "US",
                                        "availableLanguage": ["English", "Spanish"]
                                    }
                                }
                            ]
                        })
                    }
                </script>
            </Head>
            <div className={classes.pg} itemScope itemType="https://schema.org/WebPage">
                <NavigationBar />
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={pageFadeInAnimation}
                    onAnimationStart={pageFadeInAnimation.onAnimationStart}
                >
                    <SectionContainer className="min-h-auto">
                        <Container className={`d-flex flex-column position-relative ${classes.flex__container__top_section}`}>
                            <section className={classes.flex__container} aria-labelledby="services-heading" role="banner">
                                <header className={`w-100 align-items-start text-start justify-content-start ${classes.headings__container}`}>
                                    <Headings id="services-heading" itemProp="name" heading="My Latest Posts">Blog</Headings>      
                                </header>
                            </section>
                            <SplitHero
                                id="latest-post"
                                variant="blog"
                                subtitle="Latest Post"
                                title={latestPost.title}
                                description={latestPost.excerpt}
                                slug={latestPost.slug}
                                datePublished={latestPost.datePublished}
                                readingTime={latestPost.readingTime}
                                tags={latestPost.tools}
                                image={{
                                    src: latestPost.image,
                                    alt: latestPost.imageAlt,
                                    priority: true
                                }}
                            />
                            <section className={`${classes.flex__container} align-items-start flex-column`}  aria-labelledby="service-offerings-heading">
                                <h2 id="service-offerings-heading" className={classes.visually_hidden}>
                                    Web Development Blog Posts
                                </h2>
                                <div className='mt-5 w-100 d-flex justify-content-between align-items-start flex-wrap gap-1' >
                                    {currentPosts.map((post, index) => renderBlogPostCards(post, index))}
                                </div>
                                <div className='d-flex justify-content-center align-items-center w-100' >
                                    <BlogPagination 
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                </div>
                            </section>
                        </Container>
                    <Footer role="contentinfo" aria-label="Site footer"/>
                </SectionContainer>
                </motion.div>
                <LogoBar />
            </div>
        
        </React.Fragment>
    )
};

export default Blog;