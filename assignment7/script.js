//SE Boot Camp Assignment 7
//Create a JavaScript file (link it to an HTML file), and write code for Part A, B and C:
//A.
//The Temperature Converter - Let's make a converter based on the steps here and display the coverted
//result. -Use template literals Only to display the result
//• Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".
//• Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."
var celsiusTemp = "0";
var fahrenheitTemp = "32";
console.log(celsiusTemp+ "°C is " + fahrenheitTemp + "°F");

var celsiusTemp = "25";
var fahrenheitTemp = "77";
console.log(fahrenheitTemp+ "°F is " + celsiusTemp + "°C");

//B.
//Use the BMI example from class activity 1, and the code you already wrote, and improve it:
//1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Lucas'
//BMI is higher than John's!" or "John's BMI is higher than Lucas'!"
//2. Use a template literal to include the BMI values in the outputs. Example: "Lucas' BMI (28.3) is higher than John's (23.9)!"
//HINT: Use an if/else statement
let lucasMass = '78';
let lucasHeight = '1.69';
let johnMass = '92';
let johnHeight = '1.95';

let lucasBMI = lucasMass / (lucasHeight * lucasHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

let rlucasBMI = round(lucasBMI, 1);
let rjohnBMI = round(johnBMI, 1);

if (rlucasBMI > rjohnBMI){
    console.log(`Lucas' BMI (${rlucasBMI}) is higher than John's (${rjohnBMI})!`);
}
else if (rlucasBMI < rjohnBMI){
    console.log(`John's BMI (${rjohnBMI}) is higher than Lucas' (${rlucasBMI})!`);
}
else {
    console.log(`Lucas' BMI (${rlucasBMI}) is the same as John's (${rjohnBMI})!`);
}

//C.
//There are two teams, Nets and Knicks. They compete against each other 3 times. The team with the
//highest average score wins a trophy!
//Your tasks:
//1. Calculate the average score for each team, using the test data below
//2. Compare the team's average scores to determine the winner of the competition,
//and print it to the console. Don't forget that there can be a draw, so test for that
//as well(draw means they have the same average score)
//3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a
//higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical
//operator to test for minimum score, as well as multiple else -if blocks.
//4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the
//same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
//Test data:
// Data 1: Nets score 96, 108 and 89. Knicks score 88, 91 and 110
// Data Bonus 1: Nets score 97, 112 and 101. Knicks score 109, 95 and 123
// Data Bonus 2: Nets score 97, 112 and 101. Knicks score 109, 95 and 106

let netsavg = ((97+112+101)/3);
let knicksavg = ((109+95+106)/3);

let rnetsavg = round(netsavg, 1);
let rknicksavg = round(knicksavg,1);


if (rnetsavg>=100 && rknicksavg>=100){
    if(rnetsavg>rknicksavg){
        console.log(`Data Bonus 2: The Nets win the trophy with an average score of ${rnetsavg}, higher than the Knicks' ${rknicksavg}.`);
    }
    else if (rnetsavg<rknicksavg){
        console.log(`Data Bonus 2: The Knicks win the trophy with an average score of ${rknicksavg}, higher than the Nets' ${rnetsavg}.`)
    }
    else if (rnetsavg==rknicksavg){
        console.log(`Data Bonus 2: The teams tied with equal average scores of ${rnetsavg}. No teams win the trophy.`)
    }
}
else if (rnetsavg>=100 || rknicksavg>=100){
    if (rnetsavg>=100){
        console.log(`Data Bonus 2: The Nets was the only team to finish with an average score greater than or equal to 100 (${rnetsavg}), so it wins the trophy. `)
    }
    else {
        console.log(`Data Bonus 2: The knicks was the only team to finish with an average score greater than or equal to 100 (${rknicksavg}), so it wins the trophy.`)
    }
}
else {
    console.log(`Data Bonus 2: Neither team reached a minimum of 100 points. No team wins the trophy.`)
}