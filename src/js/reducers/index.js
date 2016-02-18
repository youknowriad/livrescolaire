import { combineReducers } from 'redux'
import students from './students'
import router from './router'
import {reducer as form} from 'redux-form'

const studentsApp = combineReducers({
    students,
    router,
    form
})

export default studentsApp
