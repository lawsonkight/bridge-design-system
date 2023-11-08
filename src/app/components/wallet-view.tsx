import Tab from './tab'
import Input from './input'
import PortfolioSection from './portfolio-tab'

export default function Wallet() {

  return <div className="basis-1 grow flex flex-col gap-4">

    <header className="grid grid-cols-[max-content_1fr] p-1 gap-10 items-center">

      <div>
        <Tab label="Portfolio" selected={true} />
        <Tab label="Activity"/>
      </div>

      <Input placeholder="Chains, tokens…" />

    </header>

    <PortfolioSection />

  </div>
  
} 