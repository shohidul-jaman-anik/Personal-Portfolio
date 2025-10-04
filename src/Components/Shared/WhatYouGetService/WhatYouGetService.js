import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom"; // If you use React Router

const WhatYouGetService = ({ bannerInfo, getServiceTitle, lineService }) => {
  const highlightKeywords = (text, keywords) => {
    if (!text) return null;
    const parts = text.split(new RegExp(`(${keywords.join("|")})`, "gi"));

    return parts.map((part, index) =>
      keywords.some((kw) => part.toLowerCase() === kw.toLowerCase()) ? (
        <span
          key={index}
          className="position-relative d-inline-block"
          style={{
            background:
              "linear-gradient(to top, #6964faff 0%, transparent 20%)",
          }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="container mt-5">
      {/* Banner Section */}
      <div className="row align-items-center py-5">
        {/* Text Section */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h4 className="fw-bold display-5 mb-4">
            {highlightKeywords(bannerInfo?.bannerTitle, [
              "Mobile Apps",
              "Web Development",
              "Ai Automation",
              "workflow automation",
              "Custom Software",
              "AI-Driven Marketing and CRM",
            ])}
          </h4>
          <p className="mb-4">{bannerInfo?.bannerDescription}</p>
          <Link to="/contact" className="site-btn">
            Contact Me
          </Link>
        </div>

        {/* Animation/Image Section */}
        <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
          <DotLottieReact
            src={bannerInfo?.bannerImg}
            loop
            autoplay
            style={{ width: "100%", height: "500px" }}
          />
        </div>
      </div>

      {/* Service Timeline */}
      <div className="my-5">
        <h2 className="fw-bold text-center display-6 mb-5">
          {highlightKeywords(getServiceTitle, [
            "Mobile Apps",
            "Web Development",
            "Ai services",
            "workflow automation",
            "AI-Driven Marketing and CRM",
          ])}
        </h2>

        <div className="position-relative">
          {/* Vertical line in the middle */}
          <div
            className="position-absolute top-0 start-50 translate-middle-x bg-primary"
            style={{ width: "4px", height: "100%" }}
          ></div>

          {lineService?.map((service, index) => (
            <div
              key={index}
              className={`row mb-5 justify-content-${
                index % 2 === 0 ? "end" : "start"
              }`}
            >
              <div className="col-12 col-md-6">
                <div className="card shadow-lg p-4 border-0 position-relative">
                  {/* Timeline Number */}
                  <div
                    className="position-absolute top-0 start-50 translate-middle bg-primary rounded-circle text-white d-flex align-items-center justify-content-center shadow"
                    style={{
                      width: "40px",
                      height: "40px",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {index + 1}
                  </div>
                  <h4 className="fw-bold mb-3">{service.title}</h4>
                  <p className="mb-0">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatYouGetService;
