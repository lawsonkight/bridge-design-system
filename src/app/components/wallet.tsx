import Tab from './tab'

const items = [
  { label: 'item 1', key: 'item-1' },
  { label: 'item 2', key: 'item-2' },
]

export default function Square() {
  return <div>
    <header className="flex p-1 gap-1">
      <Tab label="Portfolio" selected={'border-b'} />
      <Tab label="Activity"/>
      <input type="text" />
    </header>
    <div>Ethereum</div>
    <button>Connect Wallet</button>
  </div>
} 