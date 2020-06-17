import React from "react";

const Options = (props) => {
    return (
        <div>
            <ol>
                {props.options.map((option, key) => {
                    return (
                        <Option
                            option={option}
                            key={key}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    );
                })}
            </ol>
            <button onClick={props.removeAll}>Remove All</button>
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            <li>
                {props.option}
                <button
                    onClick={() => {
                        props.handleDeleteOption(props.option);
                    }}
                >
                    Remove
                </button>
            </li>
        </div>
    );
};

export default Options;
