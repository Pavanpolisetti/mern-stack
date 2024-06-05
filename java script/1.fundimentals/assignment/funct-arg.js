function calculateSum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]; 
    }
    return sum;
}

function displaySum() {
    const args = Array.from(arguments);
    const sum = calculateSum(...args);
    document.getElementById('result').innerText = `Sum: ${sum}`;
}

// Testing with different numbers of arguments
displaySum(1, 2, 3); // Should display "Sum: 6"
displaySum(10, 20, 30, 40); // Should display "Sum: 100"
displaySum(2, 4, 6, 8, 10); // Should display "Sum: 30" 