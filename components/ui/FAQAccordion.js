import Accordion from 'react-bootstrap/Accordion';
import classes from './FAQSection.module.scss';

function FAQAccordion({ faqs, className = 'w-100 fs-3', accordionId = 'faq-accordion' }) {
  return (
    <div
      itemScope
      itemType="https://schema.org/ItemList"
      role="group"
      aria-label="Frequently asked questions"
    >
      <span itemProp="name" className={classes.visually_hidden}>
        Web Development services FAQ
      </span>
      <span itemProp="description" className={classes.visually_hidden}>
        Common questions about Web Development services in Los Angeles
      </span>
      
      <Accordion 
        className={className} 
        flush
        id={accordionId}
        role="presentation"
      >
        {faqs.map((faq, index) => {
          const questionId = `${accordionId}-question-${index}`;
          const answerId = `${accordionId}-answer-${index}`;
          
          return (
            <Accordion.Item 
              key={index} 
              eventKey={index.toString()}
              itemScope
              itemType="https://schema.org/Question"
              itemProp="itemListElement"
            >
              <Accordion.Header
                as="h3"
                id={questionId}
                aria-describedby={answerId}
                itemProp="name"
              >
                {faq.question}
              </Accordion.Header>
              
              <Accordion.Body 
                className='fs-3'
                id={answerId}
                aria-labelledby={questionId}
                role="region"
                itemProp="acceptedAnswer"
                itemScope
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">
                  {typeof faq.answer === 'string' ? (
                    <p>{faq.answer}</p>
                  ) : (
                    faq.answer
                  )}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}

export default FAQAccordion;