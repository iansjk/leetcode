/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/
const PARENS = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
])
const OPEN = new Set(PARENS.values());

export default function isValid(s: string): boolean {
    const stack = [];
    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (top !== PARENS.get(char)) {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
}
