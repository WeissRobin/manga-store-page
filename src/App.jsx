import './index.css'

import Hero from './components/Hero'
import Navigation from './components/Navigation'
import TrendingManga from './components/TrendingManga'

function App() {
  return (
    <main className='min-h-screen'>
      <Navigation></Navigation>
      <Hero></Hero>
      <TrendingManga></TrendingManga>
    </main>
  )
}

export default App