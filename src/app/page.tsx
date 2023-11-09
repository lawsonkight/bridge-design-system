import Image from 'next/image'
import Header from './components/header'
import Wallet from './components/wallet-view'
import Bridge from './components/bridge'
import Footer from './components/footer'

export default function Home() {
  return <>

    <Header />

    <main className="
      m-2 gap-8 max-w-md flex flex-col
      md:flex md:flex-row-reverse md:max-w-5xl
    ">

      <Bridge />
      <Wallet />

    </main>
    
    <Footer />
  </>
}
