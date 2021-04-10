export default class {
    static totalScore(rules) {
        let total = 0
        rules.forEach(rule => total = total + rule.modelKey)
        return total;
    }
}