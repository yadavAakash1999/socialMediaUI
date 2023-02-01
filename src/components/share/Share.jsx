import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from "@material-ui/icons"
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext"
import { useState } from "react";
import axios from "axios";
export default function Share() {

  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef()
  const [file, setFile] = useState(null);

  const clickHandler =async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("http://localhost:8080/api/upload", data);
      } catch (err) {console.log(err) }
    }
    try {
      await axios.post("http://localhost:8080/api/posts", newPost);
      window.location.reload();
    } catch (err) {console.log(err) }
  };



return (
  <div className="share">
    <div className="shareWrapper">
      <div className="shareTop">
        <img className="shareProfileImg" src={user.profilePicture ? PF + user.profilePicture : PF + "/person/noAvatar.png"} alt="" />
        <input ref={desc}
          placeholder={`What's in your mind ${user.username}?`}
          className="shareInput"
        />
      </div>
      <hr className="shareHr" />
      {file && (
        <div className="shareImgContainer">
          <img className="shareImg" src={(URL.createObjectURL(file))}/>
          <Cancel className="shareCancleing" onClick={()=>setFile(null)}/>
        </div>
      )}
      <form className="shareBottom" onSubmit={clickHandler}>
        <div className="shareOptions">
          <label htmlFor="file" className="shareOption">
            <PermMedia htmlColor="tomato" className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
            <input type="file" id="file" accept=".jpg,.jpeg, png" style={{ display: "none" }} onChange={(e) => { setFile(e.target.files[0]) }} />
          </label>
          <div className="shareOption">
            <Label htmlColor="blue" className="shareIcon" />
            <span className="shareOptionText">Tag</span>
          </div>
          <div className="shareOption">
            <Room htmlColor="green" className="shareIcon" />
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareOption">
            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
            <span className="shareOptionText">Feelings</span>
          </div>
        </div>
        <button className="shareButton" type="submit">Share</button>
      </form>
    </div>
  </div>
);
}
