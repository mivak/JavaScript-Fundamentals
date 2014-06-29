function Solve(input) {
    var finalResult = '',
        functions = [];

    for (var i = 0; i < input.length; i++) {
        var currentRow = input[i].trim(),
            operator = '',
            currentDigit = '',
            currentFunctionName = '',
            parameters = [],
            inCommand = false,
            inNestedCommand = false,
            nestedOperator = '',
            nestedParameters = [],
            currentNewFunction = '';

        for (var j = 0; j < currentRow.length; j++) {
            var currentSymbol = currentRow[j];

            if (currentSymbol === ' ' || currentSymbol === ')') {
                if (currentFunctionName !== '') {
                    if (functions[currentFunctionName] || functions[currentFunctionName] === 0) {
                        var functionResult = functions[currentFunctionName];
                        if (inNestedCommand) {
                            nestedParameters.push(functionResult);
                        } else {
                            parameters.push(functionResult);
                        }
                    } else {
                        currentNewFunction = currentFunctionName;
                    }

                    currentFunctionName = '';
                }
                if (currentDigit !== '') {
                    if (inNestedCommand) {
                        nestedParameters.push(parseInt(currentDigit));
                    } else {
                        parameters.push(parseInt(currentDigit));
                    }

                    currentDigit = '';
                }

                if (currentSymbol === ')' && currentNewFunction !== '') {
                    var result;

                    if (inNestedCommand) {
                        result = calculate(nestedOperator, nestedParameters);
                    } else {
                        result = calculate(operator, parameters);
                    }

                    functions[currentNewFunction] = result;
                    currentNewFunction = '';
                }

                if (inNestedCommand && currentSymbol === ')') {
                    var nestedResult = calculate(nestedOperator, nestedParameters);

                    parameters.push(nestedResult);
                    nestedOperator = '';
                    nestedParameters = [];
                    inNestedCommand = false;
                }

                continue;
            }

            if (currentSymbol === '(') {
                if (inCommand) {
                    inNestedCommand = true;
                } else {
                    inCommand = true;
                }

                continue;
            }

            if (isMathOperator(currentSymbol)) {
                if (currentSymbol === '-' && j + 1 < currentRow.length && isNumber(currentRow[j + 1])) {
                    currentDigit += currentSymbol;
                } else {
                    if (inNestedCommand) {
                        nestedOperator = currentSymbol;
                    } else {
                        operator = currentSymbol;
                    }
                }

                continue;
            }

            if (isNumber(currentSymbol)) {
                if (currentFunctionName !== '') {
                    currentFunctionName += currentSymbol;
                } else {
                    currentDigit += currentSymbol;
                }

                continue;
            }

            currentFunctionName += currentSymbol;
        }

        finalResult = calculate(operator, parameters);
        if (finalResult === 'Error') {
            return 'Division by zero! At line:' + (i + 1);
        }
    }

    return finalResult;

    function isMathOperator(symbol) {
        if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
            return true;
        }

        return false;
    }

    function isNumber(symbol) {
        if (symbol === ' ') {
            return false;
        }

        if (Number(symbol) === symbol) {
            return true;
        }
    }

    function calculate(operator, parameters) {
        if (parameters.length === 1) {
            return parameters[0];
        }

        var result = parameters[0];
        for (var i = 1; i < parameters.length; i++) {
            switch (operator) {
                case '-':
                    result -= parameters[i];
                    break;
                case '+':
                    result += parameters[i];
                    break;
                case '*':
                    result *= parameters[i];
                    break;
                case '/':
                    if (parameters[i] === 0) {
                        return 'Error';
                    }

                    result /= parseInt(parameters[i]);
                    break;
            }
        }

        return result;
    }
}