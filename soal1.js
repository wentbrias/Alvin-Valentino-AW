const students = [
  { name: "Ayu", score: 88 },
  { name: "Budi", score: 52 },
  { name: "Citra", score: 75 },
  { name: "Dani", score: 45 },
  { name: "Eka", score: 91 },
];

function toLetterGrade(students) {
  if (students.score >= 80) return "A";
  if (students.score >= 70) return "B";
  if (students.score >= 60) return " C";
  if (students.score >= 50) return "D";
  return "E";
}

function studentWithGrade(students) {
  return students.map((student) => ({
    ...student,
    grade: toLetterGrade(student),
  }));
}

function passedStudent(students) {
  return students.filter((student) => student.score >= 60);
}

function averageStudentScore(students) {
  return (
    students.reduce((total, student) => total + student.score, 0) /
    students.length
  );
}

console.log(studentWithGrade(students));
console.log(passedStudent(students));
console.log(averageStudentScore(students));

module.exports = { passedStudent,averageStudentScore,studentWithGrade }