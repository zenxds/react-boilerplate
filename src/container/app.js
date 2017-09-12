import { Component } from 'react'
import { observer } from "mobx-react"

import 'normalize.css/normalize.css'
import './index.less'

import store from './store'
import Header from './component/header'
import Content from './component/content'
import Footer from './component/footer'

@observer
class App extends Component {
  render() {

    return (
      <div>
        <Header />
        <Content msg={store.msg} />
        <Footer />
      </div>
    )
  }
}


export default App
