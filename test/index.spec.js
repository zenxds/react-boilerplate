import { mount, shallow } from 'enzyme'

import Header from '../src/component/Header'

test('header', () => {
  const wrapper = mount(<Header />)

  expect(wrapper.html()).toBeTruthy()
})
