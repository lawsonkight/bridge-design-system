type Props = {
  label: string
  cta?: boolean
}

export default function CTAButton({ label, cta }: Props) {

  let styles = 'py-2 px-4 inline-block border rounded text-sm hover:rounded-md text-center w-fit'
  
  styles += cta
    ? ' border-fuchsia-500 hover:bg-fuchsia-950'
    : ' border-gray-700 hover:border-gray-500'

  return <a className={styles}>
    {label}
  </a>
  
}