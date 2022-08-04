import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const SkillAssessment = () => {
  const [questions, setQuestion] = useState([]);
  axios
    .get('https://safe-oasis-01130.herokuapp.com/skillassessment/test')
    .then((res) => setQuestion(res.data));

  return (
    <>
      <div className="text-3xl text-center font-sans font-semibold mt-6">
        Try your skill
      </div>
      <div className="flex justify-center">
        <div className="w-3/4">Question: </div>
      </div>
    </>
  );
};

export default SkillAssessment;
