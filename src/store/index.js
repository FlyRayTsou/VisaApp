import { createStore } from 'vuex'
import visa from '../assets/js/setting.js'

const store = createStore({
    state () {
        return {
            scores: {
                degree: null,
                workExperience: null,
                salary: null,
                age: null,
                researchAchievement: null,
                qualifications: null,
                specialPlus: null,
                specialPlusResearch: null,
                foreignQualification: null,
                japanCollege: null,
                japaneseLevel: null,
                topCollege: null,
                jica: null,
            },
            selectedOption: {
                salary: null
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
    getters: {
        totalScores: state => {
          let total = 0
          Object.values(state.scores).forEach(score => total += score)
          return total
        }
    },
    mutations: {
        set_score (state, item) {
            state.scores[item.key] = item.score
        },
        set_selected_option(state, item) {
            state.selectedOption[item.key] = item.value
        }
    },
    actions: {
        setScore({ commit }, item) {
            commit('set_score', item)
        },
        setSelectedOption({ commit }, item) {
            commit('set_selected_option', item)
        }
    }
})

export default store