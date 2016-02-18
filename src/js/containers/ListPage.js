import React from 'react'
import { connect } from 'react-redux'
import { loadStudents, editStudent, removeStudent } from '../actions'
import StudentList from '../components/StudentList'

const mapStateToProps = state => {
    return {
        students: state.students.list
    }
}

const mapDispatchToProps = dispatch => ({
    onStudentClick: id => dispatch(editStudent(id)),
    onStudentRemoveClick: id => dispatch(removeStudent(id))
})

const ListPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentList)

export default ListPage
