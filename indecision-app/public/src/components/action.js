import React from "react";
import OptionsModal from "./optionsModal.js";

class Action extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            selectedOption: undefined,
        };
    }
    handlePick() {
        const options = this.props.options;
        const randomNumber = Math.floor(Math.random() * options.length);
        this.setState(() => {
            return {
                selectedOption: options[randomNumber],
            };
        });
    }

    closeModal = () => {
        this.setState(() => {
            return {
                selectedOption: undefined,
            };
        });
    };

    render() {
        return (
            <div>
                <button className='big-button' onClick={this.handlePick}>
                    What should I do?
                </button>
                <OptionsModal
                    selectedOption={this.state.selectedOption}
                    closeModal={this.closeModal}
                />
            </div>
        );
    }
}

export default Action;
