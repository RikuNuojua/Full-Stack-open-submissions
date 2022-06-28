import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
    //data
    if((good + neutral + bad) == 0) 
    {
        return(
            <div>
              <h2>Feedback stats</h2>
              <p>No feedback given.</p>
            </div>
        )
    }
    return(
        <div>
          <h2>Feedback stats</h2>
          <table>
          <tbody>
            <StatisticsLine text={'Good'} value={good} />
            <StatisticsLine text={'Neutral'} value={neutral} />
            <StatisticsLine text={'Bad'} value={bad} />
            <StatisticsLine text={'All'} value={good + neutral + bad} />
            <StatisticsLine text={'Average'} value={(good - bad) / (good + neutral + bad)} />
            <StatisticsLine text={'Positive'} value={good / (good + neutral + bad)} />
          </tbody>
          </table>
        </div>
    )
}

const StatisticsLine = ({text, value}) => {
    //data
    return(
        <tr><td>{text + ':'}</td><td>{value}</td></tr>
    )
}

const Button = ({ text, value, setFunc }) => {
    //data
    return(
        <button onClick={() => setFunc(value + 1)}>{text}</button>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text={'Good!'} value={good} setFunc={setGood} />
      <Button text={'Neutral'} value={neutral} setFunc={setNeutral} />
      <Button text={'Bad!'} value={bad} setFunc={setBad} />
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
