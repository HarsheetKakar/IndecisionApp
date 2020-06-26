import React from "react";

const Options = (props) => {
    return (
        <div>
            <div className='widget-header'>
                <h3 className='widget__title'>Your Options</h3>
                <button
                    onClick={props.removeAll}
                    className='button button--link'>
                    Remove All
                </button>
            </div>
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
            <li className='options'>
                <span className='options__option'>{props.option}</span>
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
