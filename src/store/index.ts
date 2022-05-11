import { createStore } from 'vuex'

export default createStore({
    state: {
        authData: {},
        isLogged: false
    },
    getters: {
        isLogged(state: any) {
            return state.isLogged
        }
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})
