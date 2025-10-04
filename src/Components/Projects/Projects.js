import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom"; // or next/link if using Next.js

const Projects = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "dataaaaaaaaaaa");
        setPortfolioData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load portfolio data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="container my-5 text-start text-justify">
      {portfolioData.map((project) => (
        <div
          key={project.id}
          className="row g-0  shadow-sm border rounded overflow-hidden"
           style={{marginTop:"120px"}}
        >
          {/* Left Image */}
          <div className="col-md-5 p-2 overflow-hidden">
            <img
              src={project.bannerImg}
              alt={`project-image-${project.id}`}
              className="img-fluid rounded"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>

          {/* Right Text Content */}
          <div className="col-md-7 p-4 d-flex flex-column justify-content-center" >
            <div className="badge bg-dark mb-2 text-white shadow-sm " style={{width:"75px"}}>
              Full Stack
            </div>
            <h4 className="fw-semibold mb-3">{project.bannerTitle}</h4>
            <p className="text-muted mb-4" style={{ lineHeight: "1.6" }}>
              {project.bannerDescription
                ? project.bannerDescription.length > 30
                  ? project.bannerDescription.slice(0, 400) + "..."
                  : project.bannerDescription
                : "No description available."}
            </p>
            <Link
              to={`/projects/${project.id}`}
              className="text-decoration-none fw-semibold d-flex align-items-center"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ms-2"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
