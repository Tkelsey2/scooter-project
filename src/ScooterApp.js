const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations = {
      Manhatten:[],
      Brooklyn:[],
      Queens:[],
      Bronx:[],
      StantenIsland:[]
    }

    this.registeredUsers =[]
    ScooterApp.sessions.push(this)
  }

  static sessions =[]

  register(User){
    for(let i = 0; i < this,this.registeredUsers.length; i++){
      if(this.registeredUsers[i].username === User.username){
        console.log("Error user already registered")
      }
      else if(User.age <=17){
        console.log("You are too young to register")
      }
      else {
        this.registeredUsers.push(User)
        console.log("Registered Successfully")
      }
    }
  }

  logIn(username,password){
    for(let i = 0; i < this.registeredUsers.length; i++){
      if((this.registeredUsers[i].username === username)&&(this.registeredUsers[i].password)=== password)
      {
        this.registeredUsers[i].loggedIn = true
        console.log("Welcome, you're all logged in")
      }else{
        console.log("Log In Failed, please try again...")
      }
    }
  
  }

  addScooter(location, scooter){
    if (Object.keys(this.stations).includes(location)){
      this.stations[location].push(scooter)
      console.log("Added successfully")
    } else{
      console.log("Location does not exist")
    }
  }



  removeScooter(scooterToRemove){
    let response = "Scooter does not exist"
    for (const key in this.stations){
      this.stations[key] = this.stations[key].filter((curr)=>{
        if(curr != scooterToRemove){
          return true
        } else {
          response = "Scooter Removed"
          return false
        }
      })
    }
    return response
  }
}

module.exports = ScooterApp
