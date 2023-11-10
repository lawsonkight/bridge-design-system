'use client'

import { useRef } from 'react'
import { useState } from 'react'

type Props = {
  links: { label: string, url: string, selected?: boolean }[]
}

function Menu() {
  return <div>Hi</div>
}

export default function NavOverflow({ links }: Props) {

  const ref = useRef<HTMLDivElement>(null);

  const [menu, setMenu] = useState(false)

  function handleClick() {
    setMenu(!menu)
  }

  let styles = 'py-2 px-4 text-sm text-gray-200 text-center grow rounded relative hover:bg-gray-700'

  return <>{menu
    ?
    <div ref={ref} className={styles} onClick={handleClick}>

      More…

      <div className="absolute p-2 bg-gray-800 w-full mt-1 top-full rounded left-0">
        Hello
      </div>

    </div>
    
    :
    <div ref={ref} className={styles} onClick={handleClick}>
      More…
    </div>
  }
  </>
  
  
}