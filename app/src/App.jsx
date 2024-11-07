import Navigation from './components/Navigation';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Divider from './components/Divider';
import Disclaimer from './components/Disclaimer';
import Banner from './components/Banner';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Disclaimer></Disclaimer>
      <Banner></Banner>
      <Projects></Projects>
      <Divider></Divider>
      <AboutMe></AboutMe>
      <Footer></Footer>
    </>
  )
}

export default App
