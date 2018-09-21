import { observable } from "mobx"

class AppStore {
  @observable msg = ''
}

export default new AppStore()
