import React from 'react';
import ReactCardFlip from 'react-card-flip';

const Flashcard = ({ flashcard, handleClick }) => {
  const handleCardClick = (e) => {
    e.stopPropagation();
    console.log('Card clicked');
    handleClick();
  };

  return (
    <ReactCardFlip isFlipped={flashcard.isFlipped} flipDirection="vertical">
      <div className="card front" onClick={handleCardClick}>
        {flashcard.question}
      </div>
      <div className="card back" onClick={handleCardClick}>
        {flashcard.answer}
      </div>
    </ReactCardFlip>
  );
};

export default Flashcard;
