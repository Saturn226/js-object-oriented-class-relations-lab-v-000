const store = { drivers: [], passengers: [], trips: [] };
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver{
  constructor(name){
    this.name = name
    this.id = driverId++
    store.drivers.push(this)
  }
  
  trips(){
    return store.trips.filter(trip => {
      return this.id == trip.driverId
    })
  }
   passengers(){
     return this.trips().map(trip => {
        return trip.passenger()
     })
   }
  
}

class Passenger{
  constructor(name){
    this.name = name
    this.id = passengerId++
    store.passengers.push(this)
  }
  
  trips(){
    return store.trips.filter(trip => {
      return this.id == trip.passengerId
    })
  }
  
  drivers(){
    return this.trips().filter(trip => {
      return trip.driver()
    })
  }
  
}

class Trip{
  constructor(driver, passenger){
    this.id = tripId++
    store.trips.push(this)
    this.driverId = driver.id
    this.passengerId = passenger.id
  }
  driver(){
    return store.drivers.find((driver)=> {
      return this.driverId == driver.id
    })
  }
  
  passenger(){
    return store.passengers.find((passenger) => {
      return this.passengerId == passenger.id
    })
  }
}