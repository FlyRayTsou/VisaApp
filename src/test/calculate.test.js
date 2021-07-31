import calculate from "../assets/js/calculate";

test('have jica score', () => {
    expect(calculate.jicaScore(true)).toBe(5);
});

test('have not jica score', () => {
    expect(calculate.jicaScore(false)).toBe(0);
});