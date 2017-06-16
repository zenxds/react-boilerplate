import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../action'

import Header from './component/header'
import Content from './component/content'
import Footer from './component/footer'

import './index.less'

class App extends Component {
  render() {
    const props = this.props

    return (
      <div>
        <Header {...props} />
        <Content {...props} />
        <Footer {...props} />
      </div>
    )
  }

  componentDidMount() {
    this.props.actions.getData().catch((e) => {
      console.log(e)
    })
  }
}

const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)