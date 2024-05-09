import React, { Component } from 'react'

 class TDVProductList extends Component {
  render() {
    let {renderProducts} = this.props;
    console.log("Products:",renderProducts);
    let fnStatus = (param)=>{
      if(param===1){
        return 'Active';
      }
      return 'NonActive';
    }

    let elementProducts = renderProducts.map((item,index)=>{
        return(
            <>
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    {/* <td>{item.status===1?'Active':'NonActive'}</td> */}
                    <td>
                      {fnStatus(item.status)}
                    </td>
                </tr>
            </>
        )
    })
    return (
      <div>
        <h2>Danh sach san pham</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
               {elementProducts}
            </tbody>
        </table>
      </div>
    )
  }
}

export default TDVProductList;