import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { serverLink } from './../../../utilities/links';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import { AiFillTrophy } from 'react-icons/ai';

const SkillAssessment = () => {
  const [user, userLoading] = useAuthState(auth);
  const [userPassed, setUserPassed] = useState(false);
  const [questions, setQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});
  const optionDesign =
    'text-lg my-4 p-4 cursor-pointer block w-full text-left focus:outline-none text-black';

  const currentOption = (option) => {
    setSelectedOption(option);
  };

  const passedUser = () => {
    const userScore = Math.ceil((score / questions.length) * 100);
    console.log(userScore);
    userScore > 75 ? setUserPassed(true) : setUserPassed(false);
  };

  const handleAnsBtnClick = (selectedOption) => {
    if (selectedOption.isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      passedUser();
      setUserScore();
    }
    setSelectedOption({});
  };

  const setUserScore = async () => {
    axios
      .put(`${serverLink}/user/skilltest-number/${user.email}`, { score })
      .then((res) => {
        return res.data;
      });
  };

  useEffect(() => {
    axios.get(`${serverLink}/skillassessment/test`).then((res) => {
      setQuestion(res.data);
      setLoading(false);
    });
  }, [user?.email]);

  if (userLoading) return <Loading />;

  return (
    <>
      {currentQuestion > questions.length - 1 && (
        <div className="flex flex-col items-center mt-3 md:mt-7 text-black">
          <div className="dark:text-white">
            Question number: {currentQuestion + 1} / {questions.length}
          </div>
          <progress
            className="progress progress-primary w-1/2 flex flex-col justify-center"
            value={currentQuestion + 1}
            max={questions.length}
          ></progress>
        </div>
      )}
      <div className="h-[80vh] my-auto">
        <div className="text-3xl text-center font-sans font-semibold mt-6 text-black dark:text-white">
          {userPassed ? 'Congratulations' : 'Try your skill'}
        </div>

        <div className="flex flex-col justify-center">
          {loading && <progress className="progress w-56"></progress>}
          {userPassed ? (
            <>
              <div className="flex flex-col justify-center items-center text-black dark:text-white mt-7 md:mt-20">
                <AiFillTrophy className="text" size={100} />
                <p className="text-3xl font-semibold">
                  You've passed the test with a score of 75% above.
                </p>
              </div>
            </>
          ) : showScore && !userPassed ? (
            <h1 className="text-4xl font-bold my-6 text-center">
              Your score is {score}
            </h1>
          ) : (
            !loading && (
              <>
                <div className="w-1/2 mx-auto mt-4">
                  <h3 className="text-xl text-gray-600 dark:text-white">
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
                    disabled={Object.keys(selectedOption).length === 0}
                    onClick={() => handleAnsBtnClick(selectedOption)}
                  >
                    {currentQuestion === questions.length - 1
                      ? 'Submit'
                      : 'Next Question'}
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
