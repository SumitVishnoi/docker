import express, { urlencoded } from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
});

app.get("/api/data", (req, res) => {
  const data = [
    {
      name: "Mohan",
      age: 34
    },
  ];

  res.status(200).json(data)
});

app.get("/api/users", (req, res)=> {
    const user = [
        {
            name: "Jack"
        },
        {
            name: "Morris"
        },
        {
            name: "Smith"
        },
        {
            name: "Trank"
        },
    ]
    res.status(200).json(user)
})

export default app;
