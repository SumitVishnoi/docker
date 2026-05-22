import axios from "axios"
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=> {
    axios.get("/api/users")
    .then(res=> {
      setUsers(res.data)
    })
  }, [])

  console.log(users)

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
