import React, { Component } from 'react'
import TDVProductList from './components/TDVProductList';
import TDVProductAdd from './components/TDVProductAdd';

 class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        { title: 'Tran Duy Vu', id: 2210900138 , status:1},
        { title: 'Cabbage', id: 1 , status:1 },
        { title: 'Garlic', id: 2 , status:0 },
        { title: 'Apple', id: 3 , status:0 },
        { title: 'Samsung', id: 4 , status:1 },
      ]
    }
  }

  tdvHandleSubmit = (param)=>{
    console.log("App:",param);
    //them vao mang du lieu products
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Tran Duy Vu - Render Data - Event Form</h1>
        <hr/>
        <TDVProductList renderProducts={this.state.products}/>
        <hr/>
        <TDVProductAdd onSubmit = {this.tdvHandleSubmit}/>
      </div>
    )
  }
}

export default App;