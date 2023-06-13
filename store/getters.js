import layout from "#app/components/layout";

export const getters = {
    IS_TRANSITION_PAGE() {
        return this.isTransitionPage
    },
    IS_TRANSITION_LAYOUT() {
        return this.isTransitionLayout
    },
    GET_LAYOUT_NAME() {
        return this.layoutName
    }
}
export default {
    getters
}
