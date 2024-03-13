;
var stud1 = {
    firstName: 'Zealina',
    lastName: 'Hudson',
    age: 19,
    location: 'Abuja',
};
var stud2 = {
    firstName: 'Philip',
    lastName: 'Beckham',
    age: 19,
    location: 'Abuja',
};
var studentList = [stud1, stud2];
var table = document.createElement('table');
studentList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell(0);
    var locationCell = row.insertCell(1);
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});
document.body.appendChild(table);
