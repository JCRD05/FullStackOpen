import { useState } from 'react'

const Button = ({state, setState, name}) => {
  return <button onClick={() => setState(state + 1)}>{name}</button>
}

const StatisticLine = ({text, value}) => {
  return (
    <><td>{text}</td><td>{value}</td></>
  )
}

const Statistics = ({good, bad, neutral}) => {
  if ((good + neutral + bad) === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr><StatisticLine text={'good'} value={good}></StatisticLine></tr>
          <tr><StatisticLine text={'neutral'} value={neutral}></StatisticLine></tr>
          <tr><StatisticLine text={'bad'} value={bad}></StatisticLine></tr>
          <tr><StatisticLine text={'all'} value={good + neutral + bad}></StatisticLine></tr>
          <tr><StatisticLine text={'average'} value={(good*1 + neutral*0 + bad*-1)/(good + neutral + bad)}></StatisticLine></tr>
          <tr><StatisticLine text={'positive'} value={(good/(good + neutral + bad)*100) + '%'}></StatisticLine></tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button state={good} setState={setGood} name={'good'}></Button>
      <Button state={neutral} setState={setNeutral} name={'neutral'}></Button>
      <Button state={bad} setState={setBad} name={'bad'}></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App