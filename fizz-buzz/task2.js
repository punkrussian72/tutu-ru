function checkSyntax(str) {
    const checker = {
        '>': '<',
        ']': '[',
        '}': '{',
        ')': '(',
    };
    const openedBrackets = [], opening = '<[{(', closing = '>}])';
    for (let i = 0; i < str.length; i++) {
        if (opening.indexOf(str[i]))
            openedBrackets.push(str[i]);
        else if (closing.indexOf(str[i])) {
            if (!openedBrackets.length || openedBrackets[openedBrackets.length - 1] !== checker[str[i]])
                return 1;
            openedBrackets.pop()
        }
    }
    return openedBrackets.length ? 1 : 0;
}

// Для удобства можно использовать эти тесты:
try {
    test(checkSyntax, ["---(++++)----",], 0);
    test(checkSyntax, ["",], 0);
    test(checkSyntax, ["before ( middle []) after ",], 0);
    test(checkSyntax, [") (",], 1);
    test(checkSyntax, ["} {",], 1);
    test(checkSyntax, ["<(   >)",], 1);
    test(checkSyntax, ["(  [  <>  ()  ]  <>  )",], 0);

    console.info("Congratulations! All tests passed.");
} catch(e) {
    console.error(e);
}

// Простая функция тестирования
function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `Found items count: ${count}`);
    if (!r) throw "Test failed!";
}

/*
<,[,{,(

checkSyntax("---(++++)----") == 0
checkSyntax("") -> 0
checkSyntax("before ( middle []) after ") == 0
checkSyntax(") (") == 1
checkSyntax("} {") == 1
checkSyntax("<(   >)") == 1
checkSyntax("(  [  <>  ()  ]  <>  )") == 0
checkSyntax("   (      [)") == 1
*/
