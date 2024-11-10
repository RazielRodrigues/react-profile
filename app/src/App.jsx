import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Resume from './components/Resume';
import Home from './components/Home';
import ProjectsExampleTable from './components/ProjectsExampleTable';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation></Navigation>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/project' element={<ProjectsExampleTable />} />
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
