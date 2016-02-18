import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => {

    return (
        <a
            className={active ? 'active': ''}
            href="#"
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
        >
            {children}
        </a>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link
