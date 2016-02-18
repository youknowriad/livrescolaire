import React from 'react'
import { connect } from 'react-redux'
import { addNewStudent } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state) => {
    return {
        active: state.router.page == 'new'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(addNewStudent())
        }
    }
}

let AddStudentLink = ({ onClick, active }) => {
    return (
        <Link
            onClick={onClick}
            active={active}
        >
            Ajouter un élève
        </Link>
    )
}
AddStudentLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddStudentLink)

export default AddStudentLink
