type Props = {
  placeholder?: string
  value?: string
  cta?: boolean
}

export default function Input({ placeholder = '', value, cta}: Props) {

  let styles = 'border-gray-600 p-2 text-sm h-fit hover:bg-gray-900 rounded'

  return <input className={styles} placeholder={placeholder} />
    
}