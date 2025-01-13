function getCount(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

function filter_list(input) {
    return input.filter(item => typeof item === 'number');
}

function hasUniqueChars(str) {
    const seen = new Set(); 
    
    for (let char of str) {
        if (seen.has(char)) {
            return false;
        }
        seen.add(char);
    }
    
    return true;
}

function divisors(integer) {
    const result = [];
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            result.push(i);
        }
    }
    return result.length > 0 ? result : `${integer} is prime`;
}
