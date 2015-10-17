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

window.onload = () =>{
    //React.render(<App/>, document.querySelector('#root'));
}

