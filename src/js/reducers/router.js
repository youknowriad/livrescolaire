import { GO_TO_PAGE } from '../actions/types'

const router = (state = { page: 'list', params: {} }, action) => {
    switch (action.type) {
        case GO_TO_PAGE:
            return { ...action.payload }
        default:
            return state
    }
}

export default router
