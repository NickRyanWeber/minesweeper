import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

export class Cell extends Component {
  state = {
    display: this.props.show,
    bomb: <FontAwesomeIcon icon={faBomb} />,
    flag: <FontAwesomeIcon icon={faFlag} />
  }

  setCellDisplay() {
    let _display = this.props.show
    if (this.props.show === ' ') {
      _display = 'space'
    } else if (this.props.show === '_') {
      _display = 'empty'
    }
    this.setState({ display: _display })
  }

  componentDidMount() {
    this.setCellDisplay()
  }

  render() {
    return (
      <td
        onClick={this.props.leftClick}
        onContextMenu={e => {
          this.props.rightClick()
          e.preventDefault()
        }}
      >
        <p>{this.state.display}</p>
      </td>
    )
  }
}

export default Cell
