interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  [key: string]: any,
}
interface Directors extends Teacher {
  numberOfReports: number,
}

const director: Directors = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
  numberOfReports: 77,
};

console.log(director);
