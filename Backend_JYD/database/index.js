const mongoose = require("mongoose");


//#region -->() Determination de ConnectionString
/*
const protocol = "mongodb+srv://";
const url = "gp-projet-s0nrj.azure.mongodb.net";
const port = 27017;
const params: "?retryWrites=true&w=majority";
const username = "gestion-projet";
const password = "gestion-projet";
const database = "gestion-projet";

const connectionString = `${protocol}${username}:${password}@${url}:${port}/${database}`;
*/
const connectionString = "mongodb+srv://gestion-projet:gestion-projet@gp-projet-s0nrj.azure.mongodb.net/gestion-projet?retryWrites=true&w=majority"

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};
//#endregion


mongoose
  .connect(connectionString, options)
  
  .then((db) => {
    console.log("Connecté avec succèss");
  })
  
  .catch((err) => {
    console.log(err);
  });
