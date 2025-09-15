module.exports = {
  siteUrl: 'https://www.lindyramirez.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  transform: async (config, path) => {
    let priority = 0.7; // Default priority

    // Assign higher priority to specific pages
    if (path === '/') {
      priority = 1.0; // Homepage
    } else if (path === '/services') {
      priority = 0.9; // Services page
    } else if (['/contact'].includes(path)) {
      priority = 0.8; // Contact page
    }

    return {
      loc: path, // URL path
      changefreq: 'daily',
      priority: priority,
      lastmod: new Date().toISOString(),
    };
  },
};