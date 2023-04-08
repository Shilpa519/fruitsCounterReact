import {Component} from 'react'
import './index.css'

class FruitsContainer extends Component {
  state = {mango: 0, banana: 0}

  addMango = () => {
    const p = this.setState(prevState => ({
      mango: prevState.mango + 1,
    }))
    console.log(p)
  }

  addBanana = () => {
    this.setState(prevState => ({
      banana: prevState.banana + 1,
    }))
  }

  render() {
    const {mango, banana} = this.state
    console.log(mango)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count">{mango} </span>
            mangoes
            <span className="count"> {banana}</span> bananas
          </h1>
          <div className="fruits-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="image"
              alt="mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="image"
              alt="banana"
            />
          </div>
          <div className="buttons-container">
            <button type="button" className="eat" onClick={this.addMango}>
              Eat Mango
            </button>
            <button type="button" className="eat" onClick={this.addBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsContainer
