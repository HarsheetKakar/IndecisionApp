import React from "react";

const Options = (props) => {
    return (
        <div>
            <button onClick={props.removeAll} className='button button--link'>
                Remove All
            </button>
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
                    className='button button--link'>
                    Remove
                </button>
            </li>
        </div>
    );
};

export default Options;
