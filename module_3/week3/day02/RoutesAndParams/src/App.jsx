import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DetailsPage from "./pages/DetailsPage";
import { useState } from "react";

function App() {
  const students = [
    {
      id: 1,
      name: "Harry",
      house: "Gryffindor",
    },
    {
      id: 2,
      name: "Ron",
      house: "Gryffindor",
    },
    {
      id: 3,
      name: "Draco",
      house: "Slytherin",
    },
  ];
  const [studentsState, setStudentsState] = useState(students);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage students={studentsState} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/wizard"
          element={<DetailsPage students={studentsState} />}
        />
        <Route
          path="/wizard/:wizardId"
          element={<DetailsPage students={studentsState} />}
        />

        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
