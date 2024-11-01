import Accordion from 'react-bootstrap/Accordion';

function FAQAccordion() {
  return (
    <Accordion className='w-75 fs-3' flush >
      <Accordion.Item className='fs-3' eventKey="0">
        <Accordion.Header className='fs-3' >Can you customize and configure a WordPress theme that I bought from a third party?</Accordion.Header>
        <Accordion.Body className='fs-3' >    
        Yes! I can customize and configure any WordPress theme to your liking. 
        I’ll work with you to ensure your site looks and functions exactly as 
        you envision, making secure adjustments that maintain theme integrity 
        and keep your site performing at its best.   
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header >What is the step by step process for building a custom WordPress theme from scratch?</Accordion.Header>
        <Accordion.Body className='fs-3' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header >Can you fix bugs and errors on my website?</Accordion.Header>
        <Accordion.Body className='fs-3' >
        Yes! I can fix bugs and errors on your website to ensure it runs smoothly. 
        I’ll diagnose the issues and make the right fix to get your 
        site back to peak performance.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header >What types of payments do you accept?</Accordion.Header>
        <Accordion.Body className='fs-3' >
        Yes I accept payments through PayPal, Zelle, and Western Union.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header >Do you charge hourly rates or flat rates per project?</Accordion.Header>
        <Accordion.Body className='fs-3' >
        I offer flexible payment options, including hourly rates, flat rates per project, and 
        monthly retainers. While I prefer project-based pricing to ensure the best results aligned 
        with the value I provide, each project is unique. For a custom quote, feel free to send me an 
        inquiry—I'm happy to provide a free consultation to discuss your needs and offer a personalized 
        estimate.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header >Can you build landing pages with WordPress page builders such as Elementor or Divi?</Accordion.Header>
        <Accordion.Body className='fs-3' >
        I have extensive experience using WordPress page builders like 
        WP Bakery and Divi for client projects. While I typically recommend 
        custom-coded landing pages for greater control and performance, I'm 
        open to working with page builders to meet budget or time constraints 
        and create a landing page that meets your needs.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header >What is the average turnaround time to build a WordPress website?</Accordion.Header>
        <Accordion.Body className='fs-3' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header >Can you configure and set up plugins?</Accordion.Header>
        <Accordion.Body className='fs-3' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header >What do I need a custom plugin for?</Accordion.Header>
        <Accordion.Body className='fs-3' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FAQAccordion;