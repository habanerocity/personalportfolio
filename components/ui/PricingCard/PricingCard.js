import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './PricingCard.module.scss';

const PricingCard = ({ 
  name,
  description,
  price,
  currency = 'USD',
  billingPeriod = 'month',
  icon,
  iconAlt,
  featured = false,
  badge,
  features = [],
  ctaText = 'Get Started',
  ctaLink = '/contact',
  className = ''
}) => {
  return (
    <article 
      className={`p-5 fs-4 ${classes.pricing_card} ${featured ? classes.featured_card : ''} ${className}`}
      itemScope
      itemType="https://schema.org/Offer"
      itemProp="itemListElement"
      role="listitem"
    >
      {/* Featured Badge */}
      {badge && (
        <div className={classes.popular_badge} aria-label={badge}>
          {badge}
        </div>
      )}

      <div className={classes.card_wrapper}>
        {/* Header Section */}
        <header className='d-flex flex-row justify-content-between'>
          <div className='text-wrap d-flex flex-column justify-content-start align-items-start'>
            <h3 className="fs-2 fw-medium" itemProp="name">
              {name}
            </h3>
            <p className='fs-5' itemProp="description">
              {description}
            </p>
          </div>
          
          <div className={classes.icon_wrapper} aria-hidden="true">
            <Image
              src={icon}
              height={30}
              width={30}
              alt={iconAlt}
              role="presentation"
            />
          </div>
        </header>
        
        {/* Price Section */}
        <div 
          className='d-flex flex-row justify-content-start align-items-end mt-3'
          itemProp="priceSpecification"
          itemScope
          itemType="https://schema.org/PriceSpecification"
        >
          <data 
            className='display-4 fw-bold me-1' 
            value={price}
            itemProp="price"
          >
            ${price}
          </data>
          <span itemProp="priceCurrency" content={currency}>
            {currency} per {billingPeriod}
          </span>
        </div>
        
        {/* CTA Button */}
        <nav className="mt-5" aria-label={`Get started with ${name} package`}>
          <Link className={classes.link} href={ctaLink}>
            <button 
              className={`${classes.services__section_pricing_card_btn} w-100 fs-3`}
              itemProp="url"
            >
              {ctaText}
            </button>
          </Link>
        </nav>
      </div>
      
      {/* Schema Metadata */}
      <meta itemProp="availability" content="https://schema.org/InStock" />
    </article>
  );
};

export default PricingCard;