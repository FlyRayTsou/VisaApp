import { createStore } from 'vuex'
import visa from '../assets/js/constant.js'

const store = createStore({
    state () {
        return {
            scores: {
                salary: 0,
                degree: 0,
                workExperience: 0,
            },
            options: {
                'degree': visa.options.degree,
                'workExperience': visa.options.workExperience,
                'salary': visa.options.salary,
                'age': visa.options.age,
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
        },
        set_work_experience_score (state, score) {
            state.scores.workExperience = score
        },
    },
    actions: {
        setSalaryScore({ commit }, score) {
            commit('set_salary_score', score)
        },
        setDegreeScore({ commit }, score) {
            commit('set_degree_score', score)
        },
        setWorkExperienceScore({ commit }, score) {
            commit('set_work_experience_score', score)
        }
    }
})

export default store