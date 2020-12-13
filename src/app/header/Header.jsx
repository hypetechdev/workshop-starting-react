import React from 'react'
import { Link } from 'react-router-dom'

import Menu from './Menu.jsx'

const Header = () => (
    <header>
        <nav>
            <div className="nav-wrapper container">
                <Link to="/">Posts App</Link>
                <Menu />
            </div>
        </nav>
    </header>
)

export default Header
