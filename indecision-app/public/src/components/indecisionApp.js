import React from "react";
import Header from "./header.js";
import Action from "./action.js";
import Options from "./options.js";
import AddOption from "./addOption.js";

class IndecisionApp extends React.Component {
    constructor() {
        super();
        this.title = "Indecision App";
        this.subtitle = "not this";
        this.state = {
            options: [],
            selectedOption: undefined,
        };
        // this.addOption = this.addOption.bind(this);
        this.removeAll = this.removeAll.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleAddValue = this.handleAddValue.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }
    componentDidMount() {
        // add info from localstorage to options
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (!!options) {
                this.setState(() => {
                    return {
                        options: options,
                    };
                });
            }
        } catch (e) {}
    }
    componentDidUpdate(previousProps, previousState) {
        if (previousState.options.length != this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }
    handleDeleteOption(option) {
        this.setState((previousState) => {
            return {
                options: previousState.options.filter((value) => {
                    return value != option;
                }),
            };
        });
    }
    handleAddValue(value) {
        if (this.state.options.indexOf(value) > -1) {
            alert("value already added");
            return;
        }
        this.setState((previousState) => {
            return {
                options: previousState.options.concat(value),
            };
        });
    }
    handleOnSubmit(e) {
        e.preventDefault();
        const target = e.target.elements.task;
        const value = target.value.trim();
        if (!!value) {
            this.handleAddValue(value);
        }
        e.target.elements.task.value = "";
    }
    removeAll() {
        this.setState(() => {
            return {
                options: [],
            };
        });
    }
    render() {
        return (
            <div>
                <Header title={this.title} subtitle={this.subtitle} />

                <div className='container'>
                    {this.state.options.length > 0 ? (
                        <Action options={this.state.options} />
                    ) : (
                        ""
                    )}
                    <div className='widget'>
                        <Options
                            options={this.state.options}
                            removeAll={this.removeAll}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleOnSubmit={this.handleOnSubmit} />
                    </div>
                </div>
            </div>
        );
    }
}

export default IndecisionApp;
