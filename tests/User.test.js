const User = require('../src/User')
const ScooterUser = require('../src/User')

// User tests here

// test username
describe("Test User",()=>{
    const testObject = new User("Test", "Test1", 18)
    test("Is Object",()=>{
        expect(typeof(testObject))
    })
})
// test password

// test age
