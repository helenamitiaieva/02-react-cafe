import { useState } from 'react'
import type { VoteType, Votes  } from './types/votes';
import './App.css'
import css  from "./App.module.css";
import CafeInfo from './components/CafeInfo/CafeInfo';
import VoteOptions from './components/VoteOptions/VoteOptions';

const initialVotes: Votes = {good: 0, neutral: 0, bad: 0};

function App() {
 const [votes, setVotes] = useState<Votes>(initialVotes);
const hasAnyVotes = votes.good > 0 || votes.neutral > 0 || votes.bad > 0;
const handleVote = (type: VoteType) => {
  setVotes(prevVotes => ({
    ...prevVotes,
  [type]: prevVotes[type] + 1,
  }));
};

const resetVotes = () =>  
  setVotes(initialVotes);

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions 
      onVote={handleVote} 
      onReset={resetVotes} 
      canReset={hasAnyVotes}
      />
    </div>
  )
}

export default App
