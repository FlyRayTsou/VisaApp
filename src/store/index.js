import { createStore } from 'vuex'
import visa from '../assets/js/constant.js'

const store = createStore({
    state () {
        return {
            scores: {
                'salary': 0
            },
            options: {
                'age': visa.options.degree,
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