
import {FlexContent, Hero, Sales} from './components/index'
import { heroapi, highlight, popularsales, sneaker, toprateslaes } from './data/data.js'
function App() {
  return (
    <>
    <main className='flex flex-col gap-16 relative'>
      <Hero heroapi= {heroapi} />
      <Sales sales = {popularsales} ifExists />
      <FlexContent endpoint={highlight} isLeft />
      <Sales sales = {toprateslaes} />
      <FlexContent endpoint={sneaker} />
    </main>
    </>
  )
}

export default App
