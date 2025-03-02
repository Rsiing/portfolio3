

import './App.css'
import Hero from './Hero'
import Navbar from './Navbar'

function App() {


  return (
    <div className='bg-radial from-blue-100 via-blue-200 to-blue-300 w-full h-screen items-center flex justify-center'>
     <div className='w-[80%] h-[800px] px-8 py-4 bg-gray-700 rounded-2xl'>
      <Navbar/>
      <Hero/>
     </div>
    </div>
  )
}

export default App
