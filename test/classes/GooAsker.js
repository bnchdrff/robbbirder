import assert from 'assert';

import GooAsker from '../../src/classes/GooAsker';

describe('GooAsker', () => {
  describe('processGooResults', () => {
    it('should return the links from a set of google search results', () => {
      const [ pub, priv ] = [ 'boo', 'bee' ];
      const testLinks = [
        {
          poop: 1,
          link: 'booboo'
        },
        {
          peep: 2,
          link: 'beebee'
        }
      ];

      let goo = new GooAsker(pub, priv);

      assert.deepEqual(goo.processGooResults(testLinks), [ 'booboo', 'beebee' ], 'links are returned');
    });
  });
});
