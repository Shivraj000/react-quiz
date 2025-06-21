import { useState } from 'react';
import './App.css';
import QuizContainer from './components/QuizContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>TEST YOUR KNOWLEDGE</h1>
      <QuizContainer />
    </div>
  )
}

export default App
