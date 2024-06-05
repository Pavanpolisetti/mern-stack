function performOperations() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
  
    var addition = num1 + num2;
    var subtraction = num1 - num2;
    var multiplication = num1 * num2;
    var division = num1 / num2;
    var modulus = num1 % num2;
  
    var results = document.getElementById('results');
    results.innerHTML = `
      <p>Addition: ${addition}</p>
      <p>Subtraction: ${subtraction}</p>
      <p>Multiplication: ${multiplication}</p>
      <p>Division: ${division}</p>
      <p>Modulus: ${modulus}</p>
    `;
  } 