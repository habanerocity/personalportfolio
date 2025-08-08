import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function FAQAccordion({ faqs, className = 'w-100 fs-3' }) {
  return (
    <Accordion className={className} flush>
      {faqs.map((faq, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{faq.question}</Accordion.Header>
          <Accordion.Body className='fs-3'>
            {faq.answer}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default FAQAccordion;