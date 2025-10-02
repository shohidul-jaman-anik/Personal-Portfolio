import "bootstrap/dist/css/bootstrap.min.css";
import WhatYouGetService from "../../Shared/WhatYouGetService/WhatYouGetService";

const WebDevelopment = () => {
  const bannerInfo = {
    bannerTitle: "Crafting the Digital Future through Expert Web Development",
    bannerDescription:
      "At NeuronsNest, we provide professional web development services to create fast, secure, and responsive websites tailored to your business needs. Our developers build user-friendly, SEO-optimized websites that turn visitors into customers. Whether you need a custom site, eCommerce platform, or web app, we deliver scalable and innovative solutions to enhance your digital presence.",
    bannerImg:
      "https://lottie.host/a0dac632-3152-4233-8844-6b307a56df2b/cKN7KWS5sE.lottie",
  };

  const getServiceTitle = "What You Get from Web Development Service";

  const lineService = [
    {
      title: "Fully Responsive",
      description:
        "Websites designed for seamless experience across all devices—desktop, tablet, or smartphone.",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "On-page SEO best practices, including optimized meta tags, headings, keyword-rich content, and SEO-friendly URLs.",
    },
    {
      title: "Scalability",
      description:
        "Websites built to grow with your business—adding new features, products, or services without limits.",
    },
    {
      title: "Security",
      description:
        "Robust security measures including encryption and secure login systems to protect data and users.",
    },
    {
      title: "Optimized",
      description:
        "Fast-loading websites with efficient coding, image optimization, and caching to enhance user experience and rankings.",
    },
    {
      title: "Ongoing Support & Maintenance",
      description:
        "Post-launch support for technical help, updates, and security patches to keep your site running smoothly.",
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
