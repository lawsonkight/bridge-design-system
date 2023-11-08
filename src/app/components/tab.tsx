type Props = {
  label: string
  selected?: boolean
}

export default function Tab({ label, selected }: Props) {

  let styles = 'px-2 py-3 inline-block'
  if (selected) styles += ' border-b border-fuchsia-500'

  return <div className={styles}>
    {label}
  </div>
  
}