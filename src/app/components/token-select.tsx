type Props = {
  label: 'Out' | 'In'
  token?: string
  cta?: boolean
}

export default function ChainSelect({ label, token, cta }: Props) {

  let styles = `flex w-min px-3 py-2 ${token ? 'text-lg' : 'text-xl'} bg-gray-700 rounded hover:rounded-md gap-3 items-center cursor-pointer
    border ${cta
    ? 'border-fuchsia-500'
    : 'border-transparent hover:border hover:border-gray-400'
  }`

  return <div className={styles}>
    {token || label}<span className="text-xs text-gray-300">▼</span>
  </div>

}