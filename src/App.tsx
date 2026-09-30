import { useCallback, useEffect, useState } from 'react'
import { PAGE_TABS, type PageTab } from './types'
import type { Evidence } from './data/evidence'
import { Sidebar } from './components/Sidebar'
import { TopNavbar } from './components/TopNavbar'
import { LightboxModal, type Inspection } from './components/LightboxModal'
import { OverviewView } from './views/OverviewView'
import { EducationView } from './views/EducationView'
import { ResearchView } from './views/ResearchView'
import { ProjectsView } from './views/ProjectsView'
import { ExperienceView } from './views/ExperienceView'
import { AwardsView } from './views/AwardsView'
import { ActivitiesView } from './views/ActivitiesView'
import { ContactView } from './views/ContactView'

function readHash(): PageTab {
  const key = window.location.hash.replace('#', '') as PageTab
  return PAGE_TABS.includes(key) ? key : 'overview'
}

function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>(readHash)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [inspecting, setInspecting] = useState<Inspection | null>(null)

  useEffect(() => {
    const onHashChange = () => setCurrentTab(readHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = useCallback((tab: PageTab) => {
    window.location.hash = tab
    setCurrentTab(tab)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const closeLightbox = useCallback(() => setInspecting(null), [])
  // Opening from a gallery passes the whole list so the viewer can browse it.
  const open = useCallback((item: Evidence, list: Evidence[] = [item]) => {
    const index = Math.max(0, list.findIndex((e) => e.id === item.id))
    setInspecting({ list, index })
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex terminal-grid">
      <Sidebar currentTab={currentTab} onNavigate={navigate} mobileMenuOpen={mobileMenuOpen} />

      {mobileMenuOpen && <div onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-30 lg:hidden" />}

      <div className="flex-1 flex flex-col min-w-0">
        <TopNavbar
          currentTab={currentTab}
          onNavigate={navigate}
          mobileMenuOpen={mobileMenuOpen}
          onToggleMobileMenu={() => setMobileMenuOpen((o) => !o)}
        />

        <main key={currentTab} className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto animate-fade-in">
          {currentTab === 'overview' && <OverviewView onNavigate={navigate} onOpen={open} />}
          {currentTab === 'education' && <EducationView onOpen={open} />}
          {currentTab === 'research' && <ResearchView onOpen={open} />}
          {currentTab === 'projects' && <ProjectsView onOpen={open} />}
          {currentTab === 'experience' && <ExperienceView onNavigate={navigate} onOpen={open} />}
          {currentTab === 'awards' && <AwardsView onOpen={open} />}
          {currentTab === 'activities' && <ActivitiesView onOpen={open} />}
          {currentTab === 'contact' && <ContactView />}
        </main>
      </div>

      <LightboxModal state={inspecting} onChange={setInspecting} onClose={closeLightbox} />
    </div>
  )
}

export default App
