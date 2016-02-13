import request from 'request';

import _ from 'lodash';

export default class GooAsker {

  constructor(gooApiKey, gooCustomsearchKey) {
    this._apikey = gooApiKey;
    this._cskey = gooCustomsearchKey;
  }

  /**
   * @callback gooResults
   * @param {string} err - error message
   * @param {string[]} res - array of bird photo addresses
   */

  /**
   * @param {string} name - birdname
   * @param {gooResults} cb - called with bird images
   *
   * @throws on request error or no images found
   */
  getBirdPhotos(name, cb) {
    const uri = 'https://www.googleapis.com/customsearch/v1?q=' + encodeURIComponent(name) + '&imgColorType=color&imgSize=large&imgType=photo&searchType=image' + '&cx=' + this._cskey + '&key=' + this._apikey;

    try {
      request(uri, (err, res, body) => {
        const hotbod = JSON.parse(body);

        if (hotbod.items[0].link) {
          cb(false, this.processGooResults(hotbod.items));
        } else {
          cb('No image found');
        }
      });
    } catch (e) {
      cb('Google search request error');
    }
  }

  processGooResults(items) {
    return _.map(items, 'link');
  }

}
