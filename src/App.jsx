import Die from "./components/Die"
import React from "react"
import { nanoid } from 'nanoid'
function App() {
  const [dice,setDice] = React.useState(allNewDice())

  function allNewDice(){
    let numsArray = [];
    for (let i = 0;i< 10; i++){
      numsArray.push({
      value: Math.floor((Math.random() * 6) + 1),
      isHeld: true,
      id: nanoid()
      })
    }
    return numsArray
  }
  
  let dieJSXEls = dice.map(die => <Die key={die.id} value={die.value}/>)
  function rollDice(){
    setDice(prevDice => {
      const newDice = prevDice.map((diceObject) => {
        return diceObject.isHeld ? {...diceObject} : {...diceObject, value:Math.floor((Math.random() * 6) + 1)}  
      })
      return newDice
    })
  }
  return (
    <main>
      <div className="dice-container">
        {dieJSXEls}
      </div>
      <button onClick={rollDice} className="roll-dice-btn">Roll</button>
    </main>
  )
}

export default App
