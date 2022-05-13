const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

readline.on('line', (line) => {
    console.log('Reversed line:');
    console.log([...line].reverse().join(''));
    console.log('Please enter a new line');
});

console.log('Please enter a new line');
