import Loadable from "react-loadable";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./Components/Home/Home";
import Navagation from "./Components/Home/Navagation/Navagation";
import ExploreMore from "./Components/Other/ExploreMore/ExploreMore";
import Footer from "./Components/Shared/Footer/Footer";
import NotFound from "./Components/Shared/NotFound/NotFound";
// import i18n from './i18n'
import i18n from './i18n'
import { useContext } from "react";
import ProjectDetails from "./Components/Projects/ProjectDetails";
import Loading from "./Components/Shared/Loading/Loading";
import AiAutomation from "./Components/services/ai-automation/AiAutomation";
import AppDevelopment from "./Components/services/app-development/AppDevelopment";
import SoftwareDevelopment from "./Components/services/software-development/SoftwareDevelopment";
import WebDevelopment from "./Components/services/web-development/WebDevelopment";
import WorkflowAutomation from "./Components/services/workflow-automation/WorkflowAutomation";
import { themeContext } from "./Context";
import DevopsEng from "./Components/services/devops/devops";

const Projects = Loadable({
  loader: () => import("./Components/Projects/Projects"),
  loading: () => <Loading></Loading>,
});

const AddReview = Loadable({
  loader: () => import("./Components/Review/AddReview/AddReview"),
  loading: () => <Loading></Loading>,
});
const Login = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Login"*/ "./Components/Form/Login/Login"),
  loading: () => <Loading></Loading>,
});
const Register = Loadable({
  loader: () => import("./Components/Form/Register/Register"),
  loading: () => <Loading></Loading>,
});
const About = Loadable({
  loader: () => import("./Components/About/About"),
  loading: () => <Loading></Loading>,
});
const Contact = Loadable({
  loader: () => import("./Components/Contact/Contact"),
  loading: () => <Loading></Loading>,
});
const Blogs = Loadable({
  loader: () => import("./Components/Blogs/Blogs"),
  loading: () => <Loading></Loading>,
});
const BlogDetails = Loadable({
  loader: () => import("./Components/Blogs/BlogDetails"),
  loading: () => <Loading></Loading>,
});

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#0B1530" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navagation></Navagation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addReview" element={<AddReview></AddReview>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route
          path="/services/web-development"
          element={<WebDevelopment></WebDevelopment>}
        ></Route>
        <Route
          path="/services/app-development"
          element={<AppDevelopment></AppDevelopment>}
        ></Route>
        <Route
          path="/services/software-development"
          element={<SoftwareDevelopment></SoftwareDevelopment>}
        ></Route>
        <Route
          path="/services/ai-automation"
          element={<AiAutomation></AiAutomation>}
        ></Route>
        <Route
          path="/services/workflow-automation"
          element={<WorkflowAutomation></WorkflowAutomation>}
        ></Route>
        <Route
          path="/services/devops"
          element={<DevopsEng></DevopsEng>}
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/ExploreMore"
          element={<ExploreMore></ExploreMore>}
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/blog/:id" element={<BlogDetails></BlogDetails>}></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ScrollToTop smooth color="#6f00ff" />

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
