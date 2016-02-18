import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import { loadStudents } from './actions'
import App from './containers/App'

let store = createStore(todoApp)
store.dispatch(loadStudents())

render(
<Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
)
