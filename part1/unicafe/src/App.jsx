import {useState} from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Feedback = ({state, setState}) => {

  const handleGoodClick = () => {
    setState({
      ...state,
      good: state.good+1
    })
  }

  const handleNeutralClick = () => {
    setState({
      ...state,
      neutral: state.neutral+1
    })
  }

  const handleBadClick = () => {
    setState({
      ...state,
      bad: state.bad+1
    })
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <p>{text} {value}</p>
  )
}

const Statistics = ({state}) => {
  
  if (!state.good && !state.neutral && !state.bad) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  const all = state.good+state.neutral+state.bad
  const avg = (state.good + -1*state.bad) / all
  const positive = state.good / all * 100

  return (
    <div>
      <h1>statistics</h1>
      {/*
      <StatisticLine text='good' value={state.good} />
      <StatisticLine text='neutral' value={state.neutral} />
      <StatisticLine text='bad' value={state.bad} />
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={avg ? avg : 0} />
      <StatisticLine text='positive' value={positive + ' %'} />
      */}
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{state.good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{state.neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{state.bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{avg ? avg : 0}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positive.toFixed(1)} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  return (
    <div>
      <Feedback state={state} setState={setState} />
      <Statistics state={state} />
    </div>
  )
}

export default App
