import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { serverLink } from './../../../utilities/links';

const SkillAssessment = () => {
  const [questions, setQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});
  const optionDesign =
    'text-lg my-4 p-4 cursor-pointer block w-full text-left focus:outline-none';

  const currentOption = (option) => {
    setSelectedOption(option);
  };

  const handleAnsBtnClick = (selectedOption) => {
    if (selectedOption.isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    nextQuestion < questions.length
      ? setCurrentQuestion(nextQuestion)
      : setShowScore(true);
  };

  useEffect(() => {
    axios.get(`${serverLink}/skillassessment/test`).then((res) => {
      setQuestion(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <div className="h-[80vh] my-auto">
        <div className="text-3xl text-center font-sans font-semibold mt-6">
          Try your skill
        </div>
        <div className="flex flex-col justify-center">
          {loading && <progress class="progress w-56"></progress>}
          {showScore ? (
            <h1 className="text-4xl font-bold my-6 text-center">
              Your score is {score}
            </h1>
          ) : (
            !loading && (
              <>
                <div className="w-3/4 mx-auto mt-4">
                  <h3 className="text-xl text-gray-600">
                    Question {currentQuestion + 1}:{' '}
                    {questions[currentQuestion].question}
                  </h3>
                  {questions[currentQuestion]?.options.map((option, i) => (
                    <>
                      <button
                        key={i}
                        onClick={() => currentOption(option)}
                        className={
                          selectedOption.option === option.option
                            ? `bg-green-400 ${optionDesign}`
                            : `bg-gray-200 ${optionDesign}`
                        }
                      >
                        {i + 1}) {option.option}
                      </button>
                    </>
                  ))}
                  <button
                    className="float-right bg-primary text-white px-6 py-3 rounded hover:opacity-80"
                    onClick={() => handleAnsBtnClick(selectedOption)}
                  >
                    Next Question
                  </button>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default SkillAssessment;
