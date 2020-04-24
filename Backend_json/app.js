//#region //(ok) Module express
const express = require("express");
const app = express();
//#endregion

//#region //(ok) Module body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//#endregion

//#region //(ok) Module Route
const routes = require("./routes");
app.use("/", routes);
//#endregion

//#region //(ok) Module Path
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
//#endregion

app.set("view engine", "pug");
app.listen(3000);
