//require uses the package that we installed named express
const express = require("express");
//Now we have a variable named app that has access to everything that express offers
const app = express();
//This is just a variable for the port number that we want to use 5000-6000 is normal for backend development
const PORT = 5000;
//Note:
//__dirname is the absolute path from the root of your computer to the current file.
//<===================All the routes here ===========================>
// get route for Ragnars page
app.get("/ragnar", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/views/homepage.html");
});
//get route for Doreens page
app.get("/doreen", (req, res) => {
  res.sendFile(__dirname + "/views/doreen.html");
});

//First thing is to listen to a port and start the server
app.listen(PORT, () => {
  //this console.log just shows us that we are connected and listening ;)
  console.log("Connected to the port, of ", PORT);
});
