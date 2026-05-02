import { formatImageUrl } from '../contentfulServices';

function safeFields(entry) {
  return entry?.fields ?? {};
}

export function transformHero(heroEntry) {
  const f = safeFields(heroEntry);
  return {
    title: f.title ?? '',
    description: f.description ?? '',
    heroImage: formatImageUrl(f.heroImage) ?? '',
    alt: f.heroImageAlt ?? '',
    iconSrc: formatImageUrl(f.icon) ?? '',
    iconAlt: f.iconAlt ?? '',
    ctaText: f.ctaText ?? '',
    additionalContent: f.additionalContent ?? '',
    stats: Array.isArray(f.stats)
      ? f.stats.map((stat) => {
          const s = stat?.fields ?? stat ?? {};
          return {
            label: s.label ?? '',
            value: s.value ?? '',
            unitText: s.unitText ?? '',
          };
        })
      : [],
  };
}

export function transformSequence(sequenceEntry) {
  const f = safeFields(sequenceEntry);

  const collageAlts = [
    f.imageAlt ?? '',
    f.collageImageTwoAlt ?? '',
    f.collageImageThreeAlt ?? '',
    f.collageImageFourAlt ?? '',
  ];
  const collageImages = Array.isArray(f.imageCollage)
    ? f.imageCollage.map((asset, i) => ({
        src: formatImageUrl(asset) ?? '',
        alt: collageAlts[i],
      }))
    : null;

  return {
    heading: f.heading ?? '',
    content: f.textContent ?? '',
    image: formatImageUrl(f.image) ?? '',
    imageAlt: f.imageAlt ?? '',
    ...(collageImages ? { collageImages } : {}),
  };
}

export function transformServicesGrid(fields) {
  const services = (fields.servicesGrid ?? []).map((item) => {
    const f = safeFields(item);
    return {
      iconSrc: formatImageUrl(f.icon) ?? '',
      altText: f.iconAlt ?? '',
      title: f.title ?? '',
      description: f.description ?? '',
    };
  });

  return {
    heading: fields.servicesHeading ?? '',
    services,
    sideImageSrc: formatImageUrl(fields.serviceSideImage) ?? '',
    sideImageAlt: fields.sideImageAlt ?? '',
  };
}

export function transformFaqs(fields) {
  const faqs = (fields.faqs ?? []).map((item) => {
    const f = safeFields(item);
    return {
      question: f.question ?? '',
      answer: f.answer ?? '',
    };
  });

  return {
    heading: fields.faQsHeading ?? '',
    faqs,
  };
}

export function transformCta(ctaEntry) {
  const f = safeFields(ctaEntry);
  return {
    paragraphText: f.paragraphText ?? '',
    buttonText: f.buttonText ?? '',
    contactHref: f.contactHref ?? '/contact',
  };
}

export function transformServiceLandingPage(entry) {
  const fields = entry?.fields ?? {};
  const sequences = fields.sequences ?? [];

  return {
    seoTitle: fields.seoTitle ?? '',
    seoDescription: fields.seoDescription ?? '',
    hero: transformHero(fields.heroSection),
    sequenceOne: transformSequence(sequences[0]),
    sequenceTwo: transformSequence(sequences[1]),
    sequenceThree: transformSequence(sequences[2]),
    services: transformServicesGrid(fields),
    testimonialsHeading: fields.testimonialsHeading ?? '',
    faqsData: transformFaqs(fields),
    cta: transformCta(fields.ctaSection),
  };
}
