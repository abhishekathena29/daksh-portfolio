import { useState, useEffect } from 'react';
import { PageTab } from './types/portfolio';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/TopNavbar';
import LightOverviewView from './views/LightOverviewView';
import LightEducationView from './views/LightEducationView';
import LightResearchView from './views/LightResearchView';
import LightProjectsView from './views/LightProjectsView';
import LightExperienceView from './views/LightExperienceView';
import LightAwardsView from './views/LightAwardsView';
import LightActivitiesView from './views/LightActivitiesView';
import LightContactView from './views/LightContactView';
import LightboxModal from './components/LightboxModal';
import { GalleryAsset } from './data/galleryAssets';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLightboxAsset, setActiveLightboxAsset] = useState<GalleryAsset | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageTab;
      const validTabs: PageTab[] = [
        'overview', 
        'education', 
        'research', 
        'projects', 
        'experience', 
        'awards', 
        'activities', 
        'contact'
      ];
      if (validTabs.includes(hash)) {
        setCurrentTab(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: PageTab) => {
    setCurrentTab(tab);
    window.location.hash = tab === 'overview' ? '' : tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAssetModal = (asset: GalleryAsset) => {
    setActiveLightboxAsset(asset);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex font-sans terminal-grid">
      {/* 1. Left Sidebar Navigation (Matching reference image) */}
      <Sidebar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        mobileMenuOpen={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Backdrop overlay */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-30 lg:hidden"
        />
      )}

      {/* 2. Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Sticky Top Navbar */}
        <TopNavbar
          currentTab={currentTab}
          onNavigate={handleNavigate}
          mobileMenuOpen={mobileMenuOpen}
          onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
        />

        {/* Viewport Content Area */}
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">
          {currentTab === 'overview' && (
            <LightOverviewView
              onNavigate={handleNavigate}
              onOpenAssetModal={handleOpenAssetModal}
            />
          )}

          {currentTab === 'education' && (
            <LightEducationView
              onNavigate={handleNavigate}
              onOpenAssetModal={handleOpenAssetModal}
            />
          )}

          {currentTab === 'research' && (
            <LightResearchView
              onNavigate={handleNavigate}
              onOpenAssetModal={handleOpenAssetModal}
            />
          )}

          {currentTab === 'projects' && (
            <LightProjectsView
              onNavigate={handleNavigate}
              onOpenAssetModal={handleOpenAssetModal}
            />
          )}

          {currentTab === 'experience' && (
            <LightExperienceView
              onNavigate={handleNavigate}
              onOpenAssetModal={handleOpenAssetModal}
            />
          )}

          {currentTab === 'awards' && (
            <LightAwardsView
              onNavigate={handleNavigate}
              onOpenAssetModal={handleOpenAssetModal}
            />
          )}

          {currentTab === 'activities' && (
            <LightActivitiesView
              onNavigate={handleNavigate}
              onOpenAssetModal={handleOpenAssetModal}
            />
          )}

          {currentTab === 'contact' && (
            <LightContactView
              onNavigate={handleNavigate}
            />
          )}
        </main>
      </div>

      {/* 3. Global Lightbox Modal for Picture & Document Inspection */}
      <LightboxModal
        asset={activeLightboxAsset}
        onClose={() => setActiveLightboxAsset(null)}
      />
    </div>
  );
}
