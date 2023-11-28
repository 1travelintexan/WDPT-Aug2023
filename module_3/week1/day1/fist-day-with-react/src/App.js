import "./App.css";
//import components like this
import { Navbar2 } from "./components/Navbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import spideyPic from "./spidey.jpg";

function App() {
  //before the return you can use straight js
  console.log("testing before the return");
  //this variable is available in the whole App.js file
  const userName = "Ian";
  return (
    <div className="App">
      {/* This is how we use a component in React with self closing tag*/}
      <Navbar />
      <Navbar2 />
      <h1>{userName}'s World</h1>
      <img
        src={spideyPic}
        alt="spidey"
        style={{ height: "100px", backgroundColor: "blue" }}
      />
      <Footer />
    </div>
  );
}

export default App;
