const pricingCardsData = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Ideal for brands whom need consistent web maintenance, content management, and site optimization.',
    price: 199,
    currency: 'USD',
    billingPeriod: 'month',
    icon: '/static/gem-solid.svg',
    iconAlt: 'Basic Package Icon',
    featured: false,
    ctaText: 'Get Started',
    ctaLink: '/contact'
  },
  {
    id: 'standard',
    name: 'Standard',
    description: 'Best suited for brands requiring custom development, web design, and SEO services to enhance their online presence.',
    price: 650,
    currency: 'USD',
    billingPeriod: 'month',
    icon: '/static/star-solid.svg',
    iconAlt: 'Standard Package Icon',
    featured: true,
    badge: 'Most Popular',
    ctaText: 'Get Started',
    ctaLink: '/contact'
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Perfect for brands looking for complete web development services and robust digital marketing strategies.',
    price: 1099,
    currency: 'USD',
    billingPeriod: 'month',
    icon: '/static/crown-solid.svg',
    iconAlt: 'Premium Package Icon',
    featured: false,
    ctaText: 'Get Started',
    ctaLink: '/contact'
  }
];

export default pricingCardsData;