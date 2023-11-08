type Props = {
  label: string
}

export default function CTAButton({ label }: Props) {

  return <a className='py-2 px-4 inline-block border border-fuchsia-500 rounded text-sm hover:bg-fuchsia-950 hover:rounded-md text-center'>
    {label}
  </a>
  
}