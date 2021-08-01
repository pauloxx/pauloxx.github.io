//A.
let bill = prompt("Enter the amount for the bill: ");

switch(true){
    case 30<bill<300:
        let tip = bill * 0.15
        let total = bill * 1.15
        console.log(`The bill was ${bill}, the tip was ${tip}, and the total is ${total}.`);
        break;
    default:
        let tipAmt = bill * 0.2
        let totalAmt = bill * 1.2
        console.log(`The bill was ${bill}, the tip was ${tipAmt}, and the total is ${totalAmt}.`);
}


//B.
var celsiusTemp = "0";
var fahrenheitTemp = "32";
console.log(celsiusTemp+ "°C is " + fahrenheitTemp + "°F");

var celsiusTemp = "25";
var fahrenheitTemp = "77";
console.log(fahrenheitTemp+ "°F is " + celsiusTemp + "°C");

//C.
const data1Nets = [44,23,71];
const data1knicks = [65,54,49];


const data2Nets = [85,54,41];
const data2knicks = [23,34,27];

const calcAvg = (game1, game2, game3) =>{
    return avg = (game1 + game2 + game3) / 3;
}
const avgNets1 = calcAvg (data1Nets[0],data1Nets[1],data1Nets[2]);
const avgKnicks1 = calcAvg (data1knicks[0],data1knicks[1],data1knicks[2]);
const avgNets2 = calcAvg (data2Nets[0],data2Nets[1],data2Nets[2]);
const avgKnicks2 = calcAvg (data2knicks[0],data2knicks[1],data2knicks[2]);

function checkWinner(averagenets, averageknicks){
    if (2 * averageknicks < averagenets){
        console.log(`Nets win (${averagenets} - ${averageknicks})`)
    }
    else if(2 * averagenets < averageknicks){
        console.log(`Knicks win (${averageknicks} - ${averagenets})`)
    }
    else{
        console.log(`No one wins`)
    }
}
checkWinner(avgNets1,avgKnicks1);
checkWinner(avgNets2,avgKnicks2);

//D.
function calcTip(bill){
    if (50<bill<300){
        let tip1 = bill * 0.15
        let total1 = bill * 1.15
        console.log(`The bill was ${bill}, the tip was ${tip1}, and the total is ${total1}.`);
    }
    else{
        let tipAmt1 = bill * 0.2
        let totalAmt1 = bill * 1.2
        console.log(`The bill was ${bill1}, the tip was ${tipAmt1}, and the total is ${totalAmt1}.`);
    }
}
const bill1 = [`125`, `555`, `44`];

const totalbill = [calcTip(bill1[0]),calcTip(bill1[1]),calcTip(bill1[2])];
