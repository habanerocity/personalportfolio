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
        Building a custom WordPress theme from scratch involves a detailed, collaborative process: <br />
        <br />
        Initial Consultation: We discuss your goals, target audience, design preferences, and any specific features you need.<br />
        <br />
        Planning & Strategy: I create a project roadmap covering the theme’s structure, layout, and functionality, ensuring it aligns with your brand’s goals.<br />
        <br />
        Design Phase: I’ll provide design mockups or wireframes for your approval, typically in tools like Figma or Adobe Photoshop, to capture the look and feel.<br />
        <br />
        Development: I start building on top of my starter theme using custom HTML, CSS, JavaScript, and PHP, building out a custom template and unique functionality while ensuring responsiveness.<br />
        <br />
        Testing & Quality Assurance: The theme is rigorously tested for compatibility, performance, and cross-device functionality to ensure a seamless experience.<br />
        <br />
        Launch & Handover: Once approved, I’ll deploy the theme to your WordPress site, provide any needed training, and offer post-launch support to address any questions or tweaks.<br />
        <br />
        Throughout each step, I’ll keep you updated so you’re fully informed and engaged in the process.
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
        The turnaround time depends on the scope of the project and how the 
        site will be built. For custom themes, it typically takes around 
        4–5 weeks, while theme customizations generally range from 1–4 weeks, 
        depending on the complexity and deliverables provided. If we're working with 
        a page builder, the timeline is often quicker, around 1–3 weeks. 
        I’d be happy to provide a more precise estimate based on your 
        specific needs and project details.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header >Can you configure and set up plugins?</Accordion.Header>
        <Accordion.Body className='fs-3' >
        Yes, I can handle all aspects of plugin setup and configuration, 
        from integrating new plugins, to updating existing ones, customizing them,
        and resolving any conflicts that may arise. I’ll ensure each plugin works 
        the right way with your website to maintain optimal performance and 
        functionality.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header >What do I need a custom plugin for?</Accordion.Header>
        <Accordion.Body className='fs-3' >
        A custom plugin is ideal if you need specific features or functionalities 
        that aren’t available with standard plugins. It can be a unique booking 
        system, advanced data integrations, or custom user experiences, I can build 
        a plugin personalized to your exact needs, ensuring it enhances your website’s 
        functionality and aligns perfectly with your goals.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FAQAccordion;