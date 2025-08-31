import { useState } from 'react'
import type { VoteType, Votes  } from '../../types/votes';
import './App.css'
import css  from "./App.module.css";
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import { VoteStatus } from '../VoteStatus/VoteStatus';
import { Notification }  from '../Notification/Notification';

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

const totalVotes = votes.good + votes.neutral + votes.bad;
const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions 
      onVote={handleVote} 
      onReset={resetVotes} 
      canReset={hasAnyVotes}
      />
{totalVotes ? (
<VoteStatus 
      votes={votes} 
      totalVotes={totalVotes} 
      positiveRate={positiveRate}
      />
) : (
  <Notification/>
)}
    </div>
  )
}

export default App
