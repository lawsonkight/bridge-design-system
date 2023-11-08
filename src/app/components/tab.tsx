type Props = {
  label: string
  selected?: boolean
}

export default function Tab({ label, selected }: Props) {

  let styles = `p-2 inline-block text-lg font-medium`
  if (selected) styles += ' border-b border-fuchsia-500'

  return <div className={styles}>
    {label}
  </div>
  
}