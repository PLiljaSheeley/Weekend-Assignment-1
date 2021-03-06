var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

var initialList = [claim1, claim2, claim3, claim4, claim5];
var claim6 = new claim("John Dis", "Specialist", 1500);
var claim7 = new claim("Jane Al", "Optical", 2500);
var claim8 = new claim("Joe Shmoe", "Emergency", 10000);
var claim9 = new claim("Sharon Iscarin", "Emergency", 420000);
var claim10 = new claim("Steve Eewonder", "Primary Care", 10);

initialList.push(claim6);
initialList.push(claim7);
initialList.push(claim8);
initialList.push(claim9);
initialList.push(claim10);

console.log(initialList);
var totalPayedOut = 0;

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//function to determine percent covered
function percentCovered(object){
var percentToPay = 0;
switch(object.visitType){
  case "Optical":
    percentToPay = 0;
    break;
  case "Specialist":
    percentToPay = 0.10;
    break;
  case "Emergency":
    percentToPay = 1;
    break;
  case "Primary Care":
  	percentToPay = .50;
  	break;
  }
  return percentToPay;
}
//function to determine amount covered
function amountCovered(object){
	return (percentCovered(object)*object.visitCost);
}
for(var i =0;i<initialList.length;i++){
	console.log("Paid out $" + Math.round(amountCovered(initialList[i])) + " to " + initialList[i].patientName);
}
