import "bootstrap/dist/css/bootstrap.min.css";
import WhatYouGetService from "../../Shared/WhatYouGetService/WhatYouGetService";

const SoftwareDevelopment = () => {
  const bannerInfo = {
  bannerTitle: "Crafting High-Quality Software Solutions",
  bannerDescription:
    "I build custom software, web apps, and mobile applications designed to solve real-world problems. Using modern technologies, I create scalable, secure, and high-performing digital products. Whether it's a simple tool, a full-featured app, or smart automation, I deliver solutions that make a tangible impact.",
  bannerImg:
    "https://lottie.host/0a10f08f-f007-407e-a957-fd331ff36e88/RzJ3fgNyH3.lottie",
};

const getServiceTitle = "What I Offer as a Software Developer";

const lineService = [
  {
    title: "Custom Software Solutions",
    description:
      "I create software tailored to your specific needs, streamlining processes and enhancing efficiency.",
  },
  {
    title: "Agile Development Approach",
    description:
      "I follow agile principles to deliver functional, high-quality software iteratively and efficiently.",
  },
  {
    title: "Scalability & Performance",
    description:
      "I design systems that grow with your needs, ensuring optimized performance and smooth user experiences.",
  },
  {
    title: "Testing & Security",
    description:
      "I conduct thorough testing and implement security best practices to deliver reliable, safe applications.",
  },
  {
    title: "Optimized User Experience",
    description:
      "I focus on fast load times, intuitive interfaces, and responsive designs for seamless interaction across devices.",
  },
  {
    title: "Maintenance & Support",
    description:
      "I provide ongoing updates and improvements to ensure your software remains current and fully functional.",
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
