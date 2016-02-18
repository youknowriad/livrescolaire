import React from 'react'
import AddStudentLink from '../containers/AddStudentLink'
import ListStudentLink from '../containers/ListStudentLink'

const Menu = () => {
    return (
        <nav id="main-menu" className="pad-left">
            <ul>
                <li>
                    <AddStudentLink />
                </li>
                <li>
                    <ListStudentLink />
                </li>
            </ul>
        </nav>
    )
}

export default Menu
