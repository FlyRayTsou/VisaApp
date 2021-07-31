import CONSTANT from './constant'

export default class {
    static salaryScore(salary, age) {
        if(age == CONSTANT.OPTIONS.AGE.ABOVE_THIRTY_NINE && salary <= CONSTANT.OPTIONS.SALARY.SEVEN_TO_EIGHT_MILLION) {
            return CONSTANT.SCORES.ZERO
        }
        if(age == CONSTANT.OPTIONS.AGE.THIRTY_FIVE_TO_THIRTY_NINE && salary <= CONSTANT.OPTIONS.SALARY.FIVE_TO_SIX_MILLION) {
            return CONSTANT.SCORES.ZERO
        }
        if(age == CONSTANT.OPTIONS.AGE.THIRTY_TO_THIRTY_FOUR && salary <= CONSTANT.OPTIONS.SALARY.FOUR_TO_FIVE_MILLION) {
            return CONSTANT.SCORES.ZERO
        }
        if(age == CONSTANT.OPTIONS.DEFAULT) {
            return CONSTANT.SCORES.ZERO
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
                return CONSTANT.SCORES.ZERO
        }
    }

    static researchAchievementScore(researchAchievement) {
        if(researchAchievement.length > 0) {
            return 15
        }
        return CONSTANT.SCORES.ZERO
    }

    static specialPlusScore(specialPlus) {
        let total = CONSTANT.SCORES.ZERO
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

    static specialPlusResearchScore(specialPlusResearch) {
        if(specialPlusResearch) {
            return 5
        }
        return CONSTANT.SCORES.ZERO
    }

    static foreignQualificationScore(foreignQualification) {
        if(foreignQualification) {
            return 10
        }
        return CONSTANT.SCORES.ZERO
    }

    static japanCollegeScore(japanCollege) {
        if(japanCollege) {
            return 10
        }
        return CONSTANT.SCORES.ZERO
    }

    static topCollegeScore(topCollege) {
        if(topCollege.length > 0) {
            return 10
        }
        return CONSTANT.SCORES.ZERO
    }

    static jicaScore(jica) {
        if(jica) {
            return 5
        }
        return CONSTANT.SCORES.ZERO
    }

    static japaneseLevelScore(japaneseLevelChecked, japanCollegeChecked) {
        let total = CONSTANT.SCORES.ZERO
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
        let total = CONSTANT.SCORES.ZERO
        scores.forEach(score => total = score + total)
        return total
    }
}