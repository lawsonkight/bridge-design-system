type Props = {
  label: string
  url: string
  selected?: boolean
}

export default function NavButton({ label, url, selected }: Props) {

  let styles = 'px-2 py-1 text-sm text-gray-200 hover:bg-gray-900'
  if (selected) styles += ' border'

  return <a href={url} className={styles}>
    {label}
  </a>
  
}