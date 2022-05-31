const express = require('express')
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require('cors');
const port = 3000

dotenv.config();
app.use(express.json());
app.use(cors())
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
app.get('/', (req, res) => {
  res.send('Hello fdswfsdWorld!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})