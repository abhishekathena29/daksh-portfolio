export type PageTab =
  | 'home'
  | 'research'
  | 'projects'
  | 'education'
  | 'awards'
  | 'experience'
  | 'passions'
  | 'contact'

export const PAGE_TABS: PageTab[] = [
  'home',
  'research',
  'projects',
  'education',
  'awards',
  'experience',
  'passions',
  'contact',
]

// Hashes from earlier versions of the site keep working.
export const LEGACY_TABS: Record<string, PageTab> = {
  overview: 'home',
  activities: 'passions',
}

// A request to scroll to (and open) an item on the current page. A fresh object
// per request, so asking for the same anchor twice still scrolls.
export type Focus = { anchor: string } | null
