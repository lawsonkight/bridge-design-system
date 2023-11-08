import Button from './button-sm'

type Props = {
  label?: string
  selected?: boolean
}

export default function PortfolioHeader({ label, selected }: Props) {

  if (!label) {
    label = 'Welcome to Synapse'
    selected = true
  }

  return <section className="border border-gray-800 rounded">

    <header className="p-3 bg-gray-900">
      {label}
    </header>

    <div className="m-3">

      <p className="my-3">Synapse is the most widely used, extensible, and secure cross-chain communications network.</p>
      <p className="my-3">Get route quotes in the Bridge panel, and connect your wallet when you are ready to submit a transaction.</p>

     <Button label='Connect Wallet' cta />

    </div>

  </section>
    
}