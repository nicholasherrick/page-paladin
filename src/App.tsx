import './App.css'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Navbar from './components/Navbar'

function App() {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
    <div className="App">
      <div className="container mx-auto px-4">
        <Navbar />
        <h1>Welcome to Page Paladin!</h1>
      </div>
    </div>
  )
}

export default App
