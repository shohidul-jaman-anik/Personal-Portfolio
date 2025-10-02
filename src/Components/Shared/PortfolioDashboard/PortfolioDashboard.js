import { Badge, Col, Container, Row } from "react-bootstrap";
import Carouseles from "../Carouseles/Carouseles";

const PortfolioDashboard = ({ dashboardDescription, dashboardImages = [] }) => {
  const icons = [
    <span className="badge bg-success rounded-circle p-3 d-inline-flex align-items-center justify-content-center">
      ✓
    </span>,
    <span className="badge bg-primary rounded-circle p-3 d-inline-flex align-items-center justify-content-center">
      ✓
    </span>,
    <span className="badge bg-danger rounded-circle p-3 d-inline-flex align-items-center justify-content-center">
      ✓
    </span>,
  ];

  return (
    <section className="py-5">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <Badge bg="info" className="text-uppercase mb-2">
            Dashboard Insights
          </Badge>
          <h2 className="fw-bold">Real-Time Analytics & Monitoring</h2>
        </div>

        <Row className="align-items-center">
          {/* Left Column: Descriptions */}
          <Col lg={4} className="mb-4 mb-lg-0">
            {dashboardDescription.slice(0, 5).map((desc, i) => (
              <div className="d-flex mb-4" key={i}>
                <div className="me-3">{icons[i % icons.length]}</div>
                <div>
                  <h5 className="fw-semibold">{desc.subtitle}</h5>
                  <p className="text-muted mb-0">{desc.details}</p>
                </div>
              </div>
            ))}
          </Col>

          {/* Right Column: Carousel */}
          <Col lg={8}>
            <Carouseles images={dashboardImages} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioDashboard;
