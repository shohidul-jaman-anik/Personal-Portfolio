import i18next from "i18next";
import { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import bd from "../../../img/bdImg.jpg";
import china from "../../../img/china.png";
import us from "../../../img/united-states.png";
import Toggle from "../../Toggle/Toggle";
import "./Navagation.css";

const Navagation = () => {
  const { t } = useTranslation();

  const changeLang = (l) => {
    return () => {
      // alert(l)
      // Now  change language
      i18next.changeLanguage(l);

      // Now set the current lang in local storage
      localStorage.setItem("language", l);
    };
  };

  useEffect(() => {
    let currentLng = localStorage.getItem("language");
    i18next.changeLanguage(currentLng);
  }, []);

  return (
    <Navbar
      className="navStyle"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" href="#home">
          <span className="header-title navName fw-bolder">
            {t("route.title")}
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link as={Link} to="/home" href="" className="">
              {t("route.home")}
            </Nav.Link>
            <NavDropdown title={t("services")} id="services-dropdown">
              <NavDropdown.Item as={Link} to="/services/web-development">
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/software-development">
                Software Development
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/app-development">
                App Development
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/ai-automation">
                AI Automation
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/workflow-automation">
                Workflow Automation
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/devops">
                Devops Engineering
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/projects">{t("route.project")}</Nav.Link>
            {/* <Nav.Link as={Link} to='/addReview' >{t('route.review')}</Nav.Link> */}
            <Nav.Link as={Link} to="/blogs" className="nav-title">
              {t("route.blogs")}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              {t("route.contact")}
            </Nav.Link>

            {/* <Nav.Link as={Link} to='/about' className='nav-title'>{t('route.about')}</Nav.Link> */}
          </Nav>
          <Nav>
            <NavDropdown title="Change Lng" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">
                <p onClick={changeLang("en")} className="me-2">
                  <img
                    src={us}
                    alt=""
                    style={{ height: "2rem", width: "2rem" }}
                  />
                  <span className="ms-2">English(US)</span>
                </p>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <p onClick={changeLang("ch")} className="me-2">
                  <img
                    src={china}
                    alt=""
                    style={{ height: "2rem", width: "2rem" }}
                  />
                  <span className="ms-2">中国人</span>
                </p>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                <p onClick={changeLang("bd")} className="me-2">
                  <img
                    src={bd}
                    alt=""
                    style={{ height: "1.4rem", width: "2.2rem" }}
                  />
                  <span className="ms-2">বাংলা</span>
                </p>
              </NavDropdown.Item>
            </NavDropdown>

            <div className="mt-2 m-4">
              <Toggle></Toggle>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navagation;
