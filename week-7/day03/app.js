const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
//jjjj
//We need to set the views & set the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

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
    const firstTwenty = parsedCharacters.map((char) => char.name).slice(0, 20);

    //this is how you send data to a page, the second argument of the res.render( )
    res.render("characters.hbs", {
      arrayOfChars: firstTwenty,
      arrayOfSpells: parsedSpells,
    });
  } catch (err) {
    console.log(err);
  }
});
app.get("/single-character", (req, res) => {
  res.render("single-character.hbs");
});

app.listen(5000, () => {
  console.log("We are rolling! On 5000");
});
