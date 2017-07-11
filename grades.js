var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var gradeNumber= ""

function aGrades(scores) {
	return scores >= 91;
}

function bGrades(scores) {
	return scores <= 90 && scores >= 81;
}

function cGrades(scores) {
	return scores <= 80 && scores >= 71;
}

function dGrades(scores) {
	return scores <= 70 && scores >= 61;
}

function FGrades(scores) {
	return scores <= 60;
}

let sortArray = scores.sort(function(first, second){
	return first - second;
});

//console.log(sortArray);

let highestScore = sortArray.pop()
let lowestScore = sortArray.shift()


let gradeAFilter = scores.filter(aGrades);
// console.log(gradeAFilter);

let gradeBFilter = scores.filter(bGrades);
// console.log(gradeBFilter);

let gradeCFilter = scores.filter(cGrades);
// console.log(gradeCFilter);

let gradeDFilter = scores.filter(dGrades);
//console.log(gradeDFilter);

let gradeFFilter = scores.filter(FGrades);
//console.log(gradeFFilter);


let howManyAs = gradeAFilter.length;
console.log("How Many A's:", howManyAs);
let howManyBs = gradeBFilter.length;
console.log("How Many B's:", howManyBs);
let howManyCs = gradeCFilter.length;
console.log("How Many C's:", howManyCs);
let howManyDs = gradeDFilter.length;
console.log("How Many D's:", howManyDs);
let howManyFs = gradeFFilter.length;
console.log("How Many F's:", howManyFs);

console.log("What is the lowest grade?", lowestScore);
console.log("What is the highest grade?", highestScore);