import './index.css'
import { useState } from 'react'


const Tile = ({i,value,enabled, onClick}) => {
  
  return (
    <div className="grid-item">
      <button enabled={enabled.toString()} onClick={onClick}>{value}</button>
    </div>
  )
}



const Grid = () => {
  const [board, setBoard] = useState([null,null,null,null,null,null,null,null,null])
  const [turn, setTurn] = useState('X')
  
  const handleClick = (i) => {
    if (board[i] === null) {
      const newBoard = [...board]
      newBoard[i] = turn
      setBoard(newBoard)
      setTurn(turn === 'X' ? 'O' : 'X')
    }
  }

  return (
    <div className="grid-container">
      <Tile i={0} value={board[0]} enabled={board[0] === null} onClick={() => handleClick(0)}/>
      <Tile i={1} value={board[1]} enabled={board[1] === null} onClick={() => handleClick(1)}/>
      <Tile i={2} value={board[2]} enabled={board[2] === null} onClick={() => handleClick(2)}/>
      <Tile i={3} value={board[3]} enabled={board[3] === null} onClick={() => handleClick(3)}/>
      <Tile i={4} value={board[4]} enabled={board[4] === null} onClick={() => handleClick(4)}/>
      <Tile i={5} value={board[5]} enabled={board[5] === null} onClick={() => handleClick(5)}/>
      <Tile i={6} value={board[6]} enabled={board[6] === null} onClick={() => handleClick(6)}/>
      <Tile i={7} value={board[7]} enabled={board[7] === null} onClick={() => handleClick(7)}/>
      <Tile i={8} value={board[8]} enabled={board[8] === null} onClick={() => handleClick(8)}/>
    </div>
  )
}


function App() {

  return (
    <>
      <Grid/>
    </>
  )
}

export default App
