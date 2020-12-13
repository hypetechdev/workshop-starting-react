import React from 'react'
import PropTypes from 'prop-types'

import Main from './Main.jsx'
import Header from './header/Header.jsx'
import Footer from './footer/Footer.jsx'

const App = (props) => (
    <>
        <Header />
        <Main />
        <Footer />
    </>
)

App.propTypes = {}

export default App
