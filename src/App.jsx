import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const clientId = "824bc22a4f414f5ab4a7270228005dbe";
  const redirectUri = "http://localhost:5173/jammin-app/";
  const authEndpointUri = "https://accounts.spotify.com/authorize";
  const responseType = "token";

  const [token, setToken] = useState('initialToken');  

  // const logout = () = {

  // }

  return (
    <>
      <div className="card">      
        <img src="./src/images/jukebox-1.png" className="logo" alt="jammin logo" />
        <h1>The Jammin Playlist App</h1>
        <p>
          Login to Spotify.
        </p>
        <button href={`${authEndpointUri}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`}>Spotify Login</button>
      </div>
      <hr></hr>
      <div className="card">      
        <p>
          Search for songs and create a playlist.
        </p>
        <form>
          <input label="Search the Spotify archive" ></input>
          <button type="submit">Search</button>
        </form>
      </div>
      <hr></hr>
      <div className="card">
        <p>
          Select your songs and create a playlist.
        </p>        
        <button onClick={"#"}>
          Save to Spotify
        </button>
      </div>
      <hr></hr>
      <div className="card">
        <p>Logout of Spotify</p>
        <button onClick={"logout"}>
          Logout
        </button>
      </div>

    </>
  )
}

export default App
