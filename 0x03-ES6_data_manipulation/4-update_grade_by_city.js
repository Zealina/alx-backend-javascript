export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const filtered = studentList.filter((item) => item.location === city);
  return filtered.map((student) => {
    const gradeObj = newGrades.filter((item) => item.studentId === student.id);
    const result = student;
    if (gradeObj.length > 0) {
      result.grade = gradeObj[0].grade;
    } else {
      result.grade = 'N/A';
    }
    return student;
  });
}
