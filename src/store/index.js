import { createStore } from 'vuex'
import visa from '../assets/js/constant.js'

const store = createStore({
    state () {
        return {
            scores: {
                salary: 0,
                degree: 0,
            },
            options: {
                'degree': visa.options.degree,
                'workExperience': visa.options.workExperience,
                'salary': visa.options.salary,
                'age': visa.options.degree,
                'researchAchievement': visa.options.researchAchievement,
                'qualifications': visa.options.qualifications,
                'specialPlus': visa.options.specialPlus,
                'specialPlusResearch': visa.options.specialPlusResearch,
            }
        }
    },
    mutations: {
        set_salary_score (state, score) {
            state.scores.salary = score
        },
        set_degree_score (state, score) {
            state.scores.degree = score
        }
    },
    actions: {
        setSalaryScore({ commit }, score) {
            commit('set_salary_score', score)
        },
        setDegreeScore({ commit }, score) {
            commit('set_degree_score', score)
        }
    }
})

export default store