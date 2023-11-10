import Button from './button-sm'

type Props = {
  label?: string
  selected?: boolean
}

export default function Activity({ label, selected }: Props) {

  if (!label) {
    label = 'Activity'
    selected = true
  }

  return <>

    <section className="flex">
      <div>
        <div>3 USDC</div>
        <div>Polygon</div>
      </div>
      <div className="w-full whitespace-nowrap">
        <div>BNB Chain</div>
      </div>
      <div>
        <div>Waiting…</div>
      </div>
    </section>

    <section className="border border-gray-800 rounded p-3 overflow-visible whitespace-nowrap">
      Complete
    </section>
    
  </>
    
}