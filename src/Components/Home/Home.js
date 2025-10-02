import Feature from "./Features/index";
import Hero from "./Hero/Hero";
import MyFacts from "./MyFacts/MyFacts";
// import MyServices from './MyServices/MyServices';
import Skills from "./Skills/Skills";
import Workflow from "./Workflow/Workflow";
// import Testimonials from '../Testimonials/Testimonials';
// import ServiceIntro from './About/ServiceIntro';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Workflow></Workflow>
      {/* <SkillsProgress ></SkillsProgress> */}
      <Skills></Skills>
      <Feature></Feature>
      {/* <ServiceIntro></ServiceIntro> */}
      <MyFacts></MyFacts>
      {/* <MyServices ></MyServices> */}
      {/* <Testimonials></Testimonials> */}
      {/* <Projects></Projects> */}
    </div>
  );
};

export default Home;
