type Props = {
  label: string
  cta?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export default function CTAButton({ label, cta, size='sm' }: Props) {

  let styles = `px-4 inline-block border rounded hover:rounded-md text-center w-fit cursor-pointer text-${size} ${size === 'sm' ? 'py-2' : 'py-3'} 
  border ${cta 
    ? 'border-fuchsia-500 hover:bg-fuchsia-950' 
    : 'border-gray-700 hover:border-gray-500'
  }`

  return <a className={styles}>
    {label}
  </a>
  
}