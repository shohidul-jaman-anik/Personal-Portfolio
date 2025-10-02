import "bootstrap/dist/css/bootstrap.min.css";
import WhatYouGetService from "../../Shared/WhatYouGetService/WhatYouGetService";

const SoftwareDevelopment = () => {
  const bannerInfo = {
    bannerTitle:
      "Elevate Your Business with NeuronsNest's Custom Software Solutions",
    bannerDescription:
      "NeuronsNest is a top IT solutions company that provides high-quality software development services tailored to your business needs. We build custom software, web and mobile apps, and AI-driven automation solutions. Using the latest technologies, our skilled developers create scalable, secure, and high-performing digital products. Whether you need a simple web app, a powerful enterprise system, or a smart automation tool, NeuronsNest delivers solutions that help your business grow.",
    bannerImg:
      "https://lottie.host/0a10f08f-f007-407e-a957-fd331ff36e88/RzJ3fgNyH3.lottie",
  };

  const getServiceTitle = "What You Get from Software Development Service";

  const lineService = [
    {
      title: "Custom Software Solutions",
      description:
        "Tailored software applications designed to align with your business goals and streamline processes, giving you a competitive edge.",
    },
    {
      title: "Agile Development Methodology",
      description:
        "We follow agile principles, delivering high-quality software quickly through iterative development cycles and flexibility.",
    },
    {
      title: "Scalability & Performance Optimization",
      description:
        "Solutions built to handle growth—optimized databases, caching, and responsive user experiences.",
    },
    {
      title: "Testing & Security Audits",
      description:
        "Full functional, performance, and security testing to ensure reliability and protect against vulnerabilities.",
    },
    {
      title: "Optimized User Experience",
      description:
        "We ensure lightning-fast load times, SEO-friendly coding, and smooth performance across all devices.",
    },
    {
      title: "Ongoing Support & Maintenance",
      description:
        "Post-launch support for updates, patches, and improvements—ensuring your software stays future-proof.",
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

export default SoftwareDevelopment;
