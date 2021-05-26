import React from 'react'

const Stock = (props) => {

  // const handleClick = (evt)=>{

  // }

  
  return <div onClick={()=> props.handleStock(props.stock)}>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            //Company Name
            props.stock.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            props.stock.price
          }</p>
      </div>
    </div>


  </div>
};

export default Stock
