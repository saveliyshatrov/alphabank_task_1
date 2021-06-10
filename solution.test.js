const solution = require('./index');

test('{((a+b)*3)+a+c*[2-x]}*x is true', () => {
    expect(solution('{((a+b)*3)+a+c*[2-x]}*x')).toBe(true);
});
test('()[{a}+c] is true', () => {
    expect(solution('()[{a}+c]')).toBe(true);
});
test('(){}[][{a}+c] is true', () => {
    expect(solution('()[{a}+c]')).toBe(true);
});
test('(a+b{b)*c} is false', () => {
    expect(solution('(a+b{b)*c}')).toBe(false);
});
test('([a+b]*c} is false', () => {
    expect(solution('([a+b]*c}')).toBe(false);
});
test('[[a+b}*c] is false', () => {
    expect(solution('[[a+b}*c]')).toBe(false);
});
