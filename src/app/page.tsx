import Image from 'next/image'
import Header from './components/header'
import Wallet from './components/wallet-view'
import Bridge from './components/bridge'
import Footer from './components/footer'

export default function Home() {
  return <>
    <Header />
    <main className="m-2 grid grid-cols-2 gap-4">
      <Wallet />
      <Bridge />
    </main>
    {/* <Footer /> */}
  </>
}
