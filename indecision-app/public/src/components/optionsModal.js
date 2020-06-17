import React from "react";
import ReactModal from "react-modal";

const OptionsModal = (props) => {
    return (
        <ReactModal
            isOpen={!!props.selectedOption}
            contentLabel="Selected Option"
            onRequestClose={props.closeModal}
        >
            <p>Selected Option is: {props.selectedOption}</p>
            <button onClick={props.closeModal}>Okay</button>
        </ReactModal>
    );
};

export default OptionsModal;
