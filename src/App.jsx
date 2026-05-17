import Filter from './components/Filter'
import Hero from './components/Hero'
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <div className='bg-[#0b0e27] text-white'>
      <NavigationBar/>
      <Hero/>
      <Filter/>
    </div>
  )
}

export default App
