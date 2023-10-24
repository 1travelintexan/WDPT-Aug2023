const CelebModel = require("../models/Celebrity.model");
const MovieModel = require("../models/Movie.model");
// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
router.get("/create", async (req, res) => {
  const allCelebs = await CelebModel.find();
  res.render("movies/new-movie.hbs", { allCelebs });
});
router.post("/create", async (req, res) => {
  console.log(req.body);
  const newMovie = await MovieModel.create(req.body);
  console.log("Here is the new Movie in the DB", newMovie);
  res.redirect("/movie/movies");
});

router.get("/movies", async (req, res) => {
  try {
    const allMovies = await MovieModel.find().populate("cast");
    res.render("movies/movies.hbs", { allMovies });
  } catch (err) {
    console.log(err);
  }
});

router.get("/:movieId", async (req, res) => {
  try {
    const { movieId } = req.params;
    const oneMovie = await MovieModel.findById(movieId).populate("cast");
    console.log(oneMovie);
    res.render("movies/movie-detail.hbs", { oneMovie });
  } catch (err) {
    console.log(err);
  }
});

router.post("/:movieId/delete", async (req, res) => {
  try {
    //example
    const pizzaId = req.params.movieId;
    const { movieId } = req.params;
    await MovieModel.findByIdAndDelete(movieId);
    res.redirect("/movie/movies");
  } catch (err) {
    console.log(err);
  }
});

router.get("/:movieId/edit", async (req, res) => {
  const oneMovie = await MovieModel.findById(req.params.movieId);
  const allCelebs = await CelebModel.find();
  const copyCelebs = JSON.parse(JSON.stringify(allCelebs));
  const selectedCast = copyCelebs.map((oneCeleb) => {
    if (oneMovie.cast.includes(oneCeleb._id)) {
      oneCeleb.selected = "selected";
    } else {
      oneCeleb.selected = "";
    }
    return oneCeleb;
  });
  console.log("selected cast", selectedCast);
  res.render("movies/edit-movie.hbs", { oneMovie, selectedCast });
});
router.post("/:movieId/edit", async (req, res) => {
  const { movieId } = req.params;
  const updatedMovie = await MovieModel.findByIdAndUpdate(movieId, req.body, {
    new: true,
  });
  console.log("here is the updated movie", updatedMovie);
  res.redirect("/movie/movies");
});
module.exports = router;
