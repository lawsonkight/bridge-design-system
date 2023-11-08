import Tab from './tab'
import Filter from './filter'
import PortfolioSection from './portfolio-section'

export default function Wallet() {
  return <div>
    <header className="flex p-1 gap-1 items-center">
      <div className="grow">
        <Tab label="Portfolio" selected={true} />
        <Tab label="Activity"/>
      </div>
      <Filter />
    </header>
    <PortfolioSection />
  </div>
} 