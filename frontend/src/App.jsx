import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('api/jokes')  //we are using proxy , which are defined in vite.config.js file
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log("Error: ",error)
    })
  })

  return (
    <>
      <h1>Hello, Welcome to our web page</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
