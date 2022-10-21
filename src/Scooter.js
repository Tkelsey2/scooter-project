class Scooter{
  // scooter code here
    constructor(station, user){
      this.station = station
      this.user = user
      this.serial = Math.floor(Math.random()*1000)
      this.charge = Math.floor(Math.random()*100)
      this.isBroken = false
      this.docked = true
    }

    rent(){
      if (this.isBroken === false && this.charge > 20){
        this.docked = false
        console.log("Enjoy the ride!")
      }
      else if(this.charge <= 20){
        console.log("Scooter battery is low, please charge.")
      }
      else{
        console.log("Scooter is broken, please send a repair request.")
        this.broken = true
      }

    }

    dock(station){
      this.station = station
      this.docked = true
      this.user = ""
    }
    async recharge() {
      console.log('Starting charge');
      
      await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
      this.charge = 100
  
      console.log('Charge complete');   
  }

  async requestRepair() {
    console.log('Error: Repair Required');
    
    await new Promise(resolve => setTimeout(resolve,2000));
    this.isBroken = false

    console.log('Repairs Complete');   
}
}


module.exports = Scooter
