import { useCallback, useEffect, useState } from 'react'
import { Sidebar, NAV, type SectionKey } from './components/Sidebar'
import { TopBar } from './components/TopBar'
import { Ticker } from './components/Ticker'
import { Landing } from './components/Landing'
import { Overview } from './sections/Overview'
import { Education } from './sections/Education'
import { Research } from './sections/Research'
import { Projects } from './sections/Projects'
import { Experience } from './sections/Experience'
import { Awards } from './sections/Awards'
import { Activities } from './sections/Activities'
import { Contact } from './sections/Contact'
import './App.css'

const VALID_SECTIONS: SectionKey[] = [
  'overview',
  'education',
  'research',
  'projects',
  'experience',
  'awards',
  'activities',
  'contact',
]

function readHash(): SectionKey {
  const key = window.location.hash.replace('#', '') as SectionKey
  return VALID_SECTIONS.includes(key) ? key : 'overview'
}

function App() {
  const [active, setActive] = useState<SectionKey>(readHash())
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onHashChange = () => setActive(readHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = useCallback((key: SectionKey) => {
    window.location.hash = key
    setActive(key)
    setMenuOpen(false)
    document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const activeNav = NAV.find((n) => n.key === active) ?? NAV[0]

  return (
    <>
      <Landing onExplore={() => navigate(active)} />
      <div className="app-shell" id="dashboard">
        <Sidebar active={active} onNavigate={navigate} open={menuOpen} onClose={() => setMenuOpen(false)} />
        <div className="app-main">
          <TopBar activeLabel={activeNav.label} ActiveIcon={activeNav.icon} onMenu={() => setMenuOpen(true)} />
          <Ticker onNavigate={navigate} />
          <main className="app-content">
            <div className="page-transition" key={active}>
              {active === 'overview' && <Overview onNavigate={navigate} />}
              {active === 'education' && <Education />}
              {active === 'research' && <Research />}
              {active === 'projects' && <Projects />}
              {active === 'experience' && <Experience />}
              {active === 'awards' && <Awards />}
              {active === 'activities' && <Activities />}
              {active === 'contact' && <Contact />}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
