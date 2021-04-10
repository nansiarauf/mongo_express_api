const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDb = require("./config/dbConnect");
const clientRoutes = require("./routes/clientRoutes");

dotenv.config();

const app = express();

//DB CONNECTION
connectDb();

//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());

//ROUTES
app.use("/api/client/info", clientRoutes);

app.get("/", (req, res) => {
  res.send(
    "<h1>MONGO AND EXPRESS IN ACTION</h1>"
  );
});

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server started on:${port}`);
});
