import { Col, Container, Row } from "react-bootstrap";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Feature = () => {
  return (
    <section id="features" className="py-5">
      <Container>
        {/* Section Header */}
        <div className="">
          <h2 className="section__title">My Services</h2>

          <p className="mx-auto" style={{ maxWidth: "720px" }}>
            Discover the core offerings of my services, where creativity aligns
            with quality. Each service is thoughtfully tailored to meet your
            needs, ensuring seamless interactions and outstanding results.
          </p>
        </div>

        {/* Features Grid */}
        <Row className="g-4">
          {featuresData.map((feature, index) => (
            <Col md={6} lg={4} key={index}>
              <SingleFeature feature={feature} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Feature;
