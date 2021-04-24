import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            scores: {
                'salary': 0
            }
        }
    },
    mutations: {
        set_salary_score (state, score) {
            state.scores.salary = score
        }
    },
    actions: {
        setSalaryScore({ commit }, score) {
            commit('set_salary_score', score)
        }
    }
})

export default store