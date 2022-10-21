const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations = [Manhattan, Brooklyn, Queens, Bronx, StatenIsland]
    this.registeredUsers =[]
  }

  register(User){
    for(let i = 0; i < this,this.registeredUsers.length; i++){
      if(this.registeredUsers[i.username] === User.user){
        console.log("Error user already registered")
      }
      else if(User.age <=17){
        console.log("You are too young to register")
      }
      else {
        this.registeredUsers.push(User)
      }
    }
  }

  logIn(username,password){
    for(let i = 0; i < this.registeredUsers.length; i++){
      if((this.registeredUsers[i.username] === username)&&(this.registeredUsers[i.password])=== password)
      {
        this.registeredUsers[i.loggedIn] = true
        console.log("Welcome, you're all logged in")
      }else{
        console.log("Log In Failed, please try again...")
      }
    }
  
  }

  addScooter(location, scooter){
    Scooter.station = location
    Scooter.station.push(scooter)
  }



  removeScooter(scooterToRemove){
    

  }

}
module.exports = ScooterApp
