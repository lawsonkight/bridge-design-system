type Props = {
  label: string
  selected?: string
}

export default function Tab({ label, selected }: Props) {

  let styles = 'px-2 py-3'
  if (selected) styles += ' border-b'

  return <div className={styles}>
    {label}
  </div>
  
}