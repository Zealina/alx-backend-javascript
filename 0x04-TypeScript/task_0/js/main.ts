interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
};
const stud1: Student = {
  firstName: 'Zealina',
  lastName: 'Hudson',
  age: 19,
  location: 'Abuja',
};
const stud2: Student = {
  firstName: 'Philip',
  lastName: 'Beckham',
  age: 19,
  location: 'Abuja',
};
const studentList: Student[] = [stud1, stud2];

const table = document.createElement('table');

studentList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
