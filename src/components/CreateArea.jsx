import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

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

        setNote({
            title: "",
            content: ""
        });

        // prevent reloading of the page
        event.preventDefault();
    }
    
    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {/* inputs are controlled by the value field: https://reactjs.org/docs/forms.html#controlled-components */}
                {/* conditional rendering. equivalent to isExpanded ? <...> : null */}
                {isExpanded && (
                    <input name="title" 
                        onChange={handleChange}
                        value={note.title} 
                        placeholder="Title" 
                    />
                )}
                <textarea 
                    name="content" 
                    onClick={expand}
                    onChange={handleChange} 
                    value={note.content} 
                    placeholder="Take a note..." 
                    rows={isExpanded ? 3 : 1} />
                {/* https://material-ui.com/components/floating-action-button/#floating-action-button-2 */}
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNode}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;