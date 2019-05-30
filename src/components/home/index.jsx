import * as React from 'react'
import * as PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class Home extends React.Component {
  render () {
    return (
      <>
        <p>An UI application generator for React.js with more default modules</p>
        <p>as known as Redux, Redux-Thunk middleware, Router, Immer and so on.</p>
        <p>To get started, modify <code>src/App.jsx</code> and save.</p>
      </>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object,
}

export default withRouter(Home)
