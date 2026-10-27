import { useCallback, useEffect, useState } from 'react'
import { LEGACY_TABS, PAGE_TABS, type Focus, type PageTab } from './types'
import type { Evidence } from './data/evidence'
import { Sidebar } from './components/Sidebar'
import { TopNavbar } from './components/TopNavbar'
import { StockTicker } from './components/StockTicker'
import { Landing } from './components/Landing'
import { LightboxModal, type Inspection } from './components/LightboxModal'
import { HomeView } from './views/HomeView'
import { EducationView } from './views/EducationView'
import { CoursesView } from './views/CoursesView'
import { ResearchView } from './views/ResearchView'
import { ProjectsView } from './views/ProjectsView'
import { ExperienceView } from './views/ExperienceView'
import { AwardsView } from './views/AwardsView'
import { PassionsView } from './views/PassionsView'
import { ContactView } from './views/ContactView'

// "#projects/polaris" → tab plus an anchor within that page
function readHash(): { tab: PageTab; anchor?: string } {
  const [raw, anchor] = window.location.hash.replace('#', '').split('/')
  const key = (LEGACY_TABS[raw] ?? raw) as PageTab
  return PAGE_TABS.includes(key) ? { tab: key, anchor } : { tab: 'home' }
}

function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>(() => readHash().tab)
  const [focus, setFocus] = useState<Focus>(() => {
    const { anchor } = readHash()
    return anchor ? { anchor } : null
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [inspecting, setInspecting] = useState<Inspection | null>(null)

  useEffect(() => {
    const onHashChange = () => {
      const { tab, anchor } = readHash()
      setCurrentTab(tab)
      setFocus((prev) => (prev?.anchor === anchor ? prev : anchor ? { anchor } : null))
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = useCallback((tab: PageTab, anchor?: string) => {
    window.location.hash = anchor ? `${tab}/${anchor}` : tab
    setCurrentTab(tab)
    setFocus(anchor ? { anchor } : null)
    setMobileMenuOpen(false)
    if (!anchor) window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const closeLightbox = useCallback(() => setInspecting(null), [])
  // Opening from a gallery passes the whole list so the viewer can browse it.
  const open = useCallback((item: Evidence, list: Evidence[] = [item]) => {
    const index = Math.max(0, list.findIndex((e) => e.id === item.id))
    setInspecting({ list, index })
  }, [])

  return (
    <>
      {currentTab === 'home' && <Landing onNavigate={navigate} />}
      <div id="dashboard" className="min-h-screen bg-slate-50 text-slate-900 flex terminal-grid">
        <Sidebar currentTab={currentTab} activeAnchor={focus?.anchor} onNavigate={navigate} mobileMenuOpen={mobileMenuOpen} />

        {mobileMenuOpen && <div onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-black/50 backdrop-blur-xs z-30 lg:hidden" />}

        <div className="flex-1 flex flex-col min-w-0">
          <TopNavbar
            currentTab={currentTab}
            onNavigate={navigate}
            mobileMenuOpen={mobileMenuOpen}
            onToggleMobileMenu={() => setMobileMenuOpen((o) => !o)}
          />
          <StockTicker />

          <main key={currentTab} className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto animate-fade-in">
            {currentTab === 'home' && <HomeView onNavigate={navigate} />}
            {currentTab === 'research' && <ResearchView onOpen={open} />}
            {currentTab === 'projects' && <ProjectsView onOpen={open} focus={focus} />}
            {currentTab === 'education' && <EducationView onNavigate={navigate} />}
            {currentTab === 'courses' && <CoursesView onOpen={open} />}
            {currentTab === 'awards' && <AwardsView onOpen={open} />}
            {currentTab === 'experience' && <ExperienceView onOpen={open} />}
            {currentTab === 'passions' && <PassionsView onOpen={open} />}
            {currentTab === 'contact' && <ContactView />}
          </main>
        </div>

      </div>
      <LightboxModal state={inspecting} onChange={setInspecting} onClose={closeLightbox} />
    </>
  )
}

export default App
