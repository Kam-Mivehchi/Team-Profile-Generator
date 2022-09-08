const Employee = require('../lib/Employee')

describe('Employee', () => {

   let testEmployee = new Employee("Tommy", 21, "test@test.com")
   let expected = { name: "Tommy", employee_id: 21, email: "test@test.com" }

   test('Insantiating Employee creates a new instance of Employee', () => {

      expect(testEmployee instanceof Employee).toEqual(true)
   })

   test('Insantiating Employee class creates an employee object with corresponding name,id,email', () => {

      expect(testEmployee).toEqual(expected)
      expect(testEmployee instanceof Employee).toEqual(true)
   })

   test("Calling employee.getRole returns Employee", () => {
      expect(testEmployee.getRole()).toEqual("Employee")

   })
   test("Calling employee.getId returns the employees id", () => {
      expect(testEmployee.getId()).toEqual(expected.employee_id)

   })
   test("Calling employee.getRole returns the employees email", () => {
      expect(testEmployee.getEmail()).toEqual(expected.email)

   })
})