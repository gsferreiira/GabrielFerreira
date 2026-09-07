import { Routes, Route } from 'react-router-dom'
import { LightboxProvider } from './components/LightboxContext.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import AgenvixCaseStudy from './pages/AgenvixCaseStudy.jsx'
import PatrimonioCaseStudy from './pages/PatrimonioCaseStudy.jsx'
import BebedouroCaseStudy from './pages/BebedouroCaseStudy.jsx'
import PonteCaseStudy from './pages/PonteCaseStudy.jsx'

function App() {
  return (
    <LightboxProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos/agenvix" element={<AgenvixCaseStudy />} />
        <Route path="/projetos/patrimonio" element={<PatrimonioCaseStudy />} />
        <Route path="/projetos/bebedouro" element={<BebedouroCaseStudy />} />
        <Route path="/projetos/ponte" element={<PonteCaseStudy />} />
      </Routes>
    </LightboxProvider>
  )
}

export default App