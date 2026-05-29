import { client } from '../components/utils/contentfulClient';

/**
 * Fetch a service landing page by its slug.
 * @param {string} slug 
 * @returns {Promise<Object|null>}
 */
export async function getServiceLandingPageBySlug(slug) {
  try {
    const response = await client.getEntries({
      content_type: 'serviceLandingPage',
      'fields.slug': slug,
      include: 5, // Deep include for nested sections
      limit: 1,
    });

    if (!response.items || response.items.length === 0) {
      return null;
    }

    return response.items[0];
  } catch (error) {
    console.error(`Error fetching service landing page with slug ${slug}:`, error);
    return null;
  }
}

/**
 * Fetch a service page by its slug.
 * @param {string} slug 
 * @returns {Promise<Object|null>}
 */
export async function getServicePageBySlug(slug) {
  try {
    const response = await client.getEntries({
      content_type: 'servicePage',
      'fields.slug': slug,
      include: 5, // Deep include to fetch nested references like Hero, Sequences, FAQs, etc.
      limit: 1,
    });

    if (!response.items || response.items.length === 0) {
      return null;
    }

    return response.items[0];
  } catch (error) {
    console.error(`Error fetching service page with slug ${slug}:`, error);
    return null;
  }
}

/**
 * Format Contentful asset URL.
 * @param {Object} asset 
 * @returns {string|null}
 */
export function formatImageUrl(asset) {
  if (!asset || !asset.fields || !asset.fields.file || !asset.fields.file.url) {
    return null;
  }
  const url = asset.fields.file.url;
  return url.startsWith('//') ? `https:${url}` : url;
}

/**
 * Fetch the about page data.
 * @returns {Promise<Object|null>}
 */
export async function getAboutPage() {
  try {
    const response = await client.getEntries({
      content_type: 'aboutPage',
      limit: 1,
    });
    if (!response.items || response.items.length === 0) return null;
    return response.items[0].fields;
  } catch (error) {
    console.error('Error fetching about page:', error);
    return null;
  }
}