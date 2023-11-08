import NavButton from './nav-button'
import Button from './button-sm'

export default function Header() {

  return <header className="grid p-3 md:p-4 gap-3">

    <div className="row-start-1 col-start-1 align-self-center">
      <h1>Synapse</h1>
    </div>

    <div className="
      bg-gray-900 lg:bg-inherit
      row-start-2 col-start-1 lg:row-start-1
      place-self-stretch lg:place-self-center
      flex justify-stretch gap-1 rounded
    ">
      <NavButton label="About" url="#" />
      <NavButton label="Bridge" url="#" selected />
      <NavButton label="Swap" url="#" />
      <NavButton label="Pools" url="#" />
      <NavButton label="Stake" url="#" />
      <NavButton label="Explorer" url="#" />
      <NavButton label="Interchain Network" url="#" />
    </div>

    <div className="row-start-1 col-start-1 align-self-center justify-self-end">
      <Button label='Connect Wallet' cta />
    </div>
    
  </header>

}