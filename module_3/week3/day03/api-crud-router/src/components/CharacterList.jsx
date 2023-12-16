import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  return (
    <>
      <Link to="/create">
        <button>Create Character</button>
      </Link>
      {characters.map((oneCharacter) => {
        return (
          <CharacterCard key={oneCharacter.id} oneCharacter={oneCharacter} />
        );
      })}
    </>
  );
}
export default CharacterList;
