import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom"; // or next/router for Next.js
import PortfolioDashboard from "../Shared/PortfolioDashboard/PortfolioDashboard";
import Carouseles from "../Shared/Carouseles/Carouseles";

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
    <Container className="my-5 p-4 shadow rounded bg-white">
      {/* Banner Section */}
      <Row className="align-items-center mb-5">
        <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
          <h2 className="fw-bold">{project.bannerTitle}</h2>
          <p className="text-muted">{project.bannerDescription}</p>
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
      <h3 className="text-center mb-4">Features</h3>
      <Row>
        <Col lg={4}>
          {project.projectDetails
            .flatMap((detail) => detail.featuresDescription || [])
            .slice(0, 5)
            .map((desc, idx) => (
              <div key={idx} className="d-flex mb-3">
                <div className="me-3">
                  {/* Simple icon placeholders */}
                  <span className="badge bg-primary rounded-circle p-3 d-inline-flex align-items-center justify-content-center">
                    {idx + 1}
                  </span>
                </div>
                <div>
                  <h5>{desc.subtitle}</h5>
                  <p className="text-muted mb-0">{desc.details}</p>
                </div>
              </div>
            ))}
        </Col>
        <Col lg={8}>
          <Carouseles images={featuresImages} />
        </Col>
      </Row>

      {/* Dashboard Section */}
      <PortfolioDashboard
        dashboardDescription={dashboardDescriptions}
        dashboardImages={dashboardImages}
      />
    </Container>
  );
};

export default ProjectDetails;
