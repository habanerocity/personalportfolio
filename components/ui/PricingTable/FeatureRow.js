import React from 'react';
import Image from 'next/image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import classes from './PricingTable.module.scss';

const FeatureRow = ({ feature }) => {
  const renderTooltip = (message) => (
    <Tooltip id={`tooltip-${feature.id}`} className='fs-5'>
      {message}
    </Tooltip>
  );

  const renderCell = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Image
          className={classes.table_cell_check}
          src="/static/check.svg"
          height={25}
          width={25}
          alt="Included"
        />
      ) : (
        <span className="fw-bold">&ndash;</span>
      );
    }
    return <span className={classes.table_cell}>{value}</span>;
  };

  return (
    <tr>
      <td className={`d-flex ${classes.table_cell}`}>
        <span className='me-2'>{feature.name}</span>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip(feature.tooltip)}
        >
          <span className='d-flex flex-row align-items-center justify-content-center'>
            <Image
              src="/static/circle-question.svg"
              height={15}
              width={15}
              alt={`${feature.name} information`}
            />
          </span>
        </OverlayTrigger>
      </td>
      <td className='align-middle'>
        {renderCell(feature.availability.basic)}
      </td>
      <td className='align-middle'>
        {renderCell(feature.availability.standard)}
      </td>
      <td className='align-middle'>
        {renderCell(feature.availability.premium)}
      </td>
    </tr>
  );
};

export default FeatureRow;