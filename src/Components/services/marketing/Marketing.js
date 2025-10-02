import WhatYouGetService from "../../Shared/WhatYouGetService/WhatYouGetService";
// import WhatYouGetService from "./WhatYouGetService"; // adjust path if needed
// import { Helmet } from "react-helmet";

const MarketingCRM = () => {
  const bannerInfo = {
    bannerTitle:
      "Enhance Your Customer Interaction with AI-Driven Marketing and CRM",
    bannerDescription:
      "At NeuronsNest, we revolutionize marketing and customer relationship management with AI-driven tools that automate tasks, personalize outreach, and enhance campaign performance. By integrating AI into your marketing and CRM strategies, you can build stronger, more meaningful relationships with your audience, increase conversion rates, and scale your operations seamlessly. Our tools not only optimize customer journeys but also empower your team to focus on strategic growth initiatives rather than manual processes. Experience the future of customer engagement with NeuronsNest’s AI-powered marketing and CRM services—designed to accelerate your business growth, boost customer loyalty, and maximize ROI.",
    bannerImg:
      "https://lottie.host/520b99b6-f245-43e8-8baf-99b23aa38b62/XhaF1aU585.lottie",
  };

  const getServiceTitle = "What You Get from Marketing AI & CRM Solutions";

  const lineService = [
    {
      title: "AI-Powered Lead Scoring",
      description:
        "Use machine learning algorithms to automatically rank leads based on their behavior, engagement, and conversion potential—so your sales team focuses on high-value opportunities.",
    },
    {
      title: "Behavioral Customer Segmentation",
      description:
        "Group your audience intelligently based on real-time actions, preferences, and interactions, enabling hyper-personalized marketing campaigns that convert better.",
    },
    {
      title: "Automated Email & Campaign Flows",
      description:
        "Trigger smart email sequences and campaign flows automatically, based on customer behavior, interests, or sales funnel position—reducing manual work and increasing conversions.",
    },
    {
      title: "Integrated CRM & Data Sync",
      description:
        "Connect all your marketing platforms and CRM tools into one seamless AI-powered system. Ensure that customer data flows smoothly, stays up-to-date, and drives smarter automation.",
    },
    {
      title: "Predictive Analytics & Customer Insights",
      description:
        "Leverage AI to forecast customer behavior, identify churn risks, and make proactive decisions. Gain deep, data-driven insights to optimize your strategy at every stage.",
    },
    {
      title: "Real-Time Reporting & Optimization",
      description:
        "Access AI-enhanced dashboards that provide real-time performance tracking across your campaigns and CRM. Instantly see what works, what doesn’t, and where to improve.",
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

export default MarketingCRM;
