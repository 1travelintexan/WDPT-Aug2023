import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateCharacter({ characters, setCharacters }) {
  const [fullName, setFullName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const handleCreateChar = (event) => {
    event.preventDefault();
    const newCharacter = {
      id: characters.length + 1,
      title,
      imageUrl,
      fullName,
    };
    setCharacters([newCharacter, ...characters]);
    navigate("/");
  };
  return (
    <div>
      <h2>CreateCharacter</h2>
      <form onSubmit={handleCreateChar}>
        <input
          value={fullName}
          placeholder="full name"
          onChange={(event) => {
            setFullName(event.target.value);
          }}
        />
        <input
          value={imageUrl}
          placeholder="Picture"
          onChange={(event) => {
            setImageUrl(event.target.value);
          }}
        />
        <input
          value={title}
          placeholder="Title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <button>Create</button>
      </form>
    </div>
  );
}
export default CreateCharacter;
