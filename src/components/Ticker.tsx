import { TrendingUp } from 'lucide-react'
import { tickerStats } from '../data/resume'
import { AnimatedNumber } from './AnimatedNumber'
import type { SectionKey } from './Sidebar'

export function Ticker({ onNavigate }: { onNavigate: (key: SectionKey) => void }) {
  const items = [...tickerStats, ...tickerStats]
  return (
    <div className="ticker">
      <div className="ticker__track">
        {items.map((stat, i) => (
          <button className="ticker__item" key={`${stat.label}-${i}`} onClick={() => onNavigate(stat.section)}>
            <span className="ticker__label">{stat.label}</span>
            <span className="ticker__value">
              {'value' in stat ? (
                stat.value
              ) : (
                <AnimatedNumber target={stat.target} prefix={stat.prefix} suffix={stat.suffix} indian={stat.indian} duration={1400} />
              )}
            </span>
            <span className="ticker__change">
              <TrendingUp size={13} strokeWidth={2.5} />
              {stat.unit}
            </span>
            <span className="ticker__divider" />
          </button>
        ))}
      </div>
    </div>
  )
}
