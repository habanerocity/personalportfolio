import React from 'react';
import Link from 'next/link';
import classes from './PricingTable.module.scss';

const CTARow = ({ contactLink = '/contact', buttonText = 'Get Started' }) => {
  return (
    <tr>
      <td className='align-middle'></td>
      <td className='align-middle'>
        <Link className={classes.link} href={contactLink}>
          <button className={`${classes.services__section_pricing_card_btn} fs-4 mt-5`}>
            {buttonText}
          </button>
        </Link>
      </td>
      <td className='align-middle'>
        <Link className={classes.link} href={contactLink}>
          <button className={`${classes.services__section_pricing_card_btn} fs-4 mt-5`}>
            {buttonText}
          </button>
        </Link>
      </td>
      <td className='align-middle'>
        <Link className={classes.link} href={contactLink}>
          <button className={`${classes.services__section_pricing_card_btn} fs-4 mt-5`}>
            {buttonText}
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default CTARow;