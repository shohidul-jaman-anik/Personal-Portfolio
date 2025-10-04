import Carouseles from "../Carouseles/Carouseles";
import 'bootstrap/dist/css/bootstrap.min.css';

const PortfolioDashboard = ({ dashboardDescription, dashboardImages = [] }) => {
  const icons = [
    // Icon 1 - Green
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="36"
      height="36"
      className="text-success"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
      />
    </svg>,

    // Icon 2 - Blue
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="36"
      height="36"
      className="text-primary"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>,

    // Icon 3 - Red
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="36"
      height="36"
      className="text-danger"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>,

    // Icon 4 - Yellow
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="36"
      height="36"
      className="text-warning"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.5 18h5m-4.5 3h4.5M12 2a7 7 0 00-4 12.75V17a1 1 0 001 1h6a1 1 0 001-1v-2.25A7 7 0 0012 2z"
      />
    </svg>,
  ];

  return (
    <section className="py-5">
      <div className="container">
        {/* Title */}
        <div className="text-center mx-auto" style={{ maxWidth: "700px" }}>
          <p className="text-uppercase fw-bold text-primary small">
            Dashboard Insights
          </p>
          <h2 className="mt-3 fw-bold text-dark display-6">
            Real-Time Analytics & Monitoring
          </h2>
        </div>

        {/* Grid Row */}
        <div className="row align-items-center mt-5 text-start">
          {/* LEFT SIDE */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            {dashboardDescription.slice(0, 5).map((desc, i) => (
              <div className="d-flex align-items-start mb-4" key={i}>
                <div className="flex-shrink-0">{icons[i]}</div>
                <div className="ms-3">
                  <h4 className="fw-semibold text-dark">{desc.subtitle}</h4>
                  <p className="mb-3">{desc.details}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-7">
            <div className="mx-auto" style={{ maxWidth: "1000px" }}>
              <Carouseles images={dashboardImages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDashboard;
