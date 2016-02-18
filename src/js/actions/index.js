import { SAVE_STUDENT, REMOVE_STUDENT, LOAD_STUDENTS, GO_TO_PAGE } from './types'
import students from '../../fixtures.json'

export const saveStudent = (student) => {
    return {
        type: SAVE_STUDENT,
        payload: student
    }
}

export const removeStudent = id => {
    return {
        type: REMOVE_STUDENT,
        payload: id
    }
}

export const loadStudents = () => {
    return {
        type: LOAD_STUDENTS,
        payload: students
    }
}

export const addNewStudent = () => {
    return {
        type: GO_TO_PAGE,
        payload: { page: 'new', params: {} }
    }
}

export const editStudent = id => {
    return {
        type: GO_TO_PAGE,
        payload: { page: 'edit', params: { student: id } }
    }
}

export const showStudents = () => {
    return {
        type: GO_TO_PAGE,
        payload: { page: 'list', params: {}}
    }
}
