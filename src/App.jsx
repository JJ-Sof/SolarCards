import React, { useState, useEffect } from 'react';
import Flashcard from './components/Flashcard';
import './App.css';

const initialFlashcardsData = [
  { id: 1, question: 'Approximately how old is the Universe?', answer: 'Answer: 13.7 Billion years old', isFlipped: false },
  { id: 2, question: 'What is the most common type of galaxy in the universe?', answer: 'Answer: Elliptical Galaxies', isFlipped: false },
  { id: 3, question: 'What is the most common type of star found in the Milky Way?', answer: 'Answer: Red Dwarf Stars', isFlipped: false },
  { id: 4, question: 'Outside of the sun, what is the closest star to Earth?', answer: 'Answer: Alpha Centauri', isFlipped: false },
  { id: 5, question: 'Approximately how many miles is a lightyear?', answer: 'Answer: 5.9 trillion miles', isFlipped: false },
  { id: 6, question: 'What is the coldest place in the universe?', answer: 'Answer: Boomerang Nebula', isFlipped: false },
  { id: 7, question: 'What three things are comets made out of?', answer: 'Answer: Dust, Rocks, and Ice', isFlipped: false },
  { id: 8, question: 'What is the name of the main theory that describes how our universe was created?', answer: 'Answer: The Big Bang Theory', isFlipped: false },
  { id: 9, question: 'What type of galaxy is the Milky Way?', answer: 'Answer: Spiral', isFlipped: false },
  { id: 10, question: 'How many galaxies outside of the Milky Way can we see with the naked eye?', answer: 'Answer: 1 (Andromeda Galaxy)', isFlipped: false }
];

const App = () => {
  const [flashcards, setFlashcards] = useState(initialFlashcardsData);
  const [currentCard, setCurrentCard] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    handleChange();
  }, [currentText, currentCard]);

  const handleFlip = () => {
    const updatedFlashcards = flashcards.map((card, index) => {
      if (index === currentCard) {
        return { ...card, isFlipped: !card.isFlipped };
      }
      return card;
    });
    setFlashcards(updatedFlashcards);
  };

  const handleNextCard = () => {
    if (currentCard < initialFlashcardsData.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  };
  
  const handlePrevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  const handleChange = () => {
    const currentFlashcard = flashcards[currentCard];
    const flashAnswer = currentFlashcard.answer.substring(8)
    const isCorrect = currentText.trim().toLowerCase() === flashAnswer.trim().toLowerCase();
    if (isCorrect) {
      document.getElementById('answer-input').classList.add('correct');
      document.getElementById('answer-input').classList.remove('incorrect');
    } else {
      document.getElementById('answer-input').classList.add('incorrect');
      document.getElementById('answer-input').classList.remove('correct');
    }
  };
  

  return (
    <div className="App">
      <h1>Space Quiz!</h1>
      <h2>Test your knowledge of outer space</h2>
      <h3>No. of cards: {initialFlashcardsData.length}</h3>
      <Flashcard
        flashcard={flashcards[currentCard]}
        handleClick={handleFlip}
      />
      <h3>Enter your answer here: </h3>
      <input
        id="answer-input"
        type='text'
        onChange={(e) =>
          setCurrentText(e.target.value)}
      />
      <button className="change-card-button" onClick={handlePrevCard}>Previous Card</button>
      <button className="change-card-button" onClick={handleNextCard}>Next Card</button>
    </div>
  );
}

export default App;
