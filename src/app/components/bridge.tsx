import Tab from './tab'
import Button from './button-sm'
import ChainSelect from './select-chain'
import Input from './input'

export default function Bridge() {

  return <div>

      <header className="p-1">
        <Tab label="Bridge" selected />
      </header>

      <div className="bg-gray-900 p-3 flex flex-col gap-3 rounded-lg">

        <div className="bg-gray-800 p-3 rounded flex flex-col gap-2">

          <section className="grid grid-cols-[1fr_auto] items-center">
            <ChainSelect label="From" />
            <Button label="Connect Wallet" />
          </section>

          <section className="border border-gray-600 p-2 rounded-lg">
            <select className='bg-gray-700 p-3 rounded hover:outline hover:outline-gray-500 hover:rounded-md'>
              <option>
                In
              </option>
            </select>
          </section>

        </div>

        <div className="bg-gray-800 p-3 rounded flex flex-col gap-2">

          <section className="grid grid-cols-[1fr_auto] items-center">
            <ChainSelect label="To" />
            <Input placeholder="To address" />
          </section>

          <section className="border border-gray-600 p-2 rounded-lg">
            <select className='bg-gray-700 p-3 rounded hover:outline hover:outline-gray-500 hover:rounded-md'>
              <option>Out</option>
            </select>
          </section>

        </div>

       <Button label="Bridge" cta />

      </div>

  </div>

}