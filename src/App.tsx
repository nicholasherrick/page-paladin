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
        <article className="prose px-2 py-6">
          <h1>Welcome to Page Paladin!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            alias neque, cum hic nulla qui voluptatem officia molestiae
            obcaecati ullam? Illo nesciunt inventore consequuntur eum itaque
            cupiditate omnis quidem ipsum molestias distinctio libero explicabo,
            odit quas perspiciatis blanditiis, magnam ut aut impedit, iure modi
            quos. Doloremque necessitatibus cupiditate quasi. Laborum.
          </p>
        </article>
      </div>
    </div>
  )
}

export default App
