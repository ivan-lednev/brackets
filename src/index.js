module.exports = function check(str, bracketsConfig) {
    let brackets = str.split("");
    function testMatchingBrackets(left, right) {
        return bracketsConfig.some(
            (pair) => pair[0] === left && pair[1] === right
        );
    }

    function removeNeighbors() {
        for (let i = brackets.length - 2; i >= 0; i--) {
            const current = brackets[i];
            const next = brackets[i + 1];
            if (testMatchingBrackets(current, next)) {
                brackets.splice(i, 2);
            }
        }
    }

    let previousLength = brackets.length;
    do {
        previousLength = brackets.length;
        removeNeighbors();
    } while (brackets.length > 0 && brackets.length < previousLength);

    return brackets.length === 0;
};
