import { useState } from 'react'

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>
}

const Anecdote = ({anecdotes, votes, setVotes, selected, setSelected}) => {

  const onNextClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const onVoteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={onVoteClick} text='vote' />
      <Button onClick={onNextClick} text='next anecdote' />
    </div>
  )
}

const Top = ({anecdotes, votes}) => {
  const findMax = () => {
    let maxIndex = 0
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > votes[maxIndex]) {
        maxIndex = i
      }
    }

    return maxIndex
  }

  const maxIndex = findMax()
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {votes[maxIndex]} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(new Int32Array(anecdotes.length))
  const [selected, setSelected] = useState(0)

  return (
    <div>
      <Anecdote anecdotes={anecdotes} votes={votes} setVotes={setVotes} selected={selected} setSelected={setSelected} />
      <Top anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App