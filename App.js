import React from 'react';
import { Button } from 'reactstrap';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import 'bootstrap/dist/css/bootstrap.min.css'

let productList = [
  {name:"Laranja", price:12, info: "Laranja Baiana"},
  {name:"Banana", price:5, info: "Banana Nanica"},
  {name:"Kiwi", price:7, info: "Kiwi Verde"},
  {name:"Carne", price:50, info: "Picanha"}
];

class Product extends React.Component{
    constructor(props){
      super(props);
      this.state={
        qty:0
      };
      //Evento
      this.add = this.add.bind(this);
      this.remove = this.remove.bind(this);
      this.showInfo = this.showInfo.bind(this);
    }
    add(){
      this.setState({
        qty: this.state.qty + 1
      });
    }
    remove(){
      this.setState({
        qty: this.state.qty - 1
      });
    }
    showInfo(){
      alert(this.props.info);
    }

    render(){
      return(
        <div>
          <div className="row form-group">
            <div className="col-sm-10">
              <h4>{this.props.name} : R$ {this.props.price}</h4>
            </div>
            <div className="col-sm-2 text-right">
              Quantidade: {this.state.qty}
            </div>
            <div className="row btn-toolbar">
              <div class="col-6">
                <button className="btn btn-outline-primary" onClick={this.showInfo}>Informações</button>
              </div>
              <div className="col-6 text-right"> 
              <button className="btn btn-outline-primary" onClick={this.add}>+</button>
              <button className="btn btn-outline-primary" onClick={this.remove} disabled={this.state.qty < 1}>-</button>
              </div>
            </div>
          </div>
          <hr/>
        </div>
      );
    }
  }
  class ProductList extends React.Component{
    constructor(props){
      super(props);
      this.state={
        productList: ""
      };
    }
    componentDidMount(){
      setTimeout(() =>{
        this.setState({productList : productList})
      }, 1000);
    }
    render(){
      if(!this.state.productList) return <p>Carregando...</p>
      
      var component = this;
      var products = this.state.productList.map(function(product){
        return (
          <Product name={product.name}
          price={product.price}
          info ={product.info}/>
        );
      });
      return (
        <div>
          {products}
        </div>
      );
    }
  }

function App(){
  return(
    <div>
      <ProductList/>
    </div>
  );
}
export default App;