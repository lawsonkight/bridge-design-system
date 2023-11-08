import { MouseEventHandler } from "react"

type Props = {
  label: string
  selected?: boolean
  handleClick?: MouseEventHandler
}

export default function Tab({ label, selected, handleClick }: Props) {

  let styles = `p-2 inline-block text-lg font-medium 
    ${selected
      ? 'border-b border-fuchsia-500'
      : 'text-gray-400 hover:text-gray-100 hover:border-b border-gray-500 cursor-pointer'
    }
  `

  return <div className={styles} onClick={handleClick}>
    {label}
  </div>
  
}