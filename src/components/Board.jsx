import React, { Component } from 'react'
import axios from 'axios'
import Cell from './Cell.jsx'

class Board extends Component {
  state = {
    board: [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ],
    gameID: 0
  }

  leftClickAPI = async (x, y) => {
    const resp = await axios.post(
      `https://minesweeper-api.herokuapp.com/games/${this.state.gameID}/check`,
      {
        row: x,
        col: y
      }
    )
    console.log(x, y)
    console.log(resp)
    const _board = resp.data.board
    this.setState({ board: _board })
  }

  rightClickAPI = async (x, y) => {
    const resp = await axios.post(
      `https://minesweeper-api.herokuapp.com/games/${this.state.gameID}/flag`,
      {
        row: x,
        col: y
      }
    )
    const _board = resp.data.board
    this.setState({ board: _board })
  }

  newGame = async () => {
    const resp = await axios.post(
      `https://minesweeper-api.herokuapp.com/games`,
      {
        difficulty: 0
      }
    )
    this.setState({
      gameID: resp.data.id,
      board: resp.data.board
    })
    console.log(this.state)
  }

  async componentDidMount() {
    this.newGame()
  }

  render() {
    return (
      <>
        <button onClick={this.newGame}>Reset</button>
        <table>
          <tbody>
            {this.state.board.map((col, i) => {
              return (
                <tr key={i}>
                  {col.map((row, j) => {
                    return (
                      <Cell
                        key={j}
                        show={this.state.board[i][j]}
                        leftClick={() => {
                          this.leftClickAPI(i, j)
                        }}
                        rightClick={() => {
                          this.rightClickAPI(i, j)
                        }}
                      />
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  }
}

export default Board
