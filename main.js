let Employee = prompt('Enter Employee Name');
let department = prompt('Enter Group Name');
let Gross = Number (prompt('Enter your gross income'));
let P = 0.2
if (department === 'D7'){
    alert ( Employee + " You Net Income is"  + " " + (Gross + 550 - (Gross * P)));
    }