import WhatYouGetService from "../../Shared/WhatYouGetService/WhatYouGetService";
// import WhatYouGetService from "./WhatYouGetService"; // adjust path if needed
// import { Helmet } from "react-helmet";

const AiAutomation = () => {
  const bannerInfo = {
    bannerTitle: "Turning Ideas into Impact — Building Smarter with Code & AI",
    bannerDescription:
      "As a passionate full-stack developer, I focus on creating intelligent, efficient, and scalable solutions that simplify complex problems. My work blends modern development practices with AI-driven innovation — helping businesses and individuals save time, reduce effort, and achieve more. From frontend experiences to backend systems and cloud-native solutions, I strive to craft applications that not only perform but also empower growth. Every project I take on is an opportunity to build something meaningful, impactful, and future-ready.",
    bannerImg:
      "https://lottie.host/c2395a2f-5e74-474f-8532-23c9bc1cc71b/9v8J1AgwKt.lottie",
  };

  const getServiceTitle = "What You Get from AI Automation Service";

  const lineService = [
    {
      title: "Smart & Automated Workflows",
      description:
        "I develop systems that reduce repetitive work — from data handling to task automation — allowing you to focus on the important parts of your business.",
    },
    {
      title: "Data-Driven Decision Tools",
      description:
        "I integrate solutions that analyze real-time data, providing insights and reports that help in smarter and faster decision-making.",
    },
    {
      title: "Conversational & NLP Solutions",
      description:
        "By using chatbots, sentiment analysis, and AI-driven communication tools, I create engaging and human-like user interactions.",
    },
    {
      title: "Visual Intelligence with Computer Vision",
      description:
        "I build applications that can detect objects, recognize faces, and process images — useful for security, quality assurance, and user engagement.",
    },
    {
      title: "Personalized User Experiences",
      description:
        "From tailored recommendations to adaptive interfaces, I design solutions that boost engagement and satisfaction by putting users first.",
    },
    {
      title: "Scalable & Secure Applications",
      description:
        "I deploy applications on modern cloud infrastructure that scales with demand, ensuring both security and top-notch performance.",
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

export default AiAutomation;
