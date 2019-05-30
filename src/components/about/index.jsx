import * as React from 'react'
import * as PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addPageView } from './action'

class About extends React.Component {
  componentDidMount () {
    this.props.addPageView()
  }

  render () {
    if (!this.props.pageView) {
      return null
    }

    return (
      <>
        <p>Now you can use these prepared dependencies at your code!</p>
        <p>
          <code>TypeScript</code>
          <code>React</code>
          <code>Redux</code>
          <code>Redux-Thunk</code>
          <code>Router</code>
        </p>
        <i>This page viewed {this.props.pageView} time{this.props.pageView > 1 ? 's' : ''}</i>
        <button onClick={this.props.history.goBack}>Back</button>
      </>
    )
  }
}

About.propTypes = {
  history: PropTypes.object,
  pageView: PropTypes.number,
  addPageView: PropTypes.func.isRequired,
}

function mapStateToProps (state) {
  return {
    pageView: state.about.pageView,
  }
}

export default withRouter(connect(
  mapStateToProps,
  {
    addPageView,
  },
)(About))
