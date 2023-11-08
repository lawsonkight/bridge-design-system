import Tab from './tab'
import Filter from './filter'
import PortfolioSection from './portfolio-section'

const items = [
  { label: 'item 1', key: 'item-1' },
  { label: 'item 2', key: 'item-2' },
]

export default function Wallet() {
  return <div>
    <header className="flex p-1 gap-1">
      <Tab label="Portfolio" selected={true} />
      <Tab label="Activity"/>
      <Filter />
    </header>
    <PortfolioSection />
  </div>
} 