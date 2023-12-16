import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateCharacter({ characters, setCharacters }) {
  const [fullName, setFullName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const { characterId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const foundCharacter = characters.find((char) => char.id == characterId);
    console.log("found char", foundCharacter);
    //this is where we set the states to be the found character details
    setFullName(foundCharacter.fullName);
    setImageUrl(foundCharacter.imageUrl);
    setTitle(foundCharacter.title);
  }, [characterId]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const mappedCharacters = characters.map((oneCharacter) => {
      if (oneCharacter.id == characterId) {
        oneCharacter.fullName = fullName;
        oneCharacter.imageUrl = imageUrl;
        oneCharacter.title = title;
        return oneCharacter;
      } else {
        return oneCharacter;
      }
    });
    setCharacters(mappedCharacters);
    navigate("/");
  };

  if (!characters) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h2>CreateCharacter</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Full Name:
          <input
            value={fullName}
            placeholder="full name"
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </label>
        <label>
          {" "}
          Picture:
          <input
            value={imageUrl}
            placeholder="Picture"
            onChange={(event) => {
              setImageUrl(event.target.value);
            }}
          />
        </label>
        <label>
          Title:
          <input
            value={title}
            placeholder="Title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </label>
        <button>Update</button>
      </form>
    </div>
  );
}
export default UpdateCharacter;
