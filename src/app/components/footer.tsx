type Props = {
  header: string
  links: { label: string, url: string }[]
}

function FooterSection({ header, links }: Props) {

  const listItems = links.map(link => 
    <a key={link.label} href={link.url} className="text-gray-400 hover:text-gray-300">{link.label}</a>
  )

  return <section className="flex flex-col gap-2">
    <header className="text-gray-300 my-1">{header}</header>
    {listItems}
  </section>

}

export default function Footer() {

  return <footer className="flex flex-wrap w-full p-3 text-sm text-right">
    
    <div className="p-4">
      <img src='synapse-logo.svg' />
    </div>
    
    <div className="flex flex-wrap gap-10 p-4 grow justify-end">

      <FooterSection header='Functions' links={[
        { label: 'Swap', url: '#', },
        { label: 'Bridge', url: '#', },
        { label: 'Pools', url: '#', },
        { label: 'Stake', url: '#', },
      ]}/>
      
      <FooterSection header='Developers' links={[
        { label: 'Build on Synapse', url: '#', },
        { label: 'Documentation', url: '#', },
        { label: 'Github', url: '#', },
        { label: 'Blog', url: '#', },
      ]}/>

      <FooterSection header='Support' links={[
        { label: 'Discord', url: '#', },
        { label: 'Twitter', url: '#', },
        { label: 'Forum', url: '#', },
        { label: 'Telegram', url: '#', },
      ]}/>

    </div>

  </footer>

}