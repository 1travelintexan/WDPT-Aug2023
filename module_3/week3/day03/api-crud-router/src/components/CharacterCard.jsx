import { Link } from "react-router-dom";
import DeleteBtn from "./DeleteBtn";
function CharacterCard({ oneCharacter, onDelete }) {
  if (!oneCharacter) {
    return <p>Loading...</p>;
  }
  return (
    <div className="card">
      <Link to={`/character-detail/${oneCharacter.id}`}>
        <img
          src={oneCharacter.imageUrl}
          alt={oneCharacter.fullName}
          style={{ height: "100px" }}
        />
      </Link>
      <h3>{oneCharacter.fullName}</h3>
      <h6>{oneCharacter.title}</h6>
      {/* If the function onDelete was sent, then show the button else (:) show nothing */}
      {onDelete ? (
        <DeleteBtn onDelete={onDelete} charId={oneCharacter.id} />
      ) : null}
      <Link to={`/character/edit/${oneCharacter.id}`}>
        <button>Edit Character</button>
      </Link>
    </div>
  );
}
export default CharacterCard;
