import {Component} from 'react'
import './index.css'

class GreenRedLight extends Component {
  state = {
    isGameStart: false,
    score: 0,
    timer: 10,
    isGreen: true,
    num: 0,
    isResult: false,
  }

  clearTime = () => {
    const {timer} = this.state
    if (timer === 0) {
      clearInterval(this.uniqueTimerId)
      this.setState({isResult: true})
    }
  }

  onSubmitRegister = event => {
    event.preventDefault()
    this.uniqueTimerId = setInterval(() => {
      const counter = Math.random() - 0.5
      if (counter >= 0) {
        this.setState({isGreen: true})
      } else {
        this.setState({isGreen: false})
      }
      this.setState(
        prevState => ({
          timer: prevState.timer - 1,
          num: counter,
          isGameStart: true,
        }),
        this.clearTime,
      )
    }, 1000)
  }

  onClickBox = () => {
    const {num} = this.state
    if (num >= 0) {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (num < 0) {
      clearInterval(this.uniqueTimerId)
      this.setState({isResult: true})
    }
  }

  isResultContainer = () => {
    const {score} = this.state
    return (
      <>
        <h1 className="game-heading">Games Started</h1>
        <div className="registration-card-container">{score}</div>
      </>
    )
  }

  renderStartSuccessfully = () => {
    const {score, timer, isGreen, isResult} = this.state
    return (
      <div className="registration-container">
        {isResult ? (
          this.isResultContainer
        ) : (
          <>
            <h1 className="game-heading">Games Started</h1>
            <div className="registration-card-container">
              <div className="timer-count-container">
                <h1 className="count-heading">{`Score: ${score}`}</h1>
                <h1 className="count-heading">{`Timer: ${timer}`}</h1>
              </div>
              <button
                type="button"
                className={`box ${isGreen ? 'green' : 'red'}`}
                onClick={this.onClickBox}
              >
                Click Me
              </button>
            </div>
          </>
        )}
      </div>
    )
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
      <button type="submit" className="button">
        Start Game
      </button>
    </form>
  )

  render() {
    const {isGameStart} = this.state
    return (
      <div className="main-container">
        <img
          src="https://res.cloudinary.com/dunicojo6/image/upload/v1695056465/download_fmqxji.png"
          alt="logo"
          className="heading-image"
        />
        {isGameStart
          ? this.renderStartSuccessfully()
          : this.renderRegistration()}
      </div>
    )
  }
}

export default GreenRedLight
