import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
}

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad;
  if (sum === 0) {
    return "No feedback given";
  } else {
    return (
      <table>
        <tbody>
          <tr><td>Good</td><td>{good}</td></tr>
          <tr><td>Neutral</td><td>{neutral}</td></tr>
          <tr><td>Bad</td><td>{bad}</td></tr>
          <tr><td>All</td><td>{sum}</td></tr>
          <tr><td>Average</td><td>{(good - bad)/sum}</td></tr>
          <tr><td>Positive</td><td>{(good * 100)/sum}%</td></tr>
        </tbody>
      </table>
    );
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
);
