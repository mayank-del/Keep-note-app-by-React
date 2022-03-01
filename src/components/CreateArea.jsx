import React, { useState } from "react";

function CreateArea(props) {
const [note,setNote]=useState({
  title:"",
  content:""
})
function handleChange(event){
  const {name,value} = event.target;

  setNote(prevNote =>{
    return{
    ...prevNote,
    [name]:value
  }
  })
}
function submitNote(event){
  event.preventDefault();
  props.onAdd(note)// whatever note we are getting, we pass to onadd fxn at parent

  setNote({
    title:"",//making array empty again , so that new values can enter again and again
    content:""
  })
}
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
