import React from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = state => {
    return {
        router: state.router
    }
}

const App = connect(mapStateToProps)(Home)

export default App
