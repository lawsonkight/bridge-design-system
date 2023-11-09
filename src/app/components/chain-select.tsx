type Props = {
  label: 'To' | 'From'
  chain?: string
  cta?: boolean
}

export default function ChainSelect({ label, chain = 'Network', cta }: Props) {

  let styles = `flex w-min px-2 py-1 rounded hover:rounded-md gap-3 items-center text-gray-300 border cursor-pointer
    ${cta
      ? 'border-fuchsia-500'
      : 'border-transparent hover:border hover:border-gray-400'
    }
  `

  return <div className={styles}>
    <dl>
      <dt className="text-xs text-gray-400">{label}</dt>
      <dd className="text-gray-100">{chain}</dd>
    </dl>
    <span className="text-xs">▼</span>
  </div>

}