// Your age is 22, if your age is greater than 18, console the “eligible for vote”, otherwise console  “not eligible”
var age = 21;
if(undefined){
    console.log("eligible for vote")
}else{
    console.log("not eligible")
    
}


// // Weather condition is “rainy”,if weather condition is rainy, console the “its pouring outside” otherwise “not raining”
var weather = "rainy";
if([]){
    console.log("its pouring outside")
}else{
    console.log("not raining")
}

// // Students marks is 76, console the grade of students based on marks;
//     90+ →  A+
//    81 – 90 —> A
//   71 – 80  —> B+
//  61 — 70 —-> C+
// 51– 60 —-> C
// 40 – 50   —> D
// Below 50 → fail

var marks = 76;
if(marks>90){
    console.log("A+")
}else if(marks<=90 && marks>80){
    console.log("A")
}else if(marks>70 && marks<=80){
    console.log("B+")
}else if(marks>60 && marks<=70){
    console.log("C+")
}else if(marks>50 && marks<=60){
    console.log("C")
}else if(marks>40 && marks<=50){
    console.log("D")
}else if(marks<50){
    console.log("fail")
}

// let weather = "rainy"; 
 let speed=70;
if (speed <= 60 && weather === "clear") {
 console.log("You are driving safely in good weather."); 
} else if (speed <= 50 && weather === "rainy") { 
console.log("Drive carefully, the roads are slippery."); 
} else if (speed <= 40 && weather === "snowy") {
 console.log("Slow down further due to snow."); 
} else { 
console.log("You are driving too fast for the current weather conditions!");
 }
