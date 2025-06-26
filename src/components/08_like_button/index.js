import { useState } from "react";
import { BsHeart, BsLinkedin, BsInstagram } from "react-icons/bs";
import "./like.css";

export default function Like() {
  const [liked, setLiked] = useState(false);
  const [social, setSocial] = useState(false);
  const [instaed, setInstaed] = useState(false);
  return (
    <div className="wrapper">
      <button
        className={`likeBtn ${liked ? "liked" : ""}`}
        onClick={() => setLiked(!liked)}
      >
        <BsHeart size={25} />
        <span>{liked ? "liked" : "like"}</span>
      </button>
      <button
        className={`linkBtn ${social ? "linked" : ""}`}
        onClick={() => setSocial(!social)}
      >
        <BsLinkedin size={25} />
        <span>{social ? "Linked" : "Link"}</span>
      </button>
      <button
        className={`instaBtn ${instaed ? "instaed" : ""}`}
        onClick={() => setInstaed(!instaed)}
      >
        <BsInstagram size={25} />
        <span>{instaed ? "insta-ed" : "insta"}</span>
      </button>
    </div>
  );
}
