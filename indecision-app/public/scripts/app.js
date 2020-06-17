"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp() {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this));

        _this.title = "Indecision App";
        _this.subtitle = "Put your life in the hands of computer";
        _this.state = {
            options: []
        };
        // this.addOption = this.addOption.bind(this);
        _this.removeAll = _this.removeAll.bind(_this);
        _this.handleOnSubmit = _this.handleOnSubmit.bind(_this);
        _this.handleAddValue = _this.handleAddValue.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            // add info from localstorage to options
            try {
                var json = localStorage.getItem("options");
                var options = JSON.parse(json);
                if (!!options) {
                    this.setState(function () {
                        return {
                            options: options
                        };
                    });
                }
            } catch (e) {}
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(previousProps, previousState) {
            if (previousState.options.length != this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem("options", json);
            }
        }
    }, {
        key: "handleDeleteOption",
        value: function handleDeleteOption(option) {
            this.setState(function (previousState) {
                return {
                    options: previousState.options.filter(function (value) {
                        return value != option;
                    })
                };
            });
        }
    }, {
        key: "handleAddValue",
        value: function handleAddValue(value) {
            if (this.state.options.indexOf(value) > -1) {
                alert("this value already exists");
                return;
            }
            this.setState(function (previousState) {
                return {
                    options: previousState.options.concat(value)
                };
            });
        }
    }, {
        key: "handleOnSubmit",
        value: function handleOnSubmit(e) {
            e.preventDefault();
            var target = e.target.elements.task;
            var value = target.value.trim();
            if (!!value) {
                this.handleAddValue(value);
            }
            e.target.elements.task.value = "";
        }
    }, {
        key: "removeAll",
        value: function removeAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: this.title, subtitle: this.subtitle }),
                this.state.options.length > 0 ? React.createElement(Action, { options: this.state.options }) : "",
                React.createElement(Options, {
                    options: this.state.options,
                    removeAll: this.removeAll,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, { handleOnSubmit: this.handleOnSubmit })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Action = function (_React$Component2) {
    _inherits(Action, _React$Component2);

    function Action(props) {
        _classCallCheck(this, Action);

        var _this2 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

        _this2.handlePick = _this2.handlePick.bind(_this2);
        return _this2;
    }

    _createClass(Action, [{
        key: "handlePick",
        value: function handlePick() {
            var options = this.props.options;
            var randomNumber = Math.floor(Math.random() * options.length);
            alert(options[randomNumber]);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.handlePick },
                    "What should I do?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: "Indecision App"
};

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "ol",
            null,
            props.options.map(function (option, key) {
                return React.createElement(Option, {
                    option: option,
                    key: key,
                    handleDeleteOption: props.handleDeleteOption
                });
            })
        ),
        React.createElement(
            "button",
            { onClick: props.removeAll },
            "Remove All"
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "li",
            null,
            props.option,
            React.createElement(
                "button",
                {
                    onClick: function onClick() {
                        props.handleDeleteOption(props.option);
                    }
                },
                "Remove"
            )
        )
    );
};

var AddOption = function AddOption(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { onSubmit: props.handleOnSubmit },
            React.createElement("input", { type: "text", name: "task", id: "task" }),
            React.createElement(
                "button",
                { type: "submit" },
                "Add Option"
            )
        )
    );
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
