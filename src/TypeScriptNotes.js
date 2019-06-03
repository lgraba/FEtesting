let isDone: boolean = false
let decimal: number = 6
let color: string = "blue"

// use template strings, which can span multiple lines and have embedded expressions.These strings are surrounded by the backtick / backquote(`) character, and embedded expressions are of the form ${expr}.
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${ age + 1} years old next month.`