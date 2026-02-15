import './index.css'
import { useState } from 'react'


const Tile = ({value,enabled, onClick}) => {
  
  return (
    <div className="grid-item">
      <button disabled={!enabled} onClick={onClick}>{value === null ? ' - ' : value}</button>
    </div>
  )
}

const checkWinner = (board) => {
  const winners = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  for (const [a,b,c] of winners){
    if(board[a]  && board[a] === board[b] && board[a] === board[c]){
      return board[a]
    }
  }
  return null
}


const Grid = () => {
  const [board, setBoard] = useState([null,null,null,null,null,null,null,null,null])
  const [turn, setTurn] = useState('X')
  const winner = checkWinner(board)

  const handleClick = (i) => {
    if (board[i] == null && winner == null){
      const newBoard = [...board]
      newBoard[i] = turn
      setBoard(newBoard)
      setTurn(prev => prev === 'X' ? 'O' : 'X')
    }
  }

  return (
    <div className="grid-container">
      <Tile value={board[0]} enabled={board[0] === null} onClick={() => handleClick(0)}/>
      <Tile value={board[1]} enabled={board[1] === null} onClick={() => handleClick(1)}/>
      <Tile value={board[2]} enabled={board[2] === null} onClick={() => handleClick(2)}/>
      <Tile value={board[3]} enabled={board[3] === null} onClick={() => handleClick(3)}/>
      <Tile value={board[4]} enabled={board[4] === null} onClick={() => handleClick(4)}/>
      <Tile value={board[5]} enabled={board[5] === null} onClick={() => handleClick(5)}/>
      <Tile value={board[6]} enabled={board[6] === null} onClick={() => handleClick(6)}/>
      <Tile value={board[7]} enabled={board[7] === null} onClick={() => handleClick(7)}/>
      <Tile value={board[8]} enabled={board[8] === null} onClick={() => handleClick(8)}/>
      <p> {winner} </p>
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
