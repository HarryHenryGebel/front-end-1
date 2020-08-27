export default class Guest {
  constructor(
    guestId,
    username,
    primaryEmail,
    firstName,
    lastName,
    responded,
    isAttending,
    isBringing = []
  ) {
    this.guestId = guestId;
    this.username = username;
    this.primaryEmail = primaryEmail;
    this.firstName = firstName;
    this.lastName = lastName;
    this.responded = responded;
    this.isAttending = isAttending;
    this.isBringing = isBringing;
  }
}
