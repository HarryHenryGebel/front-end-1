export default class Potluck {
  constructor(
    potluckId,
    hostId,
    eventName,
    date,
    time,
    location,
    description,
    foods = [],
    guests = []
  ) {
    this.potluckId = potluckId;
    this.hostId = hostId;
    this.eventName = eventName;
    this.date = date;
    this.time = time;
    this.location = location;
    this.description = description;
    this.foods = foods;
    this.guests = guests;
  }
}
