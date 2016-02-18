import React from 'react'
import { connect } from 'react-redux'
import { showStudents } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state) => {
    return {
        active:  state.router.page === 'list'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(showStudents())
        }
    }
}

let ListStudentLink = ({ onClick, active }) => {
    return (
        <Link
            onClick={onClick}
            active={active}
        >
            Élèves
        </Link>
    )
}
ListStudentLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListStudentLink)

export default ListStudentLink
