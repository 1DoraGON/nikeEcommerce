
import {Hero} from './components/index'
import { heroapi } from './data/data.js'
function App() {

  return (
    <>
    <main>
      <Hero heroapi= {heroapi} />
    </main>
    </>
  )
}

export default App
