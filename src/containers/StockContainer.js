import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  showStocks = () =>{
    return this.props.stocksArr.map(stock=>{
      return <Stock stock={stock} handleStock={this.props.buyStock} key={stock.id}/>
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.showStocks()}
      </div>
    );
  }

}

export default StockContainer;
