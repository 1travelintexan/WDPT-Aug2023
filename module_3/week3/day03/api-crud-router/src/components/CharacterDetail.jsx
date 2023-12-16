import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "./CharacterCard";

function CharacterDetail({ characters, onDelete }) {
  const { characterId } = useParams();
  const [charDetail, setCharDetail] = useState(null);
  //using the API to give us specific data on one character
  //   useEffect(() => {
  //     const fetchCharacter = async () => {
  //       try {
  //         const { data } = await axios.get(
  //           `https://thronesapi.com/api/v2/Characters/${characterId}`
  //         );
  //         console.log("hopefully the one character", data);
  //       } catch (err) {
  //         console.log("there was a problem", err);
  //       }
  //     };

  //     fetchCharacter();
  //   }, [characterId]);
  //   console.log(characterId, characters);
  useEffect(() => {
    if (characters) {
      const theCharacter = characters.find((element) => {
        if (element.id == characterId) {
          return true;
        }
      });
      console.log(theCharacter);
      setCharDetail(theCharacter);
    }
  }, [characterId]);
  if (!characters) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <CharacterCard oneCharacter={charDetail} onDelete={onDelete} />
    </div>
  );
}
export default CharacterDetail;
