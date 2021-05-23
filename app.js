import express from "express";
import bodyParser from "body-parser";
import newsRouter from "./routes/newsRoutes.js";
const app = express();

// for css
app.use(express.static("public"));
// for ejs files
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/", newsRouter);

// listening...
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server is listening on port 5000"));
