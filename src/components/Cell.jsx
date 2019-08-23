import React, { Component } from 'react'

export class Cell extends Component {
  render() {
    return (
      <td
        onClick={this.props.leftClick}
        onContextMenu={e => {
          this.props.rightClick()
          e.preventDefault()
        }}
      >
        <p>{this.props.show}</p>
      </td>
    )
  }
}

export default Cell
