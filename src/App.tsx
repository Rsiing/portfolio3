

import './App.css'
import Hero from './Hero'
import Navbar from './Navbar'

function App() {


  return (
    <div className='bg-radial cursor-default from-blue-100 to-blue-500 w-full h-screen items-center flex justify-center'>
     <div className='w-[80%] h-[800px] px-8 py-4 bg-black shadow-2xl rounded-2xl'>
      <Navbar/>
      <Hero/>
     </div>
    </div>
  )
}

export default App
