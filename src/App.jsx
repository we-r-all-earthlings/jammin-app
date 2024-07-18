import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src="./src/images/jukebox-1.jpg" className="logo" alt="jammin logo" />
        </a>
      </div>
      <h1>The Jammin Playlist App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Select your songs and create a playlist.
        </p>
      </div>
      <p>Hello World</p>
    </>
  )
}

export default App
