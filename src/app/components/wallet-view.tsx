import Tab from './tab'
import Input from './input'
import PortfolioSection from './portfolio-tab'

export default function Wallet() {

  return <div>

    <header className="flex p-1 gap-1 items-center">

      <div className="grow">
        <Tab label="Portfolio" selected={true} />
        <Tab label="Activity"/>
      </div>

      <Input placeholder="Chains, tokens…" />

    </header>

    <PortfolioSection />

  </div>
  
} 