const Scooter = require('../src/Scooter')
const User = require('../src/User')

const testObject = new Scooter("Brooklyn", new User("Tyler","Password",24))

//typeof scooter === object
describe('Test Scooter Class', () => {
  test('is Object', () => {
    expect(typeof(testObject)).toBe("object")
  })
  test("Station is Correct",()=>{
    expect(testObject.station).toBe("Brooklyn")
  })
  test("User is Correct",()=>{
    expect(testObject.user.username).toBe("Tyler")
  })
})

//Method tests
describe("Test Methods", () => {
  const Spy = jest.spyOn(console, 'log');
  test("Rent when ready",()=>{
    testObject.charge = 100
    testObject.rent()
    expect(Spy).toHaveBeenCalledWith("Enjoy the ride!")
  })
  test("Rent when out of charge",()=>{
    testObject.charge = 10
    testObject.rent()
    expect(Spy).toHaveBeenCalledWith("Scooter battery is low, please charge.");
})
  test("Rent when broken",()=>{
    testObject.charge = 100
    testObject.isBroken = true
    testObject.rent()
    expect(Spy).toHaveBeenCalledWith("Scooter is broken, please send a repair request.");
})

})
  //dock method

describe("Test Dock Method",()=>{
  test("Changes Value",()=>{
    testObject.dock("Manhatten")
    expect(testObject.station).toBe("Manhatten")
    expect(testObject.docked).toBe(true)
    expect(testObject.user).toBe("")
  })
})

describe("Test recharge method",()=>{
  test("Charges Successfully",async()=>{
    await testObject.recharge()
    expect(testObject.charge).toBe(100)
  })
})

describe("Test Repair",()=>{
  test("Repaired successfully",async()=>{
    await testObject.requestRepair()
    expect(testObject.isBroken).toBe(false)
  })
})

