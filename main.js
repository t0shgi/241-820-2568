/* --- Array Section --- */
let ages = [25, 30, 35, 40, 45];
console.log('Ages:', ages);

let fruits = ['apple', 'banana', 'cherry'];
console.log('fruits:', fruits);
fruits.push('mango');
console.log('fruit after push:', fruits);
console.log('Length of fruits:', fruits.length); 

for (let i = 0; i < fruits.length; i++) {
    console.log(`fruits at index ${i}: ${fruits[i]}`);
}

let a = 10, b = 20, c = 30;
console.log('a:', a, 'b:', b, 'c:', c);

ages = [10, 20, 30]; 
console.log('ages:', ages);
console.log('ages[1]:', ages[1]);

// 1. แทนที่ข้อมูล
ages = [15, 25];
console.log('ages list:', ages);

// 2. ต่อ array
ages.push(35);
console.log('ages after push:', ages);

// 3. ลบตัวสุดท้าย
ages.pop();
console.log('ages after pop:', ages);

/* --- Object Section --- */
let students = [
    { name: "John", age: 30, grade: 'A' }
];

// วนลูปแสดงผล
for (let i = 0; i < students.length; i++) {
    console.log("student " + (i + 1) + ":");
    console.log('name:', students[i].name);
    console.log('age:', students[i].age);
    console.log('grade:', students[i].grade);
}

// การเพิ่มข้อมูลใหม่เข้าไปใน Array
students.push({
    name: "Mike",
    age: 26,
    grade: "C"
});
console.log("add new student:", students[students.length - 1]);

// ลบคนสุดท้ายออก
students.pop();
console.log("remove last student. current students:", students);

/* --- Function Section --- */
function calculation_grade(score) {
    let grade; // ประกาศตัวแปรรับค่า
    if (score >= 80) {
        grade = 'A';
    } else if (score >= 70) {
        grade = 'B';
    } else if (score >= 60) {
        grade = 'C';
    } else if (score >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return grade;
}

let score1 = 85;
let score2 = 65;
let grade1 = calculation_grade(score1);
let grade2 = calculation_grade(score2);
console.log(`score1: ${score1} grade: ${grade1}`);
console.log(`score2: ${score2} grade: ${grade2}`);

let scoreList = [90, 80, 70, 60, 50];

// แสดงผล score ด้วย forEach
scoreList.forEach((s, i) => {
    console.log(`score ${i + 1}: ${s}`);
});

score.foreach((s) => {
    return s - 10;
})

score.foreach((s) => {
    console.log('score:',s);
})


/* --- Advanced Object Functions --- */
let studentData = [
    { name: "John", age: 20, grade: "A" },
    { name: "Jane", age: 22, grade: "B" },
    { name: "Jim", age: 21, grade: "C" }
];

// Find: หาข้อมูลของ Jane
let jane = studentData.find((s) => s.name === "Jane");
console.log('Found Jane:', jane);

// map
let doubleAgeStudents = studentData.map((s) => {
    return { ...s, age: s.age * 2 };
});

// Filter: กรองเฉพาะคนที่ได้เกรด A
let highGradeStudents = studentData.filter((s) => s.grade === "A");

console.log('Original Students:', studentData);
console.log('Double Age Students:', doubleAgeStudents);
console.log('High Grade Students (Grade A):', highGradeStudents);