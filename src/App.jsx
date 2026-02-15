import './index.css'
import { useState } from 'react'


const Tile = ({value,enabled, onClick}) => {
  
  return (
    <div className="grid-item">
      <button disabled={!enabled} onClick={onClick}>{value === null ? '' : value}</button>
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
  const isDraw = board.every(cell => cell !== null) && winner === null
  const status = winner ? `Winner: ${winner}` : isDraw ? 'Draw' : `Next player: ${turn}`

  const handleClick = (i) => {
    if (board[i] == null && winner == null && !isDraw){
      const newBoard = [...board]
      newBoard[i] = turn
      setBoard(newBoard)
      setTurn(prev => prev === 'X' ? 'O' : 'X')
    }
  }

  const reset = () => {
    setBoard([null,null,null,null,null,null,null,null,null])
    setTurn('X')
  }

  return (
    <div className="grid-container">
      {
        board.map((cellValue, i) => (
          <Tile
            key={i}
            value={cellValue}
            enabled={cellValue === null && !winner && !isDraw}
            onClick={() => handleClick(i)}
          />
        ))
      }
      <p> {status} </p>
      <button onClick={() => reset()}>reset</button>
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
