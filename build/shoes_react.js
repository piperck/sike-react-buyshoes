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

//let products = {
//    jameson_vulc: {
//        id: "jameson-vulc",
//        name: "Jameson Vulc",
//        price: 64.99,
//        imagePath: "../img/shoes/jameson-vulc-brown-gum-orig.png",
//        gender: "man"
//    },
//};

//展示商品
var product = {
    'Jameson_Vulc': {
        name: "Jameson Vulc",
        price: 64.99,
        imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
        gender: "man"
    },
    "marana_x_hook_ups": {
        id: "marana-x-hook-ups",
        name: "Marana X Hook-Up",
        price: 79.99,
        imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
        gender: "man"
    },

    "jameson_e_lite": {
        id: "jameson-e-lite",
        name: "Jameson E-Lite",
        price: 69.99,
        imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
        gender: "man"
    },

    "jameson_e_lite_julian_davidson-4": {
        id: "jameson-e-lite-julian-davidson-4",
        name: "Jameson E-Lite Julian Davidson",
        price: 74.99,
        imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
        gender: "man"
    },

    "scout_womens_6": {
        id: "scout-womens-6",
        name: "Scout Women's",
        imagePath: "img/shoes/scout-womens-6-teal-orig.png",
        price: 59.99,
        gender: "woman"
    },

    "scout_womens_coco_ho_5": {
        id: "scout-womens-coco-ho-5",
        name: "Scout Women's Coco Ho",
        imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
        price: 59.99,
        gender: "woman"
    },

    "jameson_2_womens_8": {
        id: "jameson-2-womens-8",
        name: "Jameson 2 Women's",
        imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
        price: 59.99,
        gender: "woman"
    },

    "corby_womens_2": {
        id: "corby-womens-2",
        name: "Corby Women's",
        imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
        price: 44.99,
        gender: "woman"
    }

};

var Products = React.createClass({
    displayName: "Products",

    render: function render() {
        var children = [];
        for (var key in product) {
            children.push(React.createElement(Product, { key: key, product: product[key] }));
        };
        return React.createElement(
            "div",
            { className: "site__content" },
            children
        );
    }
});

var Product = React.createClass({
    displayName: "Product",

    render: function render() {
        // 这个组件需要 `product` 属性。
        var _props$product = this.props.product;
        var name = _props$product.name;
        var price = _props$product.price;
        var imagePath = _props$product.imagePath;

        return React.createElement(
            "div",
            { className: "product" },
            React.createElement(
                "div",
                { className: "product__display" },
                React.createElement(
                    "span",
                    { className: "price" },
                    price
                ),
                React.createElement("img", { className: "shoes", src: imagePath }),
                React.createElement(
                    "div",
                    { className: "cart-icon" },
                    React.createElement("img", { src: "img/cart-icon.svg" })
                )
            ),
            React.createElement(
                "div",
                { className: "product__description" },
                React.createElement(
                    "span",
                    { className: "product__description-name" },
                    name
                ),
                React.createElement("img", { className: "product__description-heart", src: "img/red-heart.svg" })
            )
        );
    }
});

window.onload = function () {
    React.render(React.createElement(Products, null), document.querySelector('.site__content-wrap'));
};
