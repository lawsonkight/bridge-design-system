import Tab from './tab'
import CTAButton from './button-cta'

export default function Bridge() {

  return <div>

      <header className="p-1">
        <Tab label="Bridge" selected />
      </header>

      <div className="bg-gray-900 p-3 flex flex-col gap-3 rounded-lg">

        <div className="bg-gray-800 p-3 rounded flex flex-col gap-1">
          <section>
            From
          </section>
          <section className="border border-gray-600 p-2 rounded-lg">
            <select className='bg-gray-700 p-3 rounded hover:outline hover:outline-gray-500 hover:rounded-md'>
              <option>
                In
              </option>
            </select>
          </section>
        </div>

        <div className="bg-gray-800 p-3 rounded flex flex-col gap-1">
          <section>
            To
          </section>
          <section className="border border-gray-600 p-2 rounded-lg">
            <select className='bg-gray-700 p-3 rounded hover:outline hover:outline-gray-500 hover:rounded-md'>
              <option>Out</option>
            </select>
          </section>
        </div>

       <CTAButton label="Bridge" />

      </div>

  </div>

}