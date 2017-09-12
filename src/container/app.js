import { Component } from 'react'
import { observer } from "mobx-react"
import { observable, action } from "mobx"

import 'normalize.css/normalize.css'
import './index.less'

import Header from './component/header'
import Content from './component/content'
import Footer from './component/footer'

import * as actions from '../action'

@observer
class App extends Component {
  @observable msg = ''

  componentDidMount() {
    actions.getHelloMsg().then(data => {
      this.setMsg(data.helloMsg)
    })
  }

  @action
  setMsg(msg) {
    this.msg = msg
  }

  render() {
    return (
      <div>
        <Header />
        <Content msg={this.msg} />
        <Footer />
      </div>
    )
  }
}


export default App
