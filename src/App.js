import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import { ToastContainer } from 'react-toastify';
import Loadable from 'react-loadable';
import NotFound from './Components/Shared/NotFound/NotFound';
// import Login from './Components/Form/Login/Login';
// import Register from './Components/Form/Register/Register';
import Navagation from './Components/Home/Navagation/Navagation';
import Footer from './Components/Shared/Footer/Footer';
import ScrollToTop from "react-scroll-to-top";
// import Projects from './Components/Projects/Projects';

// import AddReview from './Components/Review/AddReview/AddReview';
// import AllProjects from './Components/AllProjects/AllProjects';
// import About from './Components/About/About';
// import Contact from './Components/Contact/Contact';
// import Blogs from './Components/Blogs/Blogs';

import ExploreMore from './Components/Other/ExploreMore/ExploreMore';
import MessengerCustomerChat from 'react-messenger-customer-chat'
import i18n from './i18n'
import { useContext } from 'react';
import { themeContext } from './Context';
import Loading from './Components/Shared/Loading/Loading';
// import BlogDetails from './Components/BlogDetails/BlogDetails';


// const Home = Loadable({
//   loader: () => import('./Components/Home/Home'),
//   loading: ()=><Loading></Loading>,
// });
const Projects = Loadable({
  loader: () => import('./Components/Projects/Projects'),
  loading: ()=><Loading></Loading>,
});
const AllProjects = Loadable({
  loader: () => import('./Components/AllProjects/AllProjects'),
  loading: ()=><Loading></Loading>,
});
const AddReview = Loadable({
  loader: () => import('./Components/Review/AddReview/AddReview'),
  loading: ()=><Loading></Loading>,
});
const Login = Loadable({
  loader: () => import(/* webpackChunkName: "Login"*/'./Components/Form/Login/Login'),
  loading: ()=><Loading></Loading>,
});
const Register = Loadable({
  loader: () => import('./Components/Form/Register/Register'),
  loading: ()=><Loading></Loading>,
});
const About = Loadable({
  loader: () => import('./Components/About/About'),
  loading: ()=><Loading></Loading>,
});
const Contact = Loadable({
  loader: () => import('./Components/Contact/Contact'),
  loading: ()=><Loading></Loading>,
});
const Blogs = Loadable({
  loader: () => import('./Components/Blogs/Blogs'),
  loading: ()=><Loading></Loading>,
});
const BlogDetails = Loadable({
  loader: () => import('./Components/Blogs/BlogDetails'),
  loading: ()=><Loading></Loading>,
});

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (

    <div className="App"  style={{
      background: darkMode ? "#0B1530" : "",
      color: darkMode ? "white" : "",
    }}>
     
      <Navagation></Navagation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/addReview' element={<AddReview></AddReview>}></Route>
        <Route path='/allProjects' element={<AllProjects></AllProjects>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/ExploreMore' element={<ExploreMore></ExploreMore>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}></Route>
        

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ScrollToTop smooth color="#6f00ff" />

      <MessengerCustomerChat
        pageId="104595619014250"
        appId="1007175946615558"
      />


      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
