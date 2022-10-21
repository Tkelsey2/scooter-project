const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
 const objectTest = new ScooterApp()

describe("Test ScooterApp Class", ()=>{
    test("App is Object",()=>{
        expect(typeof(objectTest)).toBe("object")
    })
    test("Are stations object",()=>{
        expect(typeof(objectTest.stations)).toBe("object")
    })
    test("Are Users object",()=>{
        expect(typeof(objectTest.registeredUsers)).toBe("object")
    })
})
// register user

describe("Testing registration",()=>{
    const Spy = jest.spyOn(console,'log');
    test("Valid registration",()=>{
        objectTest.register(new User("Tyler","Password",24))
        expect(Spy).toHaveBeenCalledWith("Registered Successfully")
    })
    test("Successfully in Users Array",()=>{
        objectTest.registeredUsers =[]
        testUser = new User("Tyler","Password", 24)
        objectTest.register(testUser)
        expect(objectTest.registeredUsers).toEqual([testUser])
    })
    test("User exists",()=>{
        objectTest.register(new User("Tyler1","Password",24))
        objectTest.register(new User("Tyler1", "Password", 24))
        expect(Spy).toHaveBeenCalledWith("Error user already registered")
    })
    test("User is too young",()=>{
        objectTest.register(new User("Tyler2", "Password",14))
        expect(Spy).toHaveBeenCalledWith("You are too young to register")
    })
})

// log in

describe("Testing login",()=>{
    const Spy = jest.spyOn(console,'log');
    test("Login Successful",()=>{
        objectTest.register(new User("Tyler", "Password",24))
        objectTest.logIn("Tyler","Password")
        expect(Spy).toHaveBeenCalledWith("Welcome, you're all logged in");
    })
    test("Invalid login due to password",()=>{
        objectTest.register(new User("Tyler1", "Password1",24))
        objectTest.logIn("Tyler1","Password")
        expect(Spy).toHaveBeenCalledWith("Log In Failed, please try again...")
    })
    test("Invalid login due to username",()=>{
        objectTest.register(new User("Tyler2", "Password1",24))
        objectTest.logIn("Tyreece","Password")
        expect(Spy).toHaveBeenCalledWith("Log In Failed, please try again...")
    })
})


// add scooter

describe("Testing AddScooter Functionality",()=>{
    const Spy =jest.spyOn(console, 'log');
    test("Add to location",()=>{
        objectTest.addScooter("Manhatten", new Scooter("Manhatten", new User("Tyler", "Password", 24)))
        expect(Spy).toHaveBeenCalledWith("Added successfully")
    })
    test("Failed to add",()=>{
        objectTest.addScooter("Montana", new Scooter("Manhatten", new User("Tyler", "Scooter", 24)))
        expect(Spy).toHaveBeenCalledWith("Location does not exist")
    })
})

// remove scooter

describe("Test removeScooter Functionality",()=>{
    const Spy = jest.spyOn(console,'log');
    newScooter = new Scooter("Manhatten", new User("Tyler", "Password", 24));
    test("Removal success",() => {
        objectTest.addScooter("Manhatten", newScooter)
        objectTest.removeScooter(newScooter)
        expect(Spy).toHaveBeenCalledWith("Scooter Removed")
    })
    test("Cannot Remove", () =>{
        objectTest.removeScooter(newScooter)
        expect(Spy).toHaveBeenCalledWith("Scooter does not exist")
    })
})
