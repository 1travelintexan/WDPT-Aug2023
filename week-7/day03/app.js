const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

//We need to set the views & set the view engine
//path.join will 'join' what you give it, but change it for each different Operating System
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
//set all the static assets to the public folder, now Express will always looks there for them.
app.use(express.static(path.join(__dirname, "public")));

//this tells the server that you are using partials, or templates for pages
hbs.registerPartials(__dirname + "/views/partials");
//routes
app.get("/", async (req, res) => {
  try {
    //ask api for characters
    const characters = await fetch(
      "https://hp-api.onrender.com/api/characters"
    );
    const parsedCharacters = await characters.json();
    //ask api for list of spells
    const spells = await fetch("https://hp-api.onrender.com/api/spells");
    const parsedSpells = await spells.json();
    //make a variable that maps over all the characters and return a new array of just the names
    const firstTwenty = parsedCharacters
      .map((char) => {
        return {
          name: char.name,
          image: char.image,
        };
      })
      .slice(0, 20);
    //this is how you send data to a page, the second argument of the res.render( )
    res.render("characters.hbs", {
      schoolName: "Hogwarts",
      arrayOfChars: firstTwenty,
      arrayOfSpells: parsedSpells,
      test: "<script>alert('got cha')</script>",
    });
  } catch (err) {
    console.log(err);
  }
});
app.get("/single-character", (req, res) => {
  res.render("single-character.hbs");
});
//bonus examle of req.params
app.get("/pizza/:id", (req, res) => {
  console.log("params", req.params.id);
  res.render("pizza.hbs");
});

app.listen(5000, () => {
  console.log("We are rolling! On 5000");
});
