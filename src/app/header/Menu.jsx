import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => (
    <ul className="right hide-on-med-and-down">
        <li>
            <Link to="/about">About</Link>
        </li>
    </ul>
)

Menu.propTypes = {}

export default Menu
