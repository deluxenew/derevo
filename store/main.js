import { getters } from "./getters"
import { actions } from "./actions"
export const useMain = defineStore('main', {
    state: () => {
        return {
            isTransitionPage: false
        }
    },
    actions,
    getters
})
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMain, import.meta.hot))
}
