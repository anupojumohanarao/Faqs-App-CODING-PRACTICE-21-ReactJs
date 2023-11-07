// Write your code here.
import {Component} from 'react'
import './index.css'

const plusUrl =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusUrl =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {mainActive: false}

  renderTotalAnswer = () => {
    const {mainActive} = this.state
    const {mainFaqDetailsSection} = this.props
    const {answerText} = mainFaqDetailsSection

    if (mainActive) {
      return (
        <div className="main-faqs-section">
          <hr className="line" />
          <p className="main-answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onClickButton = () => {
    this.setState(prevState => ({
      mainActive: !prevState.mainActive,
    }))
  }

  renderMainImages = () => {
    const {mainActive} = this.state
    const imageUrl = mainActive ? minusUrl : plusUrl
    const altSection = mainActive ? 'minus' : 'plus'

    return (
      <button
        className="plus-minus-button"
        type="button"
        onClick={this.onClickButton}
      >
        <img src={imageUrl} alt={altSection} className="plus-minus-Icons" />
      </button>
    )
  }

  render() {
    const {mainFaqDetailsSection} = this.props
    const {questionText} = mainFaqDetailsSection

    return (
      <li className="app-container">
        <div className="question-section">
          <h1 className="question-title">{questionText}</h1>
          {this.renderMainImages()}
        </div>
        {this.renderTotalAnswer()}
      </li>
    )
  }
}
export default FaqItem
