const stack = require('../src/stack');

test('double pop from single-element stack returns last value twice (FAIL)', () => {
    stack.push('only');
    stack.pop(); 
    const result = stack.pop();
    expect(result).toBeUndefined();
});