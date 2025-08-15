export const linkInfo = [
  {
    routerPath: "/",
    image: "/static/house-solid.svg",
    linkName: "Home",
    altText: "Home page icon"
  },
  {
    routerPath: "/about",
    image: "/static/circle-user-solid.svg",
    linkName: "About",
    altText: "About page icon"
  },
  {
    routerPath: "/services",
    image: "/static/laptop-code-solid.svg",
    linkName: "Services",
    altText: "Services page icon",
    subLinks: [
      {
        linkName: "Service Packages",
        routerPath: "/services",
        image: "/static/wordpress-icon.webp",
        altText: "WordPress Icon"
      },
      {
        linkName: "WordPress Development",
        routerPath: "/services/wordpress-development",
        image: "/static/wordpress-icon.webp",
        altText: "WordPress Icon"
      },
      {
        linkName: "Shopify Development",
        routerPath: "/services/shopify-development",
        image: "/static/shopify-icon.webp",
        altText: "Shopify Icon"
      },
      {
        linkName: "Landing Page Development",
        routerPath: "/services/landing-page-development",
        image: "/static/shopify-icon.webp",
        altText: "Shopify Icon"
      },
      {
        linkName: "Digital Marketing",
        routerPath: "/services/digital-marketing-services",
        image: "/static/shopify-icon.webp",
        altText: "Shopify Icon"
      },
      // Add more sub-services as needed
    ]
  },
  {
    routerPath: "/projects",
    image: "/static/briefcase-solid.svg",
    linkName: "Projects",
    altText: "Projects page icon"
  },
  {
    routerPath: "/contact",
    image: "/static/envelope-solid.svg",
    linkName: "Contact",
    altText: "Contact page icon"
  }
];
