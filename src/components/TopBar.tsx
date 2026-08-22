import { Menu } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export function TopBar({
  onMenu,
  activeLabel,
  ActiveIcon,
}: {
  onMenu: () => void
  activeLabel: string
  ActiveIcon: LucideIcon
}) {
  return (
    <div className="topbar">
      <button className="topbar__menu-btn" onClick={onMenu} aria-label="Open menu">
        <Menu size={20} />
      </button>

      <div className="topbar__title">
        <ActiveIcon size={17} strokeWidth={2} />
        <span>{activeLabel}</span>
      </div>
    </div>
  )
}
