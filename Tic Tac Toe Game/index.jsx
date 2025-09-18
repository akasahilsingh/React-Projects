const { useState, useEffect } = React;

export function Board() {

  const [board, setBoard] = useState(['','','','','','','','','']);
  const [chance, setChance] = useState('X');
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  
  const winningPattern = () => {
    const winningArray = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ]
    for(let i of winningArray) {
       const [a,b,c] = i;
  if(board[a] === board[b] && board[b]== board[c] && board[a]!='') {
     return board[a];
     
  } 
     
  }
     return null
  }

const winner = winningPattern();

useEffect(()=> {
  if(winner) {
    setIsDisabled(true);
  } else if(board.every(cell => cell!=='')) {
   setIsDraw(true);
   setIsDisabled(true);
  }
},[winner, board])


  
  const gameLogic = (index) => {
      if(board[index] === '') {
        const newBoard = [...board]
        newBoard[index] = chance;
        setBoard(newBoard);
        setChance(chance === 'X' ? 'O': 'X')
      }
      
  }

  const resetGame = () => {
     
    setBoard(['','','','','','','','','']);
    setChance('X');
    setIsDisabled(false);
    setIsDraw(false);
    
  }

  return (
    <div className='container'>
    <h1 className="heading">Tic-Tac-Toe</h1>
     <p className="info">
     {winner ? `Winner: ${winner}` 
     : isDraw
     ? "It's a Draw"
     : `Next Player: ${chance}`}
     </p>
    <div className='board'>
    {board.map((value, index)=> (
    <button className='square' key={index} disabled={isDisabled} onClick={()=> gameLogic(index)
    }>{value}</button>
    ))}
     </div>
     <div className='btn-container'>
    <button id='reset' onClick={()=> {resetGame()}}>Reset Game</button>
    </div>
    </div>
  )

}