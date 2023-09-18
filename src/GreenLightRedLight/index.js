import {Component} from 'react'
import './index.css'

class GreenRedLight extends Component {
  state = {isGameStart: false, score: 0, timer: 'easy'}

  onSubmitRegister = event => {
    event.preventDefault()
    console.log('click')
    this.setState({isGameStart: true})
  }

  renderRegistration = () => (
    <form className="registration-container" onSubmit={this.onSubmitRegister}>
      <h1 className="game-heading">Squid Games</h1>
      <label className="label-content" htmlFor="nameInput">
        Name
      </label>
      <input className="input-name" id="nameInput" type="text" />
      <label className="label-content" htmlFor="emailInput">
        Email
      </label>
      <input className="input-name" id="emailInput" type="text" />
      <label className="label-content" htmlFor="mobileInput">
        Mobile Number
      </label>
      <input className="input-name" id="mobileInput" type="text" />
      <label className="label-content" htmlFor="nameInput">
        Difficulty Level
      </label>
      <div className="difficulty-container">
        <input
          className="input-radio"
          id="easyInput"
          type="radio"
          name="difficulty"
        />
        <label className="label-radio" htmlFor="easyInput">
          Easy
        </label>
        <input
          className="input-radio"
          id="mediumInput"
          type="radio"
          name="difficulty"
        />
        <label className="label-radio" htmlFor="mediumInput">
          Medium
        </label>
        <input
          className="input-radio"
          id="hardInput"
          type="radio"
          name="difficulty"
        />
        <label className="label-radio" htmlFor="hardInput">
          Hard
        </label>
      </div>
      <button type="button" className="button">
        Start Game
      </button>
    </form>
  )

  renderStart = () => (
    <div className="registration-container">
      <div className="timer-count-container">
        <h1 className="count-heading">{`${'score'}`}</h1>
        <h1 className="count-heading">{`${'timer'}`}</h1>
      </div>
    </div>
  )

  render() {
    const {isGameStart, score} = this.state
    return (
      <div className="main-container">
        <img
          src="https://res.cloudinary.com/dunicojo6/image/upload/v1695056465/download_fmqxji.png"
          alt="logo"
          className="heading-image"
        />
        {isGameStart ? this.renderStart() : this.renderRegistration()}
      </div>
    )
  }
}

export default GreenRedLight
