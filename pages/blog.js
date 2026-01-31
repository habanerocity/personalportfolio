import React, { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import Container from "react-bootstrap/Container";
import classes from "./blog.module.scss";

import BlogPagination from "../components/Pagination";

import NavigationBar from '../components/ui/NavigationBar';
import LogoBar from '../components/ui/LogoBar';
import Footer from '../components/ui/Footer';
import SectionContainer from '../components/ui/SectionContainer';
import Headings from '../components/ui/Headings';
import SplitHero from "../components/ui/hero/SplitHero";

import renderBlogPostCards from "../components/renderBlogPostCards";
import { blogPostsInfoData } from "../data/blogPostsCardInfoData";

import pageFadeInAnimation from "../animations/pageFadeInAnimation";

import { servicesHeroData } from "../data/services/servicesHeroData";

const POSTS_PER_PAGE = 6;

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const sortedPosts = [...blogPostsInfoData].sort(
        (a, b) => new Date(b.datePublished) - new Date(a.datePublished)
    );

    const latestPost = sortedPosts[0];

    // start pagination from second newest post
    const remainingPosts = sortedPosts.slice(1);

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


    return(

        <React.Fragment>
            <Head>
                <title>Blog - Lindy Ramirez | Freelance Web Developer in Los Angeles</title>
                <meta
                    name="description"
                    content="Professional web development services in Los Angeles: WordPress & Shopify development, custom landing pages, SEO optimization, and digital marketing. Monthly packages from $199. Get a free consultation today!"
                />
                <meta property="og:title" content="Web Development Services in Los Angeles | Lindy Ramirez" />
                <meta property="og:description" content="Professional web development services..." />
                <meta property="og:image" content="https://www.lindyramirez.com/static/st_thomas_upstairs-twitter_card.png" />
                <meta property="og:url" content="https://www.lindyramirez.com/services" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Web Development Services | Lindy Ramirez" />
                <meta name="twitter:description" content="Professional web development services in Los Angeles: WordPress & Shopify development, custom landing pages, SEO optimization, and digital marketing." />
                <meta name="twitter:image" content="https://www.lindyramirez.com/static/st_thomas_upstairs-twitter_card.png" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.lindyramirez.com/services" />

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
                                    "@type": "ProfessionalService",
                                    "@id": "https://www.lindyramirez.com/services#business",
                                    "name": "Lindy Ramirez Freelance Web Development",
                                    "image": "https://www.lindyramirez.com/static/optimized/st_thomas_up_close-optimized.webp",
                                    "email": "hello@lindyramirez.com",
                                    "url": "https://www.lindyramirez.com/services",
                                    "priceRange": "$199 - $1099",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "addressLocality": "Los Angeles",
                                        "addressRegion": "CA",
                                        "addressCountry": "US"
                                    },
                                    "geo": {
                                        "@type": "GeoCoordinates",
                                        "latitude": "34.0522",
                                        "longitude": "-118.2437"
                                    },
                                    "openingHoursSpecification": {
                                        "@type": "OpeningHoursSpecification",
                                        "dayOfWeek": [
                                            "Monday",
                                            "Tuesday",
                                            "Wednesday",
                                            "Thursday",
                                            "Friday"
                                        ],
                                        "opens": "09:00",
                                        "closes": "18:00"
                                    },
                                     "areaServed": [
                                    {
                                        "@type": "City",
                                        "name": "Los Angeles",
                                        "sameAs": "https://en.wikipedia.org/wiki/Los_Angeles"
                                    },
                                    {
                                        "@type": "City",
                                        "name": "Granada Hills"
                                    },
                                    {
                                        "@type": "City",
                                        "name": "Tarzana"
                                    },
                                    {
                                        "@type": "City",
                                        "name": "Pasadena"
                                    }
                                ],
                                },
                                {
                                    "@type": "WebPage",
                                    "@id": "https://www.lindyramirez.com/services#webpage",
                                    "url": "https://www.lindyramirez.com/services",
                                    "name": "Services - Lindy Ramirez | Freelance Web Developer",
                                    "description": "Professional web development services including website maintenance, website migrations, custom development, SEO optimization, and digital marketing strategies. Monthly packages starting at $199.",
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
                                                "name": "Services",
                                                "item": "https://www.lindyramirez.com/services"
                                            }
                                        ]
                                    },
                                    "mainEntity": {
                                        "@type": "OfferCatalog",
                                        "name": "Web Development Service Packages",
                                        "itemListElement": [
                                            {
                                                "@type": "Offer",
                                                "itemOffered": {
                                                    "@type": "Service",
                                                    "name": "Basic Package",
                                                    "description": "Ideal for brands whom need consistent web maintenance, content management, and website optimization.",
                                                    "provider": {
                                                        "@id": "https://www.lindyramirez.com/services#business"
                                                    },
                                                    "serviceType": "Website Maintenance",
                                                    "areaServed": {
                                                        "@type": "Country",
                                                        "name": "United States"
                                                    }
                                                },
                                                "price": "199.00",
                                                "priceCurrency": "USD",
                                                "priceSpecification": {
                                                    "@type": "UnitPriceSpecification",
                                                    "price": "199.00",
                                                    "priceCurrency": "USD",
                                                    "unitText": "MONTH"
                                                },
                                                "availability": "https://schema.org/InStock",
                                                "url": "https://www.lindyramirez.com/contact",
                                                "category": "Web Maintenance"
                                            },
                                            {
                                                "@type": "Offer",
                                                "itemOffered": {
                                                    "@type": "Service",
                                                    "name": "Standard Package",
                                                    "description": "Best suited for brands requiring custom development, web design, and SEO services to enhance their online presence.",
                                                    "provider": {
                                                        "@id": "https://www.lindyramirez.com/services#business"
                                                    },
                                                    "serviceType": "Web Development & SEO",
                                                    "areaServed": {
                                                        "@type": "Country",
                                                        "name": "United States"
                                                    }
                                                },
                                                "price": "649.00",
                                                "priceCurrency": "USD",
                                                "priceSpecification": {
                                                    "@type": "UnitPriceSpecification",
                                                    "price": "649.00",
                                                    "priceCurrency": "USD",
                                                    "unitText": "MONTH"
                                                },
                                                "availability": "https://schema.org/InStock",
                                                "url": "https://www.lindyramirez.com/contact",
                                                "category": "Web Development",
                                                "eligibleRegion": {
                                                    "@type": "Country",
                                                    "name": "US"
                                                }
                                            },
                                            {
                                                "@type": "Offer",
                                                "itemOffered": {
                                                    "@type": "Service",
                                                    "name": "Premium Package",
                                                    "description": "Perfect for brands looking for complete web development services and robust digital marketing strategies.",
                                                    "provider": {
                                                        "@id": "https://www.lindyramirez.com/services#business"
                                                    },
                                                    "serviceType": "Full-Service Web Development & Marketing",
                                                    "areaServed": {
                                                        "@type": "Country",
                                                        "name": "United States"
                                                    }
                                                },
                                                "price": "1099.00",
                                                "priceCurrency": "USD",
                                                "priceSpecification": {
                                                    "@type": "UnitPriceSpecification",
                                                    "price": "1099.00",
                                                    "priceCurrency": "USD",
                                                    "unitText": "MONTH"
                                                },
                                                "availability": "https://schema.org/InStock",
                                                "url": "https://www.lindyramirez.com/contact",
                                                "category": "Full-Service Web Development"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "@type": "Service",
                                    "@id": "https://www.lindyramirez.com/services#landing-page-development",
                                    "name": "Landing Page Development",
                                    "description": "I build custom-coded, high-converting landing pages that blend strategic UX with crisp visuals. Every element, from the headline to the call-to-action, is optimized to turn visitors into leads or customers. No cookie-cutter templates, just custom-built pages designed to grow your business.",
                                    "provider": {
                                        "@id": "https://www.lindyramirez.com/services#business"
                                    },
                                    "serviceType": "Landing Page Development",
                                    "category": "Web Development",
                                    "url": "https://www.lindyramirez.com/services/landing-page-development"
                                },
                                {
                                    "@type": "Service",
                                    "@id": "https://www.lindyramirez.com/services#wordpress-development",
                                    "name": "WordPress Development",
                                    "description": "Generic WordPress sites underperform. Custom-built solutions with optimized code, tailored plugins, and brand-aligned design fix that. Whether you need a custom theme, existing site overhaul, or tailored plugins for advanced functionality, I create solutions that get results.",
                                    "provider": {
                                        "@id": "https://www.lindyramirez.com/services#business"
                                    },
                                    "serviceType": "WordPress Development",
                                    "category": "Web Development",
                                    "url": "https://www.lindyramirez.com/services/wordpress-development"
                                },
                                {
                                    "@type": "Service",
                                    "@id": "https://www.lindyramirez.com/services#shopify-development",
                                    "name": "Shopify Theme Development",
                                    "description": "Your Shopify store should sell for you—even when you’re offline. I build custom Shopify solutions that convert browsers into buyers, with custom themes, conversion-focused design, and seamless functionality. I design storefronts that reflect your brand and drive revenue.",
                                    "provider": {
                                        "@id": "https://www.lindyramirez.com/services#business"
                                    },
                                    "serviceType": "Shopify Development",
                                    "category": "E-commerce Development",
                                    "url": "https://www.lindyramirez.com/services/shopify-development"
                                },
                                {
                                    "@type": "Service",
                                    "@id": "https://www.lindyramirez.com/services#digital-marketing",
                                    "name": "Digital Marketing Services",
                                    "description": "Need a partner to level up your digital presence? From social media marketing that engages and converts, to on-page SEO that boosts your site's visibility, and ensuring your site is properly indexed by Google and Bing, I offer comprehensive services that establish your brand as a leader in your industry.",
                                    "provider": {
                                        "@id": "https://www.lindyramirez.com/services#business"
                                    },
                                    "serviceType": "Digital Marketing",
                                    "category": "Digital Marketing",
                                    "url": "https://www.lindyramirez.com/services/digital-marketing"
                                },
                                {
                                    "@type": "ItemList",
                                    "@id": "https://www.lindyramirez.com/services#client-logos",
                                    "name": "Brands We've Worked With",
                                    "itemListElement": [
                                        {
                                            "@type": "Organization",
                                            "name": "Taste Tripping",
                                            "logo": "https://www.lindyramirez.com/static/tt.svg"
                                        },
                                        {
                                            "@type": "Organization",
                                            "name": "Victorie Packaging",
                                            "logo": "https://www.lindyramirez.com/static/VICTORIE-TM-5.webp"
                                        },
                                        {
                                            "@type": "Organization",
                                            "name": "The Zoe PH",
                                            "logo": "https://www.lindyramirez.com/static/The-Zoe-PH-edited.webp"
                                        },
                                        {
                                            "@type": "Organization",
                                            "name": "Bang",
                                            "logo": "https://www.lindyramirez.com/static/bang-logo.webp"
                                        }
                                    ]
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