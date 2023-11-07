// Write your code here
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="main-bg-container">
      <div className="main-faqs-container">
        <h1 className="main-title">FAQs</h1>
        <ul className="list-section">
          {faqsList.map(eachFaqs => (
            <FaqItem key={eachFaqs.id} mainFaqDetailsSection={eachFaqs} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
