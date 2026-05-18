import express from "express"
import morgan from "morgan"

const app = express()
app.use(morgan("dev"))
app.use(express.json())

app.get("/", (req, res)=> {
    res.status(200).json({
        status: "OK"
    })
})

app.get("/api/users", (req, res)=> {
    const users = [
        {
            id: 1,
            name: "Alice"
        },
        {
            id: 2,
            name: "Bob"
        },
        {
            id: 3,
            name: "Marsh"
        },
    ]
    res.status(200).json(users)
})

app.listen(3000, ()=> {
    console.log("server is running on port 3000")
})