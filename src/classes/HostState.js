export default class HostState {
  constructor(user, potlucks = []) {
    this.user = user;
    this.potlucks = potlucks;

    // promote user properties to own properties
    for (let key of user.keys()) this[key] = user[key];
  }
}
