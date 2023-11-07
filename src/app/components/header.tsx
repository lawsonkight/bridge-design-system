import NavButton from './nav-button'

export default function Square() {
  return <header className="grid m-2">
    <div className="row-start-1">
      <h1>Synapse</h1>
    </div>
    <div className="row-start-2 md:row-start-1 flex">
      <NavButton label="About" url="#" />
      <NavButton label="Bridge" url="#" selected />
      <NavButton label="Swap" url="#" />
      <NavButton label="Pools" url="#" />
      <NavButton label="Stake" url="#" />
      <NavButton label="Explorer" url="#" />
    </div>
    <div className="row-start-1">
      <button>Connect Wallet</button>
    </div>
  </header>
}