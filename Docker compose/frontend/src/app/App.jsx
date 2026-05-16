import React, { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import axios from "axios"

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=> {
    axios.get("/api/users")
    .then((response)=> {
      setUsers(response.data)
    })
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {users.map((user)=> (
        <p>{user.name}</p>
      ))}
    </div>
  )
}

export default App
