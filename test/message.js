import assert from 'assert';

import Message from '../src/classes/Message';

describe('Message', () => {
  describe('#construct', () => {
    it('should create a new Message with some data', () => {
      const [ name, date, message ] = [ 'boo', 'bee', '(bird) morning bop' ];
      let msg = new Message(name, date, message);

      assert.equal(name, msg.username, 'username matches');
      assert.equal(date, msg.timestamp, 'timestamp matches');
      assert.equal(message, msg.message, 'message matches');
    });
  });

  describe('#hasMorningBird()', () => {
    it('should sense if a message has a morning bird.', () => {
      const [ name, date, message ] = [ 'boo', 'bee', '(bird) morning bop' ];
      let msg = new Message(name, date, message);

      assert.ok(msg.hasMorningBird(), 'message has a bird');
    });

    it('should sense if a message does not has a morning bird.', () => {
      const [ name, date, message ] = [ 'boo', 'bee', 'bird) morning bop' ];
      let msg = new Message(name, date, message);

      assert.ok(!msg.hasMorningBird(), 'message has no bird');
    });

  });

  describe('#getBirdName()', () => {
    it('should throw if the message does not have a bird', () => {
      const [ name, date, message ] = [ 'boo', 'bee', 'notabird morning bop' ];
      let msg = new Message(name, date, message);

      assert.throws(msg.getBirdName, Error, 'message does not a bird & bird method throws');
    });

    it('should return the correct birdname no matter where it is in the message', () => {
      let [ name, date, message ] = [ 'boo', 'bee', '(ptarmigan) morning bop' ];
      let msg = new Message(name, date, message);
      assert.equal('ptarmigan', msg.getBirdName(), 'bird name in front');

      message = 'morning (ptarmigan) bop';
      msg = new Message(name, date, message);
      assert.equal('ptarmigan', msg.getBirdName(), 'bird name in middle');

      message = 'morning bop (ptarmigan)';
      msg = new Message(name, date, message);
      assert.equal('ptarmigan', msg.getBirdName(), 'bird name in back');
    });
  });
});
