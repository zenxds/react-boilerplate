import { Component } from 'react'
import { inject, observer } from "mobx-react"
import { hot } from 'react-hot-loader'

import './less/styles.less'

import Header from 'component/Header'
import Content from 'component/Content'
import Footer from 'component/Footer'

@inject('appStore', 'actions')
@observer
class App extends Component {

  componentDidMount() {
    this.props.actions.getMsg()
  }

  render() {
    return (
      <div>
        <Header {...this.props} />
        <Content msg={this.props.appStore.msg} />
        <Footer />
      </div>
    )
  }
}

export default hot(module)(App)
