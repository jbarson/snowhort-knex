const express = require("express")
const studentRoute = require("./routes/students")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/students", studentRoute)

app.listen(5555, ()=> console.log(`up on port 5555`));