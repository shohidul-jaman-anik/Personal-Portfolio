import "bootstrap/dist/css/bootstrap.min.css";
import WhatYouGetService from "../../Shared/WhatYouGetService/WhatYouGetService";

const WebDevelopment = () => {
  const bannerInfo = {
    bannerTitle: "Building Modern and Engaging Websites",
    bannerDescription:
      "I design and develop fast, secure, and responsive websites that provide excellent user experiences. From custom websites to eCommerce platforms and web apps, I create scalable solutions that help you achieve your goals and grow your online presence.",
    bannerImg:
      "https://lottie.host/a0dac632-3152-4233-8844-6b307a56df2b/cKN7KWS5sE.lottie",
  };

  const getServiceTitle = "What I Offer in Web Development";

  const lineService = [
    {
      title: "Fully Responsive Design",
      description:
        "I build websites that look and perform perfectly across all devices—desktop, tablet, and mobile.",
    },
    {
      title: "SEO-Friendly Development",
      description:
        "I implement best SEO practices including optimized meta tags, headings, keyword-rich content, and clean URLs to improve search rankings.",
    },
    {
      title: "Scalable Solutions",
      description:
        "I create websites that grow with your needs, easily adding new features, pages, or products as your business evolves.",
    },
    {
      title: "Security-Focused",
      description:
        "I apply strong security practices like encryption and secure authentication to protect your website and user data.",
    },
    {
      title: "Performance Optimization",
      description:
        "I ensure fast-loading pages with optimized code, images, and caching for better user experience and search engine ranking.",
    },
    {
      title: "Maintenance & Support",
      description:
        "I provide ongoing support for updates, troubleshooting, and improvements to keep your website running smoothly.",
    },
  ];

  return (
    <div>
      <WhatYouGetService
        bannerInfo={bannerInfo}
        getServiceTitle={getServiceTitle}
        lineService={lineService}
      />
    </div>
  );
};

export default WebDevelopment;
