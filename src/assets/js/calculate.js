export default class {
    static salaryScore(salary, age) {
        if(age == 0 && salary <=4) {
            return 0
        }
        if(age == 5 && salary <=2) {
            return 0
        }
        if(age == 10 && salary <=1) {
            return 0
        }
        if(age == null) {
            return 0
        }
        switch(salary) {
            case 7:
                return 40
            case 6:
                return 35
            case 5:
                return 30
            case 4:
                return 25
            case 3:
                return 20
            case 2:
                return 15
            case 1:
                return 10
            default:
                return 0
        }
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