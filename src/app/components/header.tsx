'use client'

import { useState } from 'react'
// import NavButton from './nav-button'
import Button from './button-sm'
import NavOverflow from './nav-overflow'

type Props = {
  links: { label: string, url: string, selected?: boolean }[]
}

function HeaderSection({ links }: Props) {

  // const [menu, setMenu] = useState(0)
  // alert(menu)

  // const handleClick = () => {
  //   setMenu(menu + 1)
  //   alert(menu)
  //   // alert(`Menu: ${menu ? 'Open' : 'Closed'}`)
  // }

  const sectionStyle = `
    bg-gray-900 row-start-2 col-start-1 place-self-stretch rounded
    flex gap-1 content-center
    lg:bg-inherit lg:row-start-1 lg:place-self-center
  `

  const linkStyle = 'py-2 text-sm text-gray-200 text-center rounded h-min grow lg:px-4'

  const selectedStyle = 'border border-fuchsia-500'
  const unselectedStyle = 'hover:bg-gray-800 lg:hover:bg-gray-900 hover:rounded-md'

  return <section className={sectionStyle}>

    {links.map((link, i) => {

      switch (i) {
        case 0: var hide = 'hidden sm:inline-block'; break
        case 1: case 2: case 3: var hide = 'inline-block'; break
        case 4: var hide = 'hidden sm:inline-block'; break
        case 5: var hide = 'hidden md:inline-block'; break
        case 6: var hide = 'hidden lg:inline-block'; break
        default: var hide = 'hidden'
      }

      const styles = `${linkStyle} ${link.selected ? selectedStyle : unselectedStyle} ${hide}`

      return <a key={i} href={link.url} className={styles} >
        {link.label}
      </a>

    })}

    <NavOverflow links={links} />
    {/* <a className={linkStyle} onClick={handleClick}>More…</a> */}
    
  </section>

}

export default function Header() {

  return <header className="grid p-3 md:p-4 gap-3 w-full max-w-5xl">

      <img
        src='synapse-logo.svg'
        className="row-start-1 col-start-1 align-self-center" 
      />

    <HeaderSection links={[
        { label: 'About', url: '#', },
        { label: 'Bridge', url: '#', selected: true, },
        { label: 'Swap', url: '#', },
        { label: 'Pools', url: '#', },
        { label: 'Stake', url: '#', },
        { label: 'Explorer', url: '#', },
        // { label: 'Interchain Network', url: '#', },
    ]}/>

    {/* <div className="
      bg-gray-900 lg:bg-inherit
      row-start-2 col-start-1 lg:row-start-1
      place-self-stretch lg:place-self-center
      flex justify-stretch gap-1 rounded
    ">
      
      <NavButton label="About" url="#" />
      <NavButton label="Bridge" url="#" selected />
      <NavButton label="Swap" url="#" />
      <NavButton label="Pools" url="#" />
      <NavButton label="Stake" url="#" />
      <NavButton label="Explorer" url="#" />
      <NavButton label="Interchain Network" url="#" />
    </div> */}

    <div className="row-start-1 col-start-1 align-self-center justify-self-end">
      <Button label='Connect Wallet' cta />
    </div>
    
  </header>

}