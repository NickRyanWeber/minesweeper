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
  // if (this.props.show === '-') {
  //   this.props.
  // }

  componentDidMount() {
    this.setState({
      display: this.props.show
    })
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
        <p>{this.props.show}</p>
      </td>
    )
  }
}

export default Cell
