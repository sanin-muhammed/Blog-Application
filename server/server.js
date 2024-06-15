const express = require("express");
const connectDB = require("./config/database");
const colors = require("colors");
const cors = require("cors")
const authRouter = require("./routes/authRoute");
const blogRouter = require("./routes/blogRoute");
const PORT = 2001;
const app = express()
connectDB()
app.use(express.json())
app.use(express.urlencoded());
app.use(cors())
app.use('/api',authRouter)
app.use('/api',blogRouter)

app.listen(PORT,()=> console.log(`server running on port ${PORT}`))