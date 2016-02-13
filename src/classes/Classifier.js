import _ from 'lodash';

import Clarifai from '../vendor/clarifai';

export default class Classifier {

  constructor(clarifaiPublic, clarifaiSecret) {
    this._public = clarifaiPublic;
    this._secret = clarifaiSecret;

    Clarifai.initAPI(this._public, this._secret);
  }

  /**
   * @callback tagResults
   * @param {string} err - error message
   * @param {string[]} res - matchedImages
   */

  /**
   * Tag image(s)
   *
   * @param {(string|string[])} urls - image url(s)
   * @param {(string|string[])} tags - only return images that have these tags
   * @param {tagResults} cb, called with array of qualifying images
   */
  imagesWithTags(urls, tags, cb) {
    Clarifai.tagURL(urls, 'whatever', (err, res) => {

      if (!res.status_code || res.status_code !== 'OK') {
        cb('clarifai error: ' + res.status_msg);
      }

      cb(
        null,
        this.findImagesWithTags(res.results, tags)
      );
    });
  }

  findImagesWithTags(results, tags) {
    return _(results)
      .filter((res) => {
        return (_.difference(tags, res.result.tag.classes).length === 0);
      })
      .map('url')
      .value();
  }

}
