type Props = {
  label: string
  cta?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export default function Button({ label, cta, size='sm' }: Props) {

  let styles = `px-4 inline-block border rounded hover:rounded-md text-center w-fit cursor-pointer center text-${size} ${size === 'sm' ? 'py-2' : 'py-3'} 
  border 
    ${cta 
      ? 'border-fuchsia-500 hover:bg-fuchsia-950' 
      : 'text-gray-300 hover:text-gray-50 hover:bg-gray-700 border-gray-600 hover:border-gray-300'
    }
  `

  return <a className={styles}>
    {label}
  </a>
  
}