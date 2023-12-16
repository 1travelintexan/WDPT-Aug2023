import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CharacterList from "./components/CharacterList";
import { Route, Routes, useNavigate } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";
import NotFound from "./components/NotFound";
import CreateCharacter from "./components/CreateCharacter";
import UpdateCharacter from "./components/UpdateCharacter";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  //this will run when the component mounts ( just once )
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://thronesapi.com/api/v2/Characters"
      );
      console.log("hopefully the characters");
      setCharacters(data);
    };
    fetchData();
  }, []);

  //lifting the state up example
  const deleteChar = (id) => {
    console.log("deleting", id);
    const filteredChars = characters.filter((elem) => elem.id !== id);
    console.log("filtered chars", filteredChars);
    setCharacters(filteredChars);
    navigate("/");
  };

  return (
    <>
      <h1>Game of Thrones</h1>
      <Routes>
        <Route
          path="/"
          element={
            <CharacterList
              characters={characters}
              setCharacters={setCharacters}
            />
          }
        />
        <Route
          path="/character-detail/:characterId"
          element={
            <CharacterDetail characters={characters} onDelete={deleteChar} />
          }
        />
        <Route
          path="/create"
          element={
            <CreateCharacter
              characters={characters}
              setCharacters={setCharacters}
            />
          }
        />
        <Route
          path="/character/edit/:characterId"
          element={
            <UpdateCharacter
              characters={characters}
              setCharacters={setCharacters}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
