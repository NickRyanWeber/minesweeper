import React, { Component } from 'react'
import Board from './components/Board.jsx'

class App extends Component {
  render() {
    return (
      <>
        <h1>Minesweeper</h1>
        <Board />
      </>
    )
  }
}

export default App
