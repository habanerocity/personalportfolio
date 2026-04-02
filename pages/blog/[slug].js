import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import classes from "./[slug].module.scss";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import NavigationBar from "../../components/ui/NavigationBar";
import LogoBar from "../../components/ui/LogoBar";
import Footer from "../../components/ui/Footer";
import SectionContainer from "../../components/ui/SectionContainer";

import pageFadeInAnimation from "../../animations/pageFadeInAnimation";

import { client } from "../../components/utils/contentfulClient";
import FlexContainer from "../../components/ui/FlexContainer";
import ButtonPair from "../../components/ui/ButtonPair";

import Headings from "../../components/ui/Headings";

const richTextOptions = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { file, title } = node.data.target.fields;
            const imageUrl = file.url.startsWith("//")
                ? `https:${file.url}`
                : file.url;
            return (
                <Image
                    src={imageUrl}
                    alt={title || ""}
                    width={file.details.image.width}
                    height={file.details.image.height}
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            );
        },
        [INLINES.HYPERLINK]: (node, children) => {
            const { uri } = node.data;
            return (
                <a href={uri} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            );
        },
    },
};

export async function getStaticPaths() {
    const response = await client.getEntries({
        content_type: "pageBlogPost",
        select: "fields.slug",
    });

    const paths = response.items.map((item) => ({
        params: { slug: item.fields.slug },
    }));

    return {
        paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({ params }) {
    const response = await client.getEntries({
        content_type: "pageBlogPost",
        "fields.slug": params.slug,
        limit: 1,
    });

    if (!response.items.length) {
        return { notFound: true };
    }

    const post = response.items[0];

    return {
        props: {
            post,
        },
        revalidate: 60,
    };
}

const BlogPost = ({ post }) => {
    const { fields, sys } = post;

    const title = fields.title;
    const excerpt = fields.shortDescription;
    const datePublished = fields.publishedDate || sys.createdAt;
    const dateModified = sys.updatedAt;
    const slug = fields.slug;
    const readingTime = fields.readingTime || 5;
    const body = fields.content;

    const image = fields.featuredImage?.fields?.file?.url
        ? `https:${fields.featuredImage.fields.file.url}`
        : null;
    const imageAlt = fields.featuredImage?.fields?.title || title;

    const author = {
        name: fields.author?.fields?.name || "Lindy Ramirez",
        avatar: fields.author?.fields?.avatar?.fields?.file?.url
            ? `https:${fields.author.fields.avatar.fields.file.url}`
            : "/static/lindy-avatar.webp",
    };

    // Tags
    let tags = [];
    const rawTags = fields.tags || fields.tools;
    if (rawTags) {
        if (Array.isArray(rawTags)) {
            tags = rawTags;
        } else if (typeof rawTags === "string") {
            tags = rawTags.split(",").map((t) => t.trim());
        }
    }

    // Keywords
    const keywords = fields.blogPostKeywords || [];

    const formattedDate = new Date(datePublished).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const postUrl = `https://www.lindyramirez.com/blog/${slug}`;

    return (
        <React.Fragment>
            <Head>
                <title>{title} - Lindy Ramirez</title>
                <meta name="description" content={excerpt} />
                {keywords.length > 0 && (
                    <meta name="keywords" content={keywords.join(", ")} />
                )}

                <meta property="og:title" content={title} />
                <meta property="og:description" content={excerpt} />
                {image && <meta property="og:image" content={image} />}
                <meta property="og:url" content={postUrl} />
                <meta property="og:type" content="article" />
                <meta
                    property="article:published_time"
                    content={datePublished}
                />
                <meta
                    property="article:modified_time"
                    content={dateModified}
                />
                <meta property="article:author" content={author.name} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={excerpt} />
                {image && <meta name="twitter:image" content={image} />}

                <link rel="canonical" href={postUrl} />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WebSite",
                                "@id": "https://www.lindyramirez.com/#website",
                                url: "https://www.lindyramirez.com",
                                name: "Lindy Ramirez",
                                inLanguage: "en-US",
                                publisher: {
                                    "@id": "https://www.lindyramirez.com/#organization",
                                },
                            },
                            {
                                "@type": "BlogPosting",
                                "@id": `${postUrl}#article`,
                                headline: title,
                                description: excerpt,
                                datePublished: datePublished,
                                dateModified: dateModified,
                                url: postUrl,
                                image: image,
                                inLanguage: "en-US",
                                ...(keywords.length > 0 && {
                                    keywords: keywords.join(", "),
                                }),
                                mainEntityOfPage: {
                                    "@type": "WebPage",
                                    "@id": `${postUrl}#webpage`,
                                },
                                author: {
                                    "@type": "Person",
                                    name: author.name,
                                },
                                publisher: {
                                    "@id": "https://www.lindyramirez.com/#organization",
                                },
                            },
                            {
                                "@type": "WebPage",
                                "@id": `${postUrl}#webpage`,
                                url: postUrl,
                                name: `${title} - Lindy Ramirez`,
                                inLanguage: "en-US",
                                isPartOf: {
                                    "@id": "https://www.lindyramirez.com/#website",
                                },
                                breadcrumb: {
                                    "@type": "BreadcrumbList",
                                    itemListElement: [
                                        {
                                            "@type": "ListItem",
                                            position: 1,
                                            name: "Home",
                                            item: "https://www.lindyramirez.com",
                                        },
                                        {
                                            "@type": "ListItem",
                                            position: 2,
                                            name: "Blog",
                                            item: "https://www.lindyramirez.com/blog",
                                        },
                                        {
                                            "@type": "ListItem",
                                            position: 3,
                                            name: title,
                                            item: postUrl,
                                        },
                                    ],
                                },
                            },
                            {
                                "@type": "Organization",
                                "@id": "https://www.lindyramirez.com/#organization",
                                name: "Lindy Ramirez Web Development",
                                url: "https://www.lindyramirez.com",
                                logo: {
                                    "@type": "ImageObject",
                                    url: "https://www.lindyramirez.com/static/Lr-svg.svg",
                                    width: 100,
                                    height: 100,
                                },
                                sameAs: [
                                    "https://www.linkedin.com/in/lindy-ramirez-8786102b/",
                                    "https://github.com/habanerocity",
                                    "https://x.com/LindyRamirez",
                                ],
                            },
                        ],
                    })}
                </script>
            </Head>
            <div itemScope itemType="https://schema.org/BlogPosting">
                <NavigationBar />
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={pageFadeInAnimation}
                    onAnimationStart={pageFadeInAnimation.onAnimationStart}
                >
                    <main>
                        <SectionContainer>
                            <Container className={`${classes.flex__container__top_section} ${classes.flex__container__col}`}>
                                <FlexContainer>
                                    <article>
                                        <div className={`justify-content-start mb-5 ${classes.flex__container}`}>
                                            <header className={`align-items-start text-start justify-content-start ${classes.headings__container}`}>
                                                <Headings heading={title}>Blog Post</Headings>
                                            </header>
                                        </div>
                                        {image && (
                                            <figure className={classes.article__featured_image}>
                                                <Image
                                                    src={image}
                                                    alt={imageAlt}
                                                    fill
                                                    style={{ objectFit: "cover" }}
                                                    priority
                                                    itemProp="image"
                                                />
                                            </figure>
                                        )}
                                        {tags.length > 0 && (
                                            <ul className={`d-flex flex-wrap align-items-center mb-3 list-unstyled`} aria-label="Tags">
                                                <li className="fw-bold me-2 fs-3">Tags:</li>
                                                {tags.map((tag, index) => (
                                                    <li key={index}>
                                                        <Badge pill text="light" className={`${classes.color_orange} me-2 fs-5`}>
                                                            {tag}
                                                        </Badge>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        <div className={`d-flex align-items-center gap-3 my-3`}>
                                            <span itemProp="author" itemScope itemType="https://schema.org/Person" className="d-none fs-3 d-flex align-items-center">
                                                <span itemProp="name">{author.name}</span>
                                            </span>
                                            <time dateTime={datePublished} itemProp="datePublished" className="fs-3 d-flex align-items-center">
                                                <Image className={`me-1 ${classes.icon__black}`} src="/static/calendar-solid-full-green.svg" alt="Calendar icon" width={20} height={20} /> {formattedDate}
                                            </time>
                                            <span className="fs-3 d-flex align-items-center">
                                                <Image className={`me-1 ${classes.icon__black}`} src="/static/clock-solid-full-green.svg" alt="Clock icon" width={20} height={20} /> {readingTime} min read
                                            </span>
                                        </div>
                                        <div
                                            className={classes.article__body}
                                            itemProp="articleBody"
                                        >
                                            {body
                                                ? documentToReactComponents(
                                                    body,
                                                    richTextOptions
                                                )
                                                : null}
                                        </div>
                                        <nav aria-label="Post navigation">
                                            <ButtonPair
                                                primaryCtaButtonText="Get In Touch"
                                                primaryCtaButtonLink="/contact"
                                                secondaryCtaButtonText="Back to Blog"
                                                secondaryCtaButtonLink="/blog"
                                            />
                                        </nav>
                                    </article>
                                </FlexContainer>
                            </Container>
                        </SectionContainer>
                    </main>
                    <LogoBar />
                </motion.div>
                <Footer
                    role="contentinfo"
                    aria-label="Site footer"
                />
            </div>
        </React.Fragment>
    );
};

export default BlogPost;
