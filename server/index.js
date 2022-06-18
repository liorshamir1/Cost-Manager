const express = require('express')
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require('cors');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const costRoute = require("./routes/cost");
const port = 5000

dotenv.config();
app.use(express.json());
app.use(cors())
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
    
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/costs", costRoute);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})