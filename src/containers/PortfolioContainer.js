import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {


  showStocks = () =>{
    return this.props.portfolioArr.map(stock=>{
      return <Stock stock={stock} handleStock={this.props.sellStock} key={stock.id}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.showStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
