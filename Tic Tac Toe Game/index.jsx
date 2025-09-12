const { useState } = React;

export function Board() {

  const [cross, setCross] = useState('');
  const [chance, setChance] = useState('');

  const gameLogic = () => {
      if(chance === '') {
        return setChance('X')
      }
      else if(chance === 'X') {
        return setChance('O')
      }
      else return setChance('X')
  }

  const resetGame = () => {
    setChance('');
    
  }

  return (
    <div className='container'>
    <div className='board'>
    <button className='square square1' onClick={()=> gameLogic()}>{chance}</button>
    <button className='square square2' onClick={()=> gameLogic()}>{chance}</button>
    <button className='square square3' onClick={()=> gameLogic()}>{chance}</button>
    <button className='square square4' onClick={()=> gameLogic()}>{chance}</button>
    <button className='square square5' onClick={()=> gameLogic()}>{chance}</button>
    <button className='square square6' onClick={()=> gameLogic()}>{chance}</button>
    <button className='square square7' onClick={()=> gameLogic()}>{chance}</button>
    <button className='square square8' onClick={()=> gameLogic()}>{chance}</button>
    <button className='square square9' onClick={()=> gameLogic()}>{chance}</button>
     </div>
     <div className='btn-container'>
    <button id='reset' onClick={()=> {resetGame}}>Reset Game</button>
    </div>
    </div>
  )

}