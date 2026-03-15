let students = [
 { name: "Deep", age: 22, scores: [78, 85, 92] },
 { name: "dev", age: 20, scores: [88, 90, 76] },
 { name: "Janvee", age: 21, scores: [95, 80, 85] }
];

let highestAverage = 0;
let topStudent = "";

for (let i = 0; i < students.length; i++) {

    let total = 0;

    for (let j = 0; j < students[i].scores.length; j++) {
        total += students[i].scores[j];
    }

    let average = total / students[i].scores.length;

    console.log(students[i].name + " Average Score: " + average.toFixed(2));

    if (average > highestAverage) {
        highestAverage = average;
        topStudent = students[i].name;
    }
}

console.log("Top Student:", topStudent, "with average score", highestAverage.toFixed(2));