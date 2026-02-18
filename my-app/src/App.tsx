import 'react'
import './App.css'
import HomePage from './pages/home/home'

function App() {

  return (
    <div className="py-5 flex flex-col min-h-screen items-center gap-6
             bg-blue-100 font-mono selection:bg-black selection:text-white
             w-screen">
      <HomePage/>
    </div>
  )
}

export default App
