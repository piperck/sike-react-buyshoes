/**
 * Created by piperck on 15/10/17.
 */
//创建一个app组件
//build an appComponent
"use strict";

var App = React.createClass({
    displayName: "App",

    render: function render() {
        return React.createElement(
            "div",
            { className: "site" },
            React.createElement(
                "h1",
                null,
                "Buy Some Shoes!!!"
            )
        );
    }
});

window.onload = function () {
    //React.render(<App/>, document.querySelector('#root'));
};
