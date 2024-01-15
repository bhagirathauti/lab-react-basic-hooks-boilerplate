import { useContext, useEffect, useState } from "react";
import { ToggleTheme } from "../App";

function UseContext(){

    const [text,setText] =  useState(false)
    const [likes,setLike] =  useState(0)

    useEffect(() => {
        alert("Content button is clicked")
    },[text])

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }

  return(
    <div style={themeStyle}>
      {text && <p>hi my name is bhagirath</p> }
      <button onClick={() => setText(!text)}>Content</button>
      <h3>{likes}</h3>
      <button onClick={() => setLike(likes + 1)}>Likes</button>
    </div>
  )
}

export default UseContext;