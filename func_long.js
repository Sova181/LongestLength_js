function getLongestLength(str) {
    let longestLength = 0;
    let currentSubstring = '';

    for (let item of str) {
        let itemIndex = currentSubstring.indexOf(item);

        if (itemIndex === -1) {
            currentSubstring += item;
            longestLength = Math.max(longestLength, currentSubstring.length);
        } else {
            currentSubstring = currentSubstring.slice(itemIndex + 1) + item;
        }
    }

    return longestLength;
}

module.exports = getLongestLength