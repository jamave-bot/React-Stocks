import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state ={
    stocksArr: [],
    portfolioArr: [],
    filterTerm: 'Tech',
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
      .then(res=> res.json())
      .then(stocksArr=>{
        this.setState({
          stocksArr: stocksArr,
        })
      })
  }



  buyStock = (stock) =>{
    if(!this.state.portfolioArr.includes(stock)){
      let newPortfolioArr = [...this.state.portfolioArr, stock]
      this.setState({
        portfolioArr: newPortfolioArr
      })
    } else{
      alert('You can not add that twice!')
    }
  }

  sellStock = (stock)=>{
    let portfolioCopy = this.state.portfolioArr.filter(portfolioStock => {
      return portfolioStock.id !== stock.id
    })
    this.setState({
      portfolioArr: portfolioCopy
    })
  }

  setFilter = (newFilterTerm)=>{
    this.setState({
      filterTerm: newFilterTerm
    })
  }

  render() {

    let filteredStocks;
    filteredStocks= [...this.state.stocksArr].filter(stock =>{
      return stock.type === this.state.filterTerm
    })

    return (
      <div>
        <SearchBar setFilter={this.setFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocksArr={filteredStocks} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioArr={this.state.portfolioArr} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
