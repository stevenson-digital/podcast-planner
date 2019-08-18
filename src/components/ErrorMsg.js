import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ErrorMsg extends Component {
  render() {
    return (
      <div className="c-ErrorMsg">
        <p>
          {this.props.msg}
        </p>
      </div>
    )
  }
}

ErrorMsg.propTypes = {
  msg: PropTypes.string.isRequired
}

export default ErrorMsg;
