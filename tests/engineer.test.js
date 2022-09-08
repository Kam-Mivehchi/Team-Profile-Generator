
const Engineer = require('../lib/Engineer')

describe("Engineer", () => {

   let testEngineer = new Engineer("Tommy", 21, "test@test.com", 103)
   let expected = { name: "Tommy", employee_id: 21, email: "test@test.com", github: "custom_username" }
   test("Engineer inherits getRole, getId, getEmail from Employee", () => {

      expect(testEngineer.getRole()).not.toEqual(null)
      expect(testEngineer.getId()).toEqual(expected.employee_id)
      expect(testEngineer.getEmail()).toEqual(expected.email)
   })
   test("Engineer.getRole method returns 'Engineer'", () => {
      expect(testEngineer.getRole()).toEqual("Engineer")

   })
   test("Insantiating a new Engineer creates a Engineer object with name,id,email,&office number", () => {
      expect(testEngineer).toEqual(expected)

   })
   test("Engineer.getSchool() returns the Engineers school name", () => {
      expect(testEngineer.getGithub()).toEqual(expected.github)

   })

})