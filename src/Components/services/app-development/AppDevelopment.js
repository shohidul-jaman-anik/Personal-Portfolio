import WhatYouGetService from "../../Shared/WhatYouGetService/WhatYouGetService";
// import WhatYouGetService from "./WhatYouGetService"; // adjust the path
// import { Helmet } from "react-helmet";

const AppDevelopment = () => {
  const bannerInfo = {
    bannerTitle: "Build Engaging and Successful Mobile Apps for Android & iOS",
    bannerDescription:
      "Today's mobile landscape demands engaging experiences that drive user loyalty and business success. Our experienced team of Android and iOS developers specializes in designing and building custom mobile applications tailored to your unique goals. From intuitive user interfaces to seamless performance, we focus on delivering apps that not only meet your requirements but exceed user expectations. Whether you’re launching a startup or scaling an enterprise, we transform your vision into powerful, feature-rich mobile apps that drive customer loyalty, boost brand visibility, and generate measurable results across both Android and iOS platforms.",
    bannerImg:
      "https://lottie.host/113e1af0-3c70-4799-9637-2841ad6055cf/ljMELfz5WR.lottie",
  };

  const getServiceTitle = "What You Get from App Development Service";

  const lineService = [
    {
      title: "Visually Appealing UI Design",
      description:
        "Our design team creates beautiful and user-friendly user interfaces (UI) that reflect your brand identity. We understand the importance of aesthetics and usability in keeping users engaged with your app.",
    },
    {
      title: "Native App Development (Android & iOS)",
      description:
        "Our expert developers build high-performing apps specifically designed for each platform (Android or iOS). This ensures your app takes full advantage of the unique features and functionalities of each device, delivering a seamless user experience.",
    },
    {
      title: "Scalability & Performance",
      description:
        "We build apps that can adapt and grow with your business. Our development approach ensures your app can handle increasing user traffic and maintain optimal performance as your app evolves.",
    },
    {
      title: "App Store Optimization (ASO)",
      description:
        "We optimize your app listing in the app stores (Google Play Store & Apple App Store) to improve discoverability. This includes crafting compelling descriptions, choosing relevant keywords, and utilizing high-quality screenshots and app previews.",
    },
    {
      title: "Ongoing Support & Maintenance",
      description:
        "We provide a comprehensive launch strategy to ensure your app reaches its target audience. We also offer ongoing maintenance and support plans to keep your app functioning flawlessly, address any issues that may arise, and incorporate future updates.",
    },
    {
      title: "Security & Compliance",
      description:
        "We prioritize robust security measures to protect your app and user data. Our development process adheres to the latest security best practices and relevant app store guidelines.",
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
