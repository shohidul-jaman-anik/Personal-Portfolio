import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
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
    <Container className="my-5">
      <Row className="g-4">
        {portfolioData.map((project) => (
          <Col key={project.id} md={12} lg={6}>
            <Card className="shadow-sm h-100 border-0">
              <Row className="g-0">
                {/* Image */}
                <Col md={5}>
                  <Card.Img
                    src={project.bannerImg}
                    alt={`project-image-${project.id}`}
                    className="h-100 w-100 rounded-start object-fit-cover"
                    style={{ maxHeight: "250px", objectFit: "cover" }}
                  />
                </Col>

                {/* Text Content */}
                <Col md={7}>
                  <Card.Body>
                    <div className="badge bg-dark mb-2">PROJECT</div>
                    <Card.Title className="h5">
                      {project.bannerTitle}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      {project.bannerDescription
                        ? project.bannerDescription.length > 400
                          ? project.bannerDescription.slice(0, 400) + "..."
                          : project.bannerDescription
                        : "No description available."}
                    </Card.Text>
                    <Link
                      to={`/projects/${project.id}`}
                      className="btn btn-outline-primary btn-sm"
                    >
                      Learn More &rarr;
                    </Link>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
