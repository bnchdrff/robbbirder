import assert from 'assert';

import Classifier from '../../src/classes/Classifier';

describe('Classifier', () => {
  describe('findImagesWithTags', () => {
    it('should only return images with certain tags', () => {
      const [ pubkey, seckey ] = [ 'boo', 'bee' ];

      const tagsToMatch = [ 'foo' ];
      const testResults = [
        {
          url: 'matchme1',
          result: { tag: { classes: [ 'foo', 'bar', 'quux' ] } }
        },
        {
          url: 'dontmatchme',
          result: { tag: { classes: [ 'bar', 'quux' ] } }
        },
        {
          url: 'matchme2',
          result: { tag: { classes: [ 'qiix', 'foo', 'bar', 'quux' ] } }
        },
      ];

      let cla = new Classifier(pubkey, seckey);

      assert.deepEqual(cla.findImagesWithTags(testResults, tagsToMatch), [ 'matchme1', 'matchme2' ], 'links are returned');
    });
  });
});
