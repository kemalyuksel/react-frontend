import React from 'react';

const Note = ( {name , description , deleteNote , id} ) => (


       <div className="tbl">
            <label className="head">{name} ({id}) </label>
            <p> {description} </p>
            <button className="btn-delete" onClick={deleteNote} value={id} > Delete </button>
        </div>
    

)
    
     


export default Note;