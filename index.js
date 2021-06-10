function solution(expression) {
    let openStack = [] // Тут будут все открывающие скобки
    let closeStack = [] // Тут будут все закрывающие скобки
    for (let i = 0; i < expression.length; i++) {
        if(expression[i] === '(' || expression[i] === '{' || expression[i] === '['){
            openStack.push(expression[i])
        }
        if(expression[i] === ')' || expression[i] === '}' || expression[i] === ']'){
            closeStack.push(expression[i])
        }
        if(openStack[openStack.length - 1] === '(' && closeStack[closeStack.length - 1] === ')' ||
           openStack[openStack.length - 1] === '{' && closeStack[closeStack.length - 1] === '}' ||
           openStack[openStack.length - 1] === '[' && closeStack[closeStack.length - 1] === ']'){
            openStack.pop()
            closeStack.pop()
        }
    }
    return openStack.length === 0 && closeStack.length === 0;
}

module.exports = solution
