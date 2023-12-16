import { Link } from "react-router-dom";

function DeleteBtn({ onDelete, charId }) {
  return (
    <button
      onClick={() => {
        onDelete(charId);
      }}
    >
      Delete
    </button>
  );
}
export default DeleteBtn;
