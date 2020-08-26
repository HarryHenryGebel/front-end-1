export default class User {
  constructor(userId, username, primaryEmail, firstName, lastName, imageUrl) {
    this.userId = userId;
    this.username = username;
    this.primaryEmail = primaryEmail;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageUrl = imageUrl;
  }
}
