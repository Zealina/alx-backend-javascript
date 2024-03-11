export default function getStudentIdsSum(studentList) {
  return studentList.reduce((accumulator, item) => {
    const temp = accumulator + item.id;
    return temp;
  }, 0);
}
