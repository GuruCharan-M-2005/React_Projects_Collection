import React, { useState } from 'react';
import './Quiz.css'

export default function Quiz() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    const reset=()=>{
        setShowScore(false);
        setCurrentQuestion(0);
        setScore(0);
    }
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
                    <h1>Quiz!!!</h1>
					<h1>You scored {score} out of {questions.length}</h1>
                    <button onClick={reset} className='reset-button'>Reset</button>
				</div>
			) : (
				<div className='main-frame'>
                    <h1>Quiz!!!</h1>
					<div className='question-section'>
						<div className='question-count'>
							<h1>Question {currentQuestion + 1}/{questions.length}</h1>
						</div>
						<div className='question-text'><h2>{questions[currentQuestion].questionText}</h2></div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<li className='list-items' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</li>
						))}
					</div>
				</div>
			)}
		</div>
	);
}