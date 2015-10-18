/**
 * Created by piperck on 15/10/17.
 */
//创建一个app组件
//build an appComponent
let App = React.createClass({
    render(){
        return(
            <div className="site">
                <h1>Buy Some Shoes!!!</h1>
            </div>
        );
    },
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
let product = {
    'Jameson_Vulc':{
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
        gender: "man",
    },

    "jameson_e_lite": {
        id: "jameson-e-lite",
        name: "Jameson E-Lite",
        price: 69.99,
        imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
        gender: "man",
    },

    "jameson_e_lite_julian_davidson-4": {
        id: "jameson-e-lite-julian-davidson-4",
        name: "Jameson E-Lite Julian Davidson",
        price: 74.99,
        imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
        gender: "man",
    },

    "scout_womens_6": {
        id: "scout-womens-6",
        name: "Scout Women's",
        imagePath: "img/shoes/scout-womens-6-teal-orig.png",
        price: 59.99,
        gender: "woman",
    },

    "scout_womens_coco_ho_5": {
        id: "scout-womens-coco-ho-5",
        name: "Scout Women's Coco Ho",
        imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
        price: 59.99,
        gender: "woman",
    },

    "jameson_2_womens_8": {
        id: "jameson-2-womens-8",
        name: "Jameson 2 Women's",
        imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
        price: 59.99,
        gender: "woman",
    },

    "corby_womens_2": {
        id: "corby-womens-2",
        name: "Corby Women's",
        imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
        price: 44.99,
        gender: "woman",
    },

};


let Products = React.createClass({
    render: function() {
        let children = [];
        for (var key in product){
            children.push( <Product key={key} product={product[key]}/>);
        };
        return (
            <div className="site__content">
                {children}
            </div>
        );
    }
});



let Product = React.createClass({
    render: function() {
        // 这个组件需要 `product` 属性。
        let {name,price,imagePath} = this.props.product;
        return (
            <div className="product">
                <div className="product__display">
                    <span className="price">{price}</span>
                    <img className="shoes" src={imagePath} />
                    <div className="cart-icon">
                        <img src="img/cart-icon.svg" />
                    </div>
                </div>
                <div className="product__description">
                    <span className="product__description-name">{name}</span>
                    <img className="product__description-heart" src="img/red-heart.svg" />
                </div>
            </div>
        );
    }
});



window.onload = () =>{
    React.render(<Products/>, document.querySelector('.site__content-wrap'));
}

