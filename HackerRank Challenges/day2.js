// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), 
// and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.

/*global mealCost*/

/*global tipPercent*/
/*global taxPercent*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var meal_cost = parseFloat(readLine());
    var tip_percent = parseInt(readLine());
    var tax_percent = parseInt(readLine());

    
}

var tipCost = mealCost * tipPercent / 100;
var taxCost = mealCost * taxPercent / 100;
var totalCost = Math.round(mealCost + tipCost + taxCost);

console.log("The total meal cost is " + totalCost + " dollars.");