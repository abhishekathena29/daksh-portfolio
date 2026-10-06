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
