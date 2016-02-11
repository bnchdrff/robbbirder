export default class Message {

  constructor(username, timestamp, message) {
    this._username = username;
    this._timestamp = timestamp;
    this._message = message;
  }

  get username() {
    return this._username;
  }

  get timestamp() {
    return this._timestamp;
  }

  get message() {
    return this._message;
  }

  get bird() {
    if (!this.hasMorningBird()) {
      return false;
    }

    return this.getBirdName(this._message);;
  }

  hasMorningBird() {
    return /\(.*\)/.exec(this._message);
  }

  /**
   * Get the birdname from a message.
   *
   * Assumes the message has a parenthetical birdname.
   *
   * @param {string} message
   *
   * @throws if no birdname found
   *
   * @returns {string}
   */
  getBirdName(message) {
    const res = /\((.*)\)/.exec(this._message);

    if (typeof res !== 'object' || res === null) {
      throw new Error('No birdname');
    } else {
      return res[1];
    }
  }

}

