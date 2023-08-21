require('dotenv').config();
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const db = require("./models");
const errorMiddleware = require('./middlewares/error-middleware');

const app = express();

var corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  methods: ["POST", "GET", "PUT"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


require("./routes/user.routes")(app);
require("./routes")(app);
app.use(errorMiddleware);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
const start = async () => {
  try{
    db.sequelize.sync();
    app.listen(PORT, () => { console.log(`Server started on PORT = ${PORT}`)
    });
  }
  catch(e) {
    console.log(e)
  }
}
start();


