export const actions = {
    SET_TRANSITION_LAYOUT(val) {
        console.log(123123)
        this.isTransitionLayout = val
    },
    SET_TRANSITION_PAGE(val) {
        console.log(1111)
        this.isTransitionPage = val
    }
}

export default {
    actions
}
