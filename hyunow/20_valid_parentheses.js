/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const n = s.length;
    for (let i = 0; i < n; i++) {
        if (!stack) {
            stack.push(s[i])
        } else {
            let temp = stack.pop()
            if( (temp === '(' && s[i] === ')') ||
                (temp === '{' && s[i] === '}') ||
                (temp === '[' && s[i] === ']') ) {
                    continue
            } else {
                stack.push(temp)
                stack.push(s[i])
            }
        }
    }
    console.log(stack)
    if(stack.length === 1) {
        return true
    } else {
        return false
    }
};