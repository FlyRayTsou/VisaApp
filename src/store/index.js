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
        set_score (state, item) {
            state.scores[item.key] = item.score
        }
    },
    actions: {
        setScore({ commit }, item) {
            commit('set_score', item)
        }
    }
})

export default store