import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Panel, CloseButton } from './MessagePanel.style'

class MessagePanel extends Component {
  state = {
    isOpen : this.props.isOpen
  }

  close = () => {
    this.setState({
      isOpen: false
    })
  }

  showPanel = () => {
    const { children, } = this.props

    return (
      <Panel>
        <CloseButton onClick={this.close} />
        {children}
      </Panel>
    )
  }

  hidePanel = () => null

  render() {
    const { isOpen, } = this.state

    return isOpen ? this.showPanel() : this.hidePanel()
  }
}

MessagePanel.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default MessagePanel
