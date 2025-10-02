import WhatYouGetService from "../../Shared/WhatYouGetService/WhatYouGetService";
// import WhatYouGetService from "./WhatYouGetService"; // adjust path if needed
// import { Helmet } from "react-helmet";

const AiAutomation = () => {
  const bannerInfo = {
    bannerTitle:
      "Work Less, Achieve More — Experience the Power of our Intelligent AI Automation",
    bannerDescription:
      "At NeuronsNest, we believe your time is best spent growing your business — not juggling repetitive tasks. Our AI solutions take the hard work off your hands — streamlining operations, reducing costs, and boosting productivity so you can focus on what truly matters: growing your business. By integrating our AI into your marketing and CRM strategies, you can build stronger, more meaningful relationships with your audience, increase conversion rates, and scale your operations seamlessly. Our tools not only optimize customer journeys but also empower your team to focus on strategic growth initiatives rather than manual processes.",
    bannerImg:
      "https://lottie.host/c2395a2f-5e74-474f-8532-23c9bc1cc71b/9v8J1AgwKt.lottie",
  };

  const getServiceTitle = "What You Get from AI Automation Service";

  const lineService = [
    {
      title: "Automated Business Workflows",
      description:
        "We design AI systems that automate repetitive tasks, from data entry and scheduling to customer support. This increases efficiency, reduces operational costs, and frees up your team to focus on high-impact work.",
    },
    {
      title: "AI-Powered Decision Making",
      description:
        "Our solutions analyze vast amounts of data in real time to uncover actionable insights. From predictive analytics to intelligent reporting, you get smarter decision-making tools that drive growth.",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "Leverage AI to understand and interact with human language. From chatbots to sentiment analysis, our NLP solutions enhance user communication and enable seamless customer experiences.",
    },
    {
      title: "Computer Vision Solutions",
      description:
        "We build AI models that interpret and process visual information — useful for object detection, facial recognition, and image classification. Ideal for security, quality control, and user interaction use cases.",
    },
    {
      title: "Personalization & Recommendation Engines",
      description:
        "Boost engagement with personalized user experiences. Our AI systems dynamically recommend content, products, or actions based on user behavior and preferences — increasing conversions and satisfaction.",
    },
    {
      title: "Scalable & Secure AI Infrastructure",
      description:
        "We deploy AI models on cloud-native infrastructure that scales with your needs while maintaining enterprise-level security, performance, and compliance standards.",
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
