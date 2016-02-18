import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { saveStudent, showStudents } from '../actions'
import { connect } from 'react-redux'
import StudentForm from '../components/StudentForm'

const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/

const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Requis'
    }
    if (!values.lastName) {
        errors.lastName = 'Requis'
    }
    if (!values.avatar) {
        errors.avatar = 'Requis'
    }

    if (values.birthday && !dateRegex.test(values.birthday)) {
        errors.birthday = 'Format invalid'
    }

    return errors
}

const mapDispatchToProps = dispatch => ({
    onSubmit: (values) => {
        dispatch(saveStudent(values))
        dispatch(showStudents())
    }
})

const mapStateToProps = (state, ownProps) => ({
    initialValues: state.students.list
        .find(student => ownProps.student ? student.id === ownProps.student : false)
})

let FormPage = reduxForm({
        form: 'studentForm',
        fields: ['id', 'firstName', 'lastName', 'avatar', 'birthday'],
        validate
    }, mapStateToProps, { cancel: showStudents }
)(StudentForm)

FormPage = connect(
    (state) => ({}),
    mapDispatchToProps
)(FormPage)

export default FormPage
