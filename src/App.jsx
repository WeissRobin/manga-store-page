import './index.css'

import Hero from './components/Hero'
import Navigation from './components/Navigation'
import NewManga from './components/NewManga'
import Shop from './components/Shop'
import Footer from './components/Footer'

function App() {
  return (
    <main className='min-h-screen'>
      <Navigation></Navigation>
      <Hero></Hero>
      <NewManga></NewManga>
      <Shop></Shop>
      <Footer></Footer>
    </main>
  )
}

export default App