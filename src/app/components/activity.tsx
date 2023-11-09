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

    <section className="border border-gray-800 rounded p-3">
      Pending
    </section>

    <section className="border border-gray-800 rounded p-3">
      Complete
    </section>
    
  </>
    
}