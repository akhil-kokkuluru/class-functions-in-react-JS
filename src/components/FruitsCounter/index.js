import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  mangoClick = () => {
    this.setState(values => ({mangoes: values.mangoes + 1}))
  }

  bananaClick = () => {
    this.setState(values => ({bananas: values.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="totalcontainer">
        <div className="contentcontainer">
          <h1 className="heading">
            Bob ate <span className="spanElement">{mangoes}</span> mangoes 
            <span className="spanElement">{bananas}</span>
             bananas
          </h1>
          <div className="fruitCards">
            <div className="fruits">
              <img
                className="images"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                type="button"
                className="buttons"
                onClick={this.mangoClick}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruits">
              <img
                className="images"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="mango"
              />
              <button
                type="button"
                className="buttons"
                onClick={this.bananaClick}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
