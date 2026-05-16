import express from "express"
import morgan from "morgan"

const app = express()
app.use(morgan("dev"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res)=> {
    res.status(200).json({
        status: "OK"
    })
})

app.get("/api/users", (req, res)=> {
    const users = [
        {
            id: 1,
            name: "John"
        },
        {
            id: 2,
            name: "Smith"
        },
        {
            id: 3,
            name: "Kane"
        },
        {
            id: 4,
            name: "Dutch"
        },
    ]

    res.status(200).json(users)
})


app.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})