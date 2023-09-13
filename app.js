document.addEventListener('DOMContentLoaded', function(){

    const buttons= document.querySelectorAll('button');
    const screenView = document.getElementById('screenView');
    const screenResult = document.getElementById('screenResult');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
                // Get the text content of the clicked button
            const buttonValue = button.textContent;

            if (button.id === 'equalSign') 
            {
                // take the whole string from the screenView as an equation
                const equation = screenView.innerText;
                //we split the numbers from operators using that split and regular expression and map that into a new array Number[], which is saved in numbers[]
                const numbers = equation.split(/[-+*/]/).map(Number);
                //same applies here for removing operators from filtering using Boolean and put into operators[]
                const operators = equation.split(/[0-9]/).filter(Boolean);

                // NB Initialize the result with the first number, so we can loop numbers[i + 1]
                let result = numbers[0];

                // Iterate through the operators and apply them to the numbers
                for (let i = 0; i < operators.length; i++) 
                {
                   //starts from 0 and adds 1 as it loops
                    const nextNumber = numbers[i + 1]; 
                    // put that operator inside this variable for the switch statement
                    const currentOperator = operators[i];

                    switch (currentOperator) {
                        case '+':
                            result += nextNumber;
                            break;
                        case '-':
                            result -= nextNumber;
                            break;
                        case '*':
                            result *= nextNumber;
                            break;
                        case '/':
                            if (nextNumber !== 0) {
                                result /= nextNumber;
                            } else {
                                alert('Division by zero is not allowed');
                                screenView.innerText = '';
                                return;
                            }
                            break;
                    }
                }
                screenResult.innerText = result;
            } else 
            {
                if(button.id === 'clear')
                {
                    screenView.innerText = '';
                    screenResult.innerText = '';
                }
                //puts values on screen
                screenView.innerText += buttonValue;
                
            }
        });
    });

});







