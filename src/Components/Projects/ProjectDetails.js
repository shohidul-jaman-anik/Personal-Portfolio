import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom"; // or next/router for Next.js
import Carouseles from "../Shared/Carouseles/Carouseles";
import PortfolioDashboard from "../Shared/PortfolioDashboard/PortfolioDashboard";

const ProjectDetails = () => {
  const { id } = useParams();
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => {
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

  const project = portfolioData.find((p) => p.id === Number(id));
  if (!project) {
    return (
      <div className="text-center text-danger my-5">Project not found</div>
    );
  }

  const dashboardDescriptions = project.projectDetails
    .flatMap((detail) => detail.dashboardDescription || [])
    .slice(0, 3);

  const dashboardImages = project.projectDetails
    .flatMap((d) => d.dashboard || [])
    .slice(0, 5);

  const featuresImages = project.projectDetails
    .flatMap((detail) => detail.features || [])
    .slice(0, 10);

  return (
    <Container className="my-5 p-4 rounded bg-white">
      {/* Banner Section */}
      <Row className="align-items-center my-5">
        <Col md={6} className="text-center text-md-start ">
          <h1 className="fw-bold my-4">{project.bannerTitle}</h1>
          <p className="lead text-justify">{project.bannerDescription}</p>
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <img
            src={project.bannerImg}
            alt={`project-detail-image-${project.id}`}
            className="img-fluid rounded"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </Col>
      </Row>

      {/* Features Section */}
      <section className="py-5 py-md-5 py-lg-5">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-5">
            <p className="text-uppercase fw-bold text-primary small">
              Features
            </p>
            <h2 className="fw-bold display-5 text-dark">
              {project.bannerTitle}
            </h2>
          </div>

          {/* Grid */}
          <div className="row align-items-center g-5 text-start">
            {/* Left Side - Descriptions */}
            <div className="col-lg-5">
              {project.projectDetails
                .flatMap((detail) => detail.featuresDescription || [])
                .slice(0, 5)
                .map((desc, i) => (
                  <div className="d-flex mb-4" key={i}>
                    {/* Icons */}
                    {i === 0 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 text-success"
                        width="36"
                        height="36"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                        />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 text-primary"
                        width="36"
                        height="36"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 text-danger"
                        width="36"
                        height="36"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    )}
                    {i === 3 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 text-warning"
                        width="36"
                        height="36"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M9.5 18h5m-4.5 3h4.5M12 2a7 7 0 00-4 12.75V17a1 1 0 001 1h6a1 1 0 001-1v-2.25A7 7 0 0012 2z"
                        />
                      </svg>
                    )}

                    {/* Text */}
                    <div className="ms-3">
                      <h4 className="fw-semibold text-dark">{desc.subtitle}</h4>
                      <p className="mb-3">{desc.details}</p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Right Side - Carousel */}
            <div className="col-lg-7">
              <div className="mx-auto" style={{ maxWidth: "1000px" }}>
                <Carouseles images={featuresImages} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <PortfolioDashboard
        dashboardDescription={dashboardDescriptions}
        dashboardImages={dashboardImages}
      />
    </Container>
  );
};

export default ProjectDetails;
