import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function Spsgame() {

  const [userChoice, setUserChoice] = useState('');
  const [compChoice, setComputerChoice] = useState('');
  const [score, setScore] = useState({ user: 0, computer: 0 });
  const [result, setResult] = useState('');

  var choices = ['rock', 'paper', 'scissor'];
  var choice_object = {
    'rock': {
      'rock': 'draw',
      'scissor': 'win',
      'paper': 'lose'
    },
    'paper': {
      'rock': 'win',
      'scissor': 'lose',
      'paper': 'draw'
    },
    'scissor': {
      'rock': 'lose',
      'scissor': 'draw',
      'paper': 'win'
    }
  }

  const checker = (choice) => {
    setUserChoice(choice);
    var comp_choice = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(comp_choice);
  }

  useEffect(() => {
    if (userChoice && compChoice) {
      var get_result = choice_object[userChoice][compChoice];
      if (get_result == 'win') {
        setScore({
          user: score.user + 1,
          computer: score.computer
        })
      }
      else if (get_result == 'lose') {
        setScore({
          user: score.user,
          computer: score.computer + 1
        })
      }
      
      setResult(get_result);
    }

  }, [userChoice, compChoice]);

  return (
    <div className="container">
      <div className="scores">
        <p>Computer :
          <span id="computer_score">{score.computer}</span>
        </p>
        <p>
          You :
          <span id="user_score">{score.user}</span>
        </p>
      </div>
      <div className="weapons">
        <h1>Choose your weapon</h1>
        <button onClick={() => checker('rock')}>
          <i className="far fa-hand-rock"></i>
        </button>
        <button onClick={() => checker('paper')}>
          <i className="far fa-hand-paper"></i>
        </button>
        <button onClick={() => checker('scissor')}>
          <i className="far fa-hand-scissors"></i>
        </button>
      </div>
      <div className="details">
        <p id="user_choice">userchoice:
          {userChoice}
        </p>
        <p id="comp_choice">compchoice:
          {compChoice}
        </p>
        <p id="result">result:
          {result}
        </p>
      </div>
    </div>
  );
}

export default Spsgame;
