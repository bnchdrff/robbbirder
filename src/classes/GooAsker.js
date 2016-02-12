import request from 'request';

export default class GooAsker {

  constructor(goo_api_key, goo_customsearch_key) {
    this._apikey = goo_api_key;
    this._cskey = goo_customsearch_key;
  }

  /**
   * @param {string} name
   *   Name of a bird, or whatever.
   *
   * @throws on request error or no images found
   *
   * @returns {string}
   *   URL of an image.
   */
  getBirdPhoto(name, cb) {
    const uri = 'https://www.googleapis.com/customsearch/v1?q=' + encodeURIComponent(name) + '&imgColorType=color&imgSize=large&imgType=photo&searchType=image' + '&cx=' + this._cskey + '&key=' + this._apikey;

    try {
      request(uri, (err, res, body) => {
        const hotbod = JSON.parse(body);

        if (hotbod.items[0].link) {
          cb(hotbod.items[0].link);
        }
        else {
          throw new Error('No image found');
        }
      });
    } catch(e) {
      throw new Error('Google search request error');
    }
  }

}
