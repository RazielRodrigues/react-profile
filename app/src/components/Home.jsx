import Projects from './Projects';
import AboutMe from './AboutMe';
import Divider from './Divider';
import Disclaimer from './Disclaimer';
import Banner from './Banner';
import Skills from './Skills';
import Article from './Article';
import ProjectsExample from './ProjectsExample';

export default function Home() {
    return (
        <>
            <Disclaimer></Disclaimer>
            <Banner></Banner>
            <Skills></Skills>
            <Divider></Divider>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Divider></Divider>
            <ProjectsExample></ProjectsExample>
            <Article></Article>
        </>
    )
}