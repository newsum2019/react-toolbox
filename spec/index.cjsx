"use strict"

# -- Components
Aside         = require './components/aside'
Autocomplete  = require './components/autocomplete'
Button        = require './components/button'
Dialog        = require './components/dialog'
Form          = require './components/form'

# React           = require('react/addons')
# TestUtils       = React.addons.TestUtils
# shallowRenderer = TestUtils.createRenderer()

# shallowRenderer.render(React.createElement(MyComponent, { className: 'MyComponent' }, 'some child text'))
#
# component = shallowRenderer.getRenderOutput();


Test = React.createClass

  # -- Render
  render: ->
    <test>
      <h1>React-Kit <small>New way for create</small></h1>

      <Aside />
      <Autocomplete />
      <Button />
      <Dialog />
      <Form />
    </test>

React.render <Test/>, document.body
