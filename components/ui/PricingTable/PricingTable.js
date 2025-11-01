import React from 'react';
import FeatureRow from './FeatureRow';
import CTARow from './CTARow';
import classes from './PricingTable.module.scss';

const PricingTable = ({ 
  features, 
  contactLink = '/contact',
  buttonText = 'Get Started',
  tableClassName = '',
  headerClassName = ''
}) => {
  return (
    <table className={`table table-striped mt-5 mb-0 fs-3 ${classes.table}`}>
      <thead>
        <tr className={`fs-2 ${headerClassName}`}>
          <th scope="col">Features</th>
          <th scope="col">Basic</th>
          <th scope="col">Standard</th>
          <th scope="col">Premium</th>
        </tr>
      </thead>
      <tbody>
        {features.map((feature) => (
          <FeatureRow key={feature.id} feature={feature} />
        ))}
        <CTARow contactLink={contactLink} buttonText={buttonText} />
      </tbody>
    </table>
  );
};

export default PricingTable;