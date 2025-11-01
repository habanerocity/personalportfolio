// Create: components/ui/PricingCardsGrid/PricingCardsGrid.js

import React from 'react';
import PricingCard from '../PricingCard/PricingCard';
import classes from './PricingCardsGrid.module.scss';

const PricingCardsGrid = ({ 
  cards, 
  gridClassName = '',
  cardClassName = '' 
}) => {
  return (
    <div 
      className={`d-flex flex-row justify-content-between align-items-center w-100 mt-5 ${classes.pricing_grid} ${gridClassName}`} 
      aria-label="Service Pricing Packages"
      role="list"
    >
      {cards.map((card) => (
        <PricingCard
          key={card.id}
          {...card}
          className={cardClassName}
        />
      ))}
    </div>
  );
};

export default PricingCardsGrid;