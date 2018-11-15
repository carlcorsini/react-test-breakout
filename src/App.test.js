import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Header from './Header'

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('.App')).toHaveLength(1)
    expect(wrapper.find(Header)).toHaveLength(1)

    const header = wrapper.find(Header)

    expect(header.prop('href')).toBe('https://reactjs.org')
  })
})

describe('Header', () => {
  it('does the thing when we click the button', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper.find('.clicky')).toHaveLength(1)
    expect(wrapper.find('.paragraphy')).toHaveLength(0)

    let button = wrapper.find('.clicky')
    button.simulate('click', e => {
      e.preventDefault()
    })

    expect(wrapper.find('.paragraphy')).toHaveLength(1)
  })

  it('does the other thing when we click the other button', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper.find('.clicky-logo')).toHaveLength(1)

    expect(wrapper.find('.App-logo')).toHaveLength(0)

    let button = wrapper.find('.clicky-logo')

    button.simulate('click', e => {
      e.preventDefault()
    })

    expect(wrapper.find('.App-logo')).toHaveLength(1)
  })
})
