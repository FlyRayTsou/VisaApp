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
}