import WhatYouGetService from "../../Shared/WhatYouGetService/WhatYouGetService";

const WorkflowAutomation = () => {
  const bannerInfo = {
    bannerTitle: "Boost Productivity with Smart Workflow Automation",
    bannerDescription:
      "I build AI-powered workflow automation solutions that help you work smarter, save time, and increase efficiency. By automating repetitive tasks, streamlining operations, and enabling real-time data-driven decisions, my tools let you focus on strategic priorities while the routine work runs automatically. Whether for small projects or larger operations, I create customized workflows that simplify task management, approvals, and notifications, helping you achieve more with less effort.",
    bannerImg:
      "https://lottie.host/4b5fa6f6-20c8-4459-976a-552ec11dc406/i0yp78iumY.lottie",
  };

  const getServiceTitle = "What I Offer in Workflow Automation";

  const lineService = [
    {
      title: "Task Automation",
      description:
        "I automate repetitive tasks to save time, reduce errors, and free you to focus on more strategic work.",
    },
    {
      title: "Real-Time Data Handling",
      description:
        "I integrate real-time data collection and processing into workflows for faster, smarter decision-making.",
    },
    {
      title: "Smart Approvals & Notifications",
      description:
        "Automate approval chains and notifications so the right people get informed at the right time for smoother operations.",
    },
    {
      title: "Cross-Tool Integration",
      description:
        "I connect your apps, CRMs, and platforms into one seamless automated system that communicates and triggers workflows efficiently.",
    },
    {
      title: "Custom Workflow Design",
      description:
        "I design automation flows tailored to your exact needs—no extra clutter, just streamlined processes that save time.",
    },
    {
      title: "Scalable & Secure",
      description:
        "My automation solutions are built to grow with you, with secure, cloud-ready infrastructure that keeps your workflows reliable.",
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

export default WorkflowAutomation;
