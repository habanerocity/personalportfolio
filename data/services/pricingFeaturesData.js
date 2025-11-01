const pricingFeaturesData = [
  {
    id: 1,
    name: 'Web Maintenance & Support',
    tooltip: 'Keep your website running smoothly with regular plugin updates, security checks, and performance monitoring to ensure optimal functionality.',
    availability: {
      basic: true,
      standard: true,
      premium: true
    }
  },
  {
    id: 2,
    name: 'Content Management',
    tooltip: "I'll efficiently manage and update your website's content to keep it fresh, relevant, and engaging for your audience.",
    availability: {
      basic: true,
      standard: true,
      premium: true
    }
  },
  {
    id: 3,
    name: 'Website Optimization',
    tooltip: "Enhance your site's speed, responsiveness, and user experience with tailored optimizations that drive better performance.",
    availability: {
      basic: true,
      standard: true,
      premium: true
    }
  },
  {
    id: 4,
    name: 'Web Design',
    tooltip: "I'll create visually stunning and user-friendly web designs that align with your brand and captivate your audience.",
    availability: {
      basic: false,
      standard: true,
      premium: true
    }
  },
  {
    id: 5,
    name: 'Website/Theme Development',
    tooltip: "I'll develop unique, custom-made WordPress, Shopify, and landing page themes that bring your vision to life and offer seamless functionality.",
    availability: {
      basic: false,
      standard: true,
      premium: true
    }
  },
  {
    id: 6,
    name: 'WordPress Plugin Development',
    tooltip: "Add advanced features and custom functionalities to your WordPress site with expertly crafted plugins.",
    availability: {
      basic: false,
      standard: false,
      premium: true
    }
  },
  {
    id: 7,
    name: 'Custom SQL Queries & Reports',
    tooltip: "Gain valuable database insights with custom SQL queries and detailed CSV reports that organize and present your data effectively.",
    availability: {
      basic: false,
      standard: false,
      premium: true
    }
  },
  {
    id: 8,
    name: 'Onpage SEO',
    tooltip: "Boost your site's search engine visibility with on-page SEO strategies that optimize content, structure, and meta-data.",
    availability: {
      basic: false,
      standard: true,
      premium: true
    }
  },
  {
    id: 9,
    name: 'Google/Bing Indexing',
    tooltip: "Ensure your website is indexed correctly on Google and Bing, making it easier for potential customers to find you online.",
    availability: {
      basic: false,
      standard: true,
      premium: true
    }
  },
  {
    id: 10,
    name: 'Social Media Marketing',
    tooltip: "Engage your audience and grow your brand with targeted social media campaigns that drive traffic and conversions.",
    availability: {
      basic: false,
      standard: false,
      premium: true
    }
  },
  {
    id: 11,
    name: 'Hours Per Month',
    tooltip: "The allocated time each month dedicated to delivering the services included in your chosen package.",
    availability: {
      basic: '10',
      standard: '35',
      premium: '60'
    },
    isHours: true
  }
];

export default pricingFeaturesData;