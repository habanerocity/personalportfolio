const pricingCardsData = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'For established sites that need reliable maintenance and a developer in the background who responds swiftly when something needs attention.',
    price: 299,
    currency: '',
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
    description: 'For businesses actively growing, where the website needs to keep pace. Includes development capacity alongside ongoing support.',
    price: 699,
    currency: '',
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
    description: 'For businesses that want complete technical and marketing coverage: website development, custom plugin work, SEO, and digital marketing support under one roof.',
    price: 1199,
    currency: '',
    billingPeriod: 'month',
    icon: '/static/crown-solid.svg',
    iconAlt: 'Premium Package Icon',
    featured: false,
    ctaText: 'Get Started',
    ctaLink: '/contact'
  }
];

export default pricingCardsData;