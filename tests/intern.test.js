
const Intern = require('../lib/Intern')

describe("Intern", () => {

   let testIntern = new Intern("Tommy", 21, "test@test.com", 103)
   let expected = { name: "Tommy", employee_id: 21, email: "test@test.com", school: "Harvard" }
   test("Intern inherits getRole, getId, getEmail from Employee", () => {

      expect(testIntern.getRole()).not.toEqual(null)
      expect(testIntern.getId()).toEqual(expected.employee_id)
      expect(testIntern.getEmail()).toEqual(expected.email)
   })
   test("Intern.getRole method returns 'Intern'", () => {
      expect(testIntern.getRole()).toEqual("Intern")

   })
   test("Insantiating a new Intern creates a Intern object with name,id,email,&school name", () => {
      expect(testIntern).toEqual(expected)

   })
   test("Intern.getSchool() returns the interns school name", () => {
      expect(testIntern.getSchool()).toEqual(expected.school)

   })

})