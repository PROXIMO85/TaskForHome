function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

const inputString = 'Hello, World!';
const vowelCount = countVowels(inputString);
console.log(`Number of vowels: ${vowelCount}`);