import Tab from './tab'
import Button from './button-sm'
import ChainSelect from './chain-select'
import TokenSelect from './token-select'
import Input from './input'

export default function Bridge() {

  return <div className="basis-1 grow flex flex-col gap-4">

      <header className="p-1">
        <Tab label="Bridge" selected />
      </header>

      <div className="bg-gray-900 p-3 flex flex-col gap-3 rounded-lg">

        <div className="bg-gray-800 p-3 rounded-md flex flex-col gap-2">

          <section className="grid grid-cols-[1fr_auto] items-center">
            <ChainSelect label="From" />
            <Button label="Connect Wallet" />
          </section>

          <section className="border border-gray-600 p-2 rounded-lg flex">
            <TokenSelect label="Out" />
            {/* <Button label="Approve" /> */}
          </section>

        </div>

        <div className="bg-gray-800 p-3 rounded-md flex flex-col gap-2">

          <section className="grid grid-cols-[1fr_auto] items-center">
            <ChainSelect label="To" />
            <Input placeholder="&lsquo;To&rsquo; address" />
          </section>

          <section className="border border-gray-600 p-2 rounded-lg">
            <TokenSelect label="In" />
          </section>

        </div>

       <Button label="Bridge" size="md" cta />

      </div>

  </div>

}