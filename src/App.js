import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Question from './Components/Question';
import { MathJaxContext } from 'better-react-mathjax';

function App() {

  const questionNames = ['AreaUnderTheCurve_901', 'BinomialTheorem_901', 'DifferentialCalculus2_901'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => prevIndex - 1);
  };
  const handleNextClick = () => {
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === questionNames.length - 1;

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="App">
      <div className='header'>
        <h1>Math Questions</h1>
      </div>
      <div className='buttons'>
        {questionNames.map((questionName, index) => (
          <button key={questionName} className={index === currentIndex ? 'active' : ''} onClick={() => handleButtonClick(index)}>
            {index + 1}
          </button>
        ))}

      </div>
      <div className='questions'>
        <h3>Question No {currentIndex + 1} : </h3>
        <MathJaxContext>
          <Question questionId={questionNames[currentIndex]} />
        </MathJaxContext>
      </div>

      <div className='nav-buttons'>
        <button onClick={handlePrevClick} disabled={isPrevDisabled}>Prev</button>
        <button onClick={handleNextClick} disabled={isNextDisabled}>Next</button>
      </div>
    </div>
  );
}

export default App;
