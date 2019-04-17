import React from 'react';

const AnswerCard = (props) => {
  return (
    <article>
      <h2>Correct Answer: {props.correctAnswer}</h2>
    </article>
  )
}

export default AnswerCard;