import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const SkillAssessment = () => {
  const [questions, setQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('https://safe-oasis-01130.herokuapp.com/skillassessment/test')
      .then((res) => {
        setQuestion(res.data);
        console.log(res.data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="text-3xl text-center font-sans font-semibold mt-6">
        Try your skill
      </div>
      <div className="flex flex-col justify-center">
        {loading && <progress class="progress w-56"></progress>}
        {!loading &&
          questions.map((question, i) => (
            <>
              <div className="w-3/4 mx-auto mt-4" key={question._id}>
                <h3 className="text-xl text-gray-600">
                  Question {i + 1}: {question.question}
                </h3>
                {console.log(question.options)}
                {question?.options.map((option, i) => (
                  <p className="text-lg bg-gray-200 my-4 p-4 cursor-pointer hover:bg-green-200">
                    {i + 1}) {option.option}
                  </p>
                ))}
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default SkillAssessment;
