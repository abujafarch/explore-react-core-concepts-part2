import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import User from './User'
function App() {
  function handleClick(){
    alert ('button clicked')
  }
  const handleClick2 = () =>{
    alert ('button 2 Clicked')
  }
  const addFive = (num)=>{
    alert (num + 5)
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={()=>{alert ('third clicked')}}>Clicked Third</button>
      <button onClick={()=>{addFive(23)}}>Vejailla</button>
    </>
  )
}

export default App
