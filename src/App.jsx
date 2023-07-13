
import {Hero, Sales} from './components/index'
import { heroapi, popularsales, toprateslaes } from './data/data.js'
function App() {
  return (
    <>
    <main className='flex flex-col gap-16 relative'>
      <Hero heroapi= {heroapi} />
      <Sales sales = {popularsales} />
      <Sales sales = {toprateslaes}/>
    </main>
    </>
  )
}

export default App
