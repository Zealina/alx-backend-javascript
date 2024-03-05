export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);

  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const currentDepartment = departments[currentDepartmentIndex];
      const employees = report.allEmployees[currentDepartment];

      if (currentEmployeeIndex >= employees.length) {
        currentDepartmentIndex += 1;
        currentEmployeeIndex = 0;
        return this.next();
      }

      const employee = employees[currentEmployeeIndex];
      currentEmployeeIndex += 1;

      return { value: employee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
