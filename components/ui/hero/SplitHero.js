import Image from "next/image";
import Link from "next/link";
import Badge from "react-bootstrap/Badge";
import PropTypes from "prop-types";
import classes from "./SplitHero.module.scss";

import HeroButton from "../HeroButton";
import Hero from "../Hero";

const SplitHero = ({
  id,
  subtitle,
  title,
  description,
  image,
  reverse = false,
  className = "",
  contentClassName = "",
  imageClassName = "",
  schemaType = "https://schema.org/Service",
  // Blog-specific props
  variant = "service",
  slug,
  datePublished,
  readingTime,
  tags
}) => {
  const {
    src,
    alt,
    blurDataURL,
    priority = false,
    sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw",
    quality = 85
  } = image || {};

  const isBlog = variant === "blog";

  const formattedDate = datePublished
    ? new Date(datePublished).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null;

  return (
    <section
      className={`row mt-5 gx-0 ${reverse ? 'flex-row-reverse' : ''} ${className}`}
      aria-labelledby={`${id}-heading`}
      itemScope
      itemType={isBlog ? "https://schema.org/BlogPosting" : schemaType}
    >
      {/* Image Column */}
      <aside
        className={`col-12 px-0 col-lg-6 d-flex position-relative ${imageClassName}`}
        role="complementary"
      >
        {src && (
          <Image
            src={src}
            fill={true}
            className={`${classes.office_img} position-relative`}
            alt={alt}
            priority={priority}
            sizes={sizes}
            quality={quality}
            placeholder={blurDataURL ? "blur" : undefined}
            blurDataURL={blurDataURL}
            itemProp={isBlog ? "image" : undefined}
          />
        )}
      </aside>

      {/* Content Column */}
      <article
        itemProp="description"
        className={`col-12 col-lg-6 d-flex position-relative flex-column justify-content-center align-items-start p-5 ${classes.services__banner_text_content} ${contentClassName}`}
      >
        <header>
          {subtitle && (
            <p
              id={`${id}-heading`}
              className={`${classes.services__banner_subheading} fs-1`}
            >
              {subtitle}
            </p>
          )}

          {title && (
            <h1
              className={`fw-bold text-white ${classes.services__banner_heading}`}
              itemProp={isBlog ? "headline" : "name"}
            >
              {isBlog && slug ? (
                <Link href={`/blog/${slug}`} className="text-white text-decoration-none">
                  {title}
                </Link>
              ) : (
                title
              )}
            </h1>
          )}
        </header>

        {/* Tags */}
        {isBlog && tags && tags.length > 0 && (
          <div className={`${classes.hero__tags} mt-3 d-flex flex-wrap align-items-center`}>
            <span className="text-white fw-bold me-2 fs-5">Tags:</span>
            {tags.map((tag, index) => (
              <Badge key={index} pill text="light" className={`${classes.color_orange} me-2 fs-5`}>
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Blog Meta */}
          {isBlog && (formattedDate || readingTime) && (
            <div className={`${classes.hero__meta} d-flex align-items-center gap-3 my-3`}>
              {formattedDate && (
                <time dateTime={datePublished} itemProp="datePublished" className="text-white fs-5">
                  📅 {formattedDate}
                </time>
              )}
              {readingTime && (
                <span className="text-white fs-5">⏱️ {readingTime} min read</span>
              )}
            </div>
          )}

        {description && (
          <p
            itemProp={isBlog ? "abstract" : "description"}
            className={`text-white mt-4 ${classes.services__banner_description}`}
          >
            {description}
          </p>
        )}

        {/* CTA Button for Blog */}
        {isBlog && slug && (
          <HeroButton href={`/blog/${slug}`}>Read Post</HeroButton>
        )}
      </article>
    </section>
  );
};

SplitHero.propTypes = {
  id: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    blurDataURL: PropTypes.string,
    priority: PropTypes.bool,
    sizes: PropTypes.string,
    quality: PropTypes.number
  }).isRequired,
  reverse: PropTypes.bool,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  imageClassName: PropTypes.string,
  schemaType: PropTypes.string,
  variant: PropTypes.oneOf(["service", "blog"]),
  slug: PropTypes.string,
  datePublished: PropTypes.string,
  readingTime: PropTypes.number,
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default SplitHero;