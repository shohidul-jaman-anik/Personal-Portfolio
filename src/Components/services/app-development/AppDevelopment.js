import WhatYouGetService from "../../Shared/WhatYouGetService/WhatYouGetService";
// import WhatYouGetService from "./WhatYouGetService"; // adjust the path
// import { Helmet } from "react-helmet";

const AppDevelopment = () => {
  const bannerInfo = {
    bannerTitle: "I Build Engaging Mobile Apps for Android & iOS",
    bannerDescription:
      "In today’s fast-paced mobile world, apps need to be both functional and delightful to use. As a developer, I specialize in creating custom Android and iOS applications that turn ideas into impactful digital experiences. My focus is on building apps with clean UI, smooth performance, and features that keep users coming back. Whether it’s a startup MVP or a feature-rich enterprise solution, I transform concepts into apps that boost visibility, engage users, and deliver real value across platforms.",
    bannerImg:
      "https://lottie.host/113e1af0-3c70-4799-9637-2841ad6055cf/ljMELfz5WR.lottie",
  };

  const getServiceTitle = "What I Offer in App Development";

  const lineService = [
    {
      title: "Beautiful & User-Friendly UI",
      description:
        "I design intuitive and attractive interfaces that enhance usability and reflect your brand identity, ensuring users stay engaged.",
    },
    {
      title: "Native Development for Android & iOS",
      description:
        "I build high-performance apps tailored for each platform, making full use of device features for a seamless experience.",
    },
    {
      title: "Scalable & Reliable Apps",
      description:
        "I develop apps that grow with your needs — ready to handle more users, more data, and evolving business goals.",
    },
    {
      title: "App Store Optimization (ASO)",
      description:
        "I optimize your app store presence with engaging descriptions, keywords, and visuals to improve discoverability and downloads.",
    },
    {
      title: "Maintenance & Future Updates",
      description:
        "From launch to long-term success, I ensure your app stays up-to-date, bug-free, and ready for new features.",
    },
    {
      title: "Security First Development",
      description:
        "I follow best practices to safeguard user data and ensure compliance with platform guidelines for a trustworthy experience.",
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

export default AppDevelopment;
