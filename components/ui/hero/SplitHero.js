import Image from "next/image";
import PropTypes from "prop-types";
import classes from "./SplitHero.module.scss";

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
  schemaType = "https://schema.org/Service"
}) => {
  const {
    src,
    alt,
    blurDataURL,
    priority = false,
    sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw",
    quality = 85
  } = image || {};

  return (
    <section
      className={`row mt-5 gx-0 ${reverse ? 'flex-row-reverse' : ''} ${className}`}
      aria-labelledby={`${id}-heading`}
      itemScope
      itemType={schemaType}
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
              itemProp="name"
            >
              {title}
            </h1>
          )}
        </header>
        {description && (
          <p
            itemProp="description"
            className={`text-white mt-4 ${classes.services__banner_description}`}
          >
            {description}
          </p>
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
  schemaType: PropTypes.string
};

export default SplitHero;