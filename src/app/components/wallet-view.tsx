'use client'

import { useState } from 'react'
import Tab from './tab'
import Input from './input'
import Portfolio from './portfolio'
import Activity from './activity'

export default function Wallet() {

  const [tab, setTab] = useState('Portfolio')

  function loadPortfolio() {
    setTab('Portfolio')
  }
  
  function loadActivity() {
    setTab('Activity')
  }

  const selected = 'selected'

  return <div className="basis-1 grow flex flex-col gap-4">

    <header className="grid grid-cols-[max-content_1fr] p-1 gap-10 items-center">

      <div className="flex gap-1">

        {tab === 'Portfolio'
          ? <Tab label="Portfolio" selected />
          : <Tab label="Portfolio" handleClick={loadPortfolio} />
        }

        {tab === 'Activity'
          ? <Tab label="Activity" selected />
          : <Tab label="Activity" handleClick={loadActivity} />
        }
        
      </div>

      <Input placeholder="Chains, tokens…" />

    </header>

    {tab === 'Portfolio' ? <Portfolio /> : <Activity />}

  </div>
  
} 