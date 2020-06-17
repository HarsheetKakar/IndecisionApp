import React from "react";

const AddOption = (props) => {
    return (
        <div>
            <form onSubmit={props.handleOnSubmit}>
                <input type="text" name="task" id="task" />
                <button type="submit">Add Option</button>
            </form>
        </div>
    );
};

export default AddOption;