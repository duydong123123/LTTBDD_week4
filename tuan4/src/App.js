import {useState} from 'react'

function App() {
  const [counter,setCounter] = useState(0)
    const handleIncrement = () => setCounter(counter + 1)
  return (
    <div className="App" style={{padding:20}}>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>click</button>
    </div>
  );
}

export default App;
 