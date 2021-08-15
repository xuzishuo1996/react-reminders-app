import React, { useState } from "react";

function CreateArea(props) {

    // useState hook: https://reactjs.org/docs/hooks-reference.html#usestate
    const [note, setNote] = useState({
        title: "",
        content: ""
    }); 

    function handleChange(event) {
        // destructure: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
       const {name, value} = event.target;

       setNote(prevNote => ({
            ...prevNote,    // spread syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
            [name]: value   // https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable?noredirect=1&lq=1
       }));
    }

    function submitNode(event) {
        props.onAdd(note);
        // prevent reloading of the page
        event.preventDefault();
    }

    return (
        <div>
            <form>
                {/* inputs are controlled by the value field: https://reactjs.org/docs/forms.html#controlled-components */}
                <input name="title" 
                    onChange={handleChange}
                    value={note.title} 
                    placeholder="Title" 
                />
                <textarea 
                    name="content" 
                    onChange={handleChange} 
                    value={note.content} 
                    placeholder="Take a note..." 
                    rows="3" />
                <button onClick={submitNode}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;