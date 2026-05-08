import axios from 'axios'
import './App.css'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState([])
  const response = axios.get("/api/user")
  .then(res=> {
    setUser(res.data)
  })

  return (
    <div>
      <h1>Users</h1>
      {user.map(user=> (
        <p>{user.name}, {user.age}</p>
      ))}
    </div>
  )
}

export default App
