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
            background: "linear-gradient(to top, #6964faff 0%, transparent 20%)",
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
            Contact Us
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

        <div className="row g-4">
          {lineService?.map((service, index) => (
            <div className="col-12" key={index}>
              <div
                className={`card shadow-lg p-4 border-0 ${
                  index % 2 === 0 ? "ms-md-auto me-md-5" : "me-md-auto ms-md-5"
                }`}
                style={{ maxWidth: "500px" }}
              >
                <h4 className="fw-bold mb-3">{service.title}</h4>
                <p className="">{service.description}</p>
              </div>

              {/* Timeline Line + Number */}
              <div className="d-flex justify-content-center position-relative">
                <div
                  className="bg-primary"
                  style={{
                    width: "2px",
                    height: "50px",
                  }}
                ></div>
                <div
                  className="position-absolute rounded-circle bg-primary text-white d-flex align-items-center justify-content-center shadow"
                  style={{
                    top: "-10px",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  {index + 1}
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
