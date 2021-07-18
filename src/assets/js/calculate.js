import CONSTANT from './constant'

export default class {
    static salaryScore(salary, age) {
        if(age == CONSTANT.OPTIONS.AGE.ABOVE_THIRTY_NINE && salary <= CONSTANT.OPTIONS.SALARY.SEVEN_TO_EIGHT_MILLION) {
            return 0
        }
        if(age == CONSTANT.OPTIONS.AGE.THIRTY_FIVE_TO_THIRTY_NINE && salary <= CONSTANT.OPTIONS.SALARY.FIVE_TO_SIX_MILLION) {
            return 0
        }
        if(age == CONSTANT.OPTIONS.AGE.THIRTY_TO_THIRTY_FOUR && salary <= CONSTANT.OPTIONS.SALARY.FOUR_TO_FIVE_MILLION) {
            return 0
        }
        if(age == CONSTANT.OPTIONS.DEFAULT) {
            return 0
        }
        switch(salary) {
            case CONSTANT.OPTIONS.SALARY.ABOVE_TEN_MILLION:
                return 40
            case CONSTANT.OPTIONS.SALARY.NINE_TO_TEN_MILLION:
                return 35
            case CONSTANT.OPTIONS.SALARY.EIGHT_TO_NIGHT_MILLION:
                return 30
            case CONSTANT.OPTIONS.SALARY.SEVEN_TO_EIGHT_MILLION:
                return 25
            case CONSTANT.OPTIONS.SALARY.SIX_TO_SEVEN_MILLION:
                return 20
            case CONSTANT.OPTIONS.SALARY.FIVE_TO_SIX_MILLION:
                return 15
            case CONSTANT.OPTIONS.SALARY.FOUR_TO_FIVE_MILLION:
                return 10
            default:
                return 0
        }
    }

    static researchAchievementScore(researchAchievement) {
        if(researchAchievement.length > 0) {
            return 15
        }
        return 0
    }

    static specialPlusScore(specialPlus) {
        let total = 0
        let isOne = false
        specialPlus.sort().forEach(rule => {
            switch(rule) {
                case 1:
                    isOne = true
                    total += 10
                    break;
                case 2:
                    if(isOne) {
                        total += 10
                    }
                    break;
                case 3:
                    total += 10
                    break;
            }
        })
        return total
    }

    static japaneseLevelScore(japaneseLevelChecked, japanCollegeChecked) {
        let total = 0
        let isN1 = false
        japaneseLevelChecked.forEach(rule => {
            switch(rule) {
                case 1:
                    total = 15
                    isN1 = true
                    break;
                case 2:
                    if(isN1) {
                        total = 15
                        break;
                    }
                    if(japanCollegeChecked) {
                        total = 0
                        break;
                    }
                    total = 10
                    break;
            }
        })
        return total
    }

    static totalScore(scores) {
        let total = 0
        scores.forEach(score => total = score + total)
        return total
    }
}