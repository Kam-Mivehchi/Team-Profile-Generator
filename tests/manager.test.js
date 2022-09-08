
const Manager = require('../lib/Manager')

Describe("Manager", () => {

   let testManager = new Manager("tim", 21, "test@test.com", 103)
   let expected = { name: "Tommy", employee_id: 21, email: "test@test.com", office_number: 103 }
   test("Manager inherits getRole, getId, getEmail from Employee", () => {

      expect(testManager.getRole()).not.toEqual(null)
      expect(testManager.getId()).toEqual(expected.employee_id)
      expect(testManager.getEmail()).toEqual(expected.email)
   })
   test("Manager.getRole method returns 'Manager'", () => {
      expect(testManager.getRole()).toEqual("Manager")

   })
   test("Insantiating a new Manager creates a manager object with name,id,emai,&office number", () => {
      expect(testManager).toEqual(expected)

   })
   test("Manager.getOfficeNumber() returns the office number", () => {
      expect(testManager.getOfficeNumber()).toEqual(expected.office_number)

   })

})