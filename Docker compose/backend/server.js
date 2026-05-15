import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res)=> {
    res.send("hello world")
})

app.get("/api/user", (req, res) => {
  const users = [
    {
      name: "John",
      age: 30,
    },
    { 
      name: "Doe",
      age: 25
    },
    { 
      name: "Smith",
      age: 40
    },
  ];
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
