import Clarifai from '../vendor/clarifai';

export default class Classifier {

  constructor(clarifai_public, clarifai_secret) {
    this._public = clarifai_public;
    this._secret = clarifai_secret;

    Clarifai.initAPI(this._public, this._secret);
  }

  /**
   * Tag an image
   *
   * @param {string} url
   * @param {string} name
   * @param {fn} callback, called with args err,res
   */
  tagImage(url, name, callback) {
    Clarifai.tagURL(url , name, callback);
  }

}

