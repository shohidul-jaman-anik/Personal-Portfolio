import WhatYouGetService from "../../Shared/WhatYouGetService/WhatYouGetService";
// import WhatYouGetService from "./WhatYouGetService"; // adjust path if needed
// import { Helmet } from "react-helmet";

const DevopsEng = () => {
  const bannerInfo = {
    bannerTitle: "Streamlined Development with DevOps Engineering",
    bannerDescription:
      "I specialize in DevOps practices that bridge the gap between development and operations, ensuring faster delivery, reliable deployments, and scalable systems. By automating workflows, managing cloud infrastructure, and implementing CI/CD pipelines, I help teams build, test, and deploy applications efficiently. My focus is on reliability, performance, and continuous improvement — making software delivery smoother and more predictable.",
    bannerImg: "https://lottie.host/your-lottie-link-for-devops.lottie", // replace with a DevOps-themed Lottie animation
  };

  const getServiceTitle = "What I Offer as a DevOps Engineer";

  const lineService = [
    {
      title: "Continuous Integration & Deployment (CI/CD)",
      description:
        "I design pipelines that automatically build, test, and deploy applications, reducing manual work and accelerating release cycles.",
    },
    {
      title: "Cloud Infrastructure Management",
      description:
        "I manage scalable cloud environments (AWS, Azure, or GCP) to ensure applications run smoothly and efficiently under varying loads.",
    },
    {
      title: "Containerization & Orchestration",
      description:
        "I use Docker and Kubernetes to package applications and manage containerized environments, making deployments portable and reliable.",
    },
    {
      title: "Monitoring & Logging",
      description:
        "I implement monitoring and logging solutions to track system health, detect anomalies, and quickly resolve issues.",
    },
    {
      title: "Infrastructure as Code (IaC)",
      description:
        "I use tools like Terraform and Ansible to automate infrastructure setup and configuration, ensuring consistency and reproducibility.",
    },
    {
      title: "Security & Compliance",
      description:
        "I integrate security best practices into pipelines and cloud environments, maintaining compliance while enabling fast, safe deployments.",
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

export default DevopsEng;
