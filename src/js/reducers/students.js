import { SAVE_STUDENT, REMOVE_STUDENT, LOAD_STUDENTS } from '../actions/types'

const students = (state = { list: [], nextId: 1 }, action) => {
    switch (action.type) {
        case SAVE_STUDENT:
            if (!action.payload.id) {
                return {
                    list: [
                        ...state.list,
                        { ...action.payload, id: state.nextId }
                    ],
                    nextId: state.nextId + 1
                }
            } else {
                return {
                    ...state,
                    list: state.list.map(student => {
                        if (student.id === action.payload.id) {
                            return { ...student, ...action.payload }
                        }
                        return student
                    })
                }
            }
        case REMOVE_STUDENT:
            return {
                ...state,
                list: state.list.filter(student => student.id !== action.payload)
            }
        case LOAD_STUDENTS:
            return {
                list: action.payload,
                nextId: Math.max.apply(null, action.payload.map(student => student.id)) + 1
            }
        default:
            return state
    }
}

export default students
