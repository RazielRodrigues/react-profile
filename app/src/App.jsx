import Navigation from './components/Navigation';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Divider from './components/Divider';
import Disclaimer from './components/Disclaimer';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Testimonial from './components/Testimonial';
import ProjectsExample from './components/ProjectsExample';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Disclaimer></Disclaimer>
      <Banner></Banner>
      <Divider></Divider>
      <Skills></Skills>
      <Divider></Divider>
      <Divider></Divider>
      <AboutMe></AboutMe>
      <Divider></Divider>
      <Projects></Projects>
      <Divider></Divider>
      <ProjectsExample></ProjectsExample>
      <Divider></Divider>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  )
}

export default App
