export default function Footer() {

  return <footer className="flex flex-col md:flex-row w-full p-3 text-sm text-gray-400 text-right">
    
    <div className="grow p-4">
      <img src='synapse-logo.svg' />
    </div>
    
    <div className="flex flex-row md:flex-row gap-10 p-4">

      <section className="flex flex-col gap-2">
        <header className="text-gray-300 my-1">Functions</header>
        <a href='#'>Swap</a>
        <a href='#'>Bridge</a>
        <a href='#'>Pools</a>
        <a href='#'>Stake</a>
      </section>

      <section className="flex flex-col gap-2">
        <header className="text-gray-300 py-1">Developers</header>
        <a href='#'>Build on Synapse</a>
        <a href='#'>Documentation</a>
        <a href='#'>Github</a>
        <a href='#'>Blog</a>
      </section>

      <section className="flex flex-col gap-2">
        <header className="text-gray-300 my-1">Support</header>
        <a href='#'>Discord</a>
        <a href='#'>Twitter</a>
        <a href='#'>Forum</a>
        <a href='#'>Telegram</a>
      </section>

    </div>

  </footer>

}