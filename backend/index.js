const express = require('express');
const connectDB = require('./config/dbConnection');
const dotenv = require("dotenv").config();
const cors = require("cors")

connectDB();
 
const app = express();

const port = 5000 || process.env.PORT;

app.use(cors()) 
app.use(express.json()) 
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/search" , require("./routes/searchRoutes"))
app.use("/api" , require("./routes/contactusRoutes"))
app.use(express.urlencoded({extended:false}))

app.listen(port, () => console.log("App is running perfectly"))
