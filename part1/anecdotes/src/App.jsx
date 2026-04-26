import { useState } from 'react'

const Anecdote = ({text, anecdotes, votes, selected}) => {
  return (
    <div>
      <h1>{text}</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
    </div>
  )
}

const Button = ({handler, name}) => {
  return <button onClick={handler}>{name}</button>
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
   
  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState(Array(8).fill(0))

  const handleSelected = () => {
    let anecdote;
    do {
      anecdote = Math.floor(Math.random() * anecdotes.length)
    } while(anecdote === selected)

    setSelected(anecdote);
  }

  const handleVotes = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  let mostVoted = Math.max(...votes);
  let mostVotedIndex = votes.indexOf(mostVoted);

  return (
    <div>
      <Anecdote text={'Anecdote of the day'} anecdotes={anecdotes} votes={votes} selected={selected}></Anecdote>
      <div>
        <Button handler={handleVotes} name={'vote'}></Button>
        <Button handler={handleSelected} name={'next'}></Button>
      </div>
      <Anecdote text={'Anecdote with most votes'} anecdotes={anecdotes} votes={votes} selected={mostVotedIndex}></Anecdote>
    </div>
  )
}

export default App