import Die from "./components/Die"
import React from "react"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  const [dice,setDice] = React.useState(allNewDice())
  const [tenzies,setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld === true)
    
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue){
      setTenzies(true)
      
    }

  },[dice]) // Making useEffect have a dependency on the dice array so everytime is changes

  function allNewDice(){
    let numsArray = [];
    for (let i = 0;i< 10; i++){
      numsArray.push(generateNewDie())
    }
    return numsArray
  }
  function generateNewDie(){
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }
  
  let dieJSXEls = dice.map(die => <Die key={die.id} value={die.value} held={die.isHeld} hold={() => holdDice(die.id)}/>)
  function rollDice(){
    setDice(prevDice => {
      const newDice = prevDice.map((diceObject) => {
        return diceObject.isHeld ? {...diceObject} : generateNewDie()
      })
      return newDice
    })
  }
  function holdDice(id){
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
          {...die, isHeld: !die.isHeld} :
          die
    }))
  }
  function resetGame(){
    setDice(allNewDice())
    setTenzies(false)
  }


  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {dieJSXEls}
      </div>
      <button onClick={!tenzies ? rollDice: resetGame} className="roll-dice-btn">{tenzies?"New game":"Roll"}</button>
    </main>
  )
}

export default App
