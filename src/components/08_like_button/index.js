import "./like.css";
import { BsHeart } from "react-icons/bs";
import { useState } from "react";

export default function Like() {
  const [liked, setLiked] = useState(false);
  return (
    <div className="App">
      <button
        className={`likeBtn ${liked ? "liked" : ""}`}
        onClick={() => setLiked(!liked)}
      >
        <BsHeart /> {liked ? "liked" : "like"}
      </button>
    </div>
  );
}
