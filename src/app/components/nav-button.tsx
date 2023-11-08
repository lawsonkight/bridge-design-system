type Props = {
  label: string
  url: string
  selected?: boolean
}

export default function NavButton({ label, url, selected }: Props) {

  let styles = 'py-2 px-4 text-sm text-gray-200 text-center grow rounded'
  styles += selected 
    ? ' border border-fuchsia-500'
    : ' hover:bg-gray-800 lg:hover:bg-gray-900 hover:rounded-md'

  return selected
    ?
    <div className={styles}>
      {label}
    </div>
    :
    <a href={url} className={styles}>
      {label}
    </a>
  
}