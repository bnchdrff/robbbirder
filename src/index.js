import Message from './classes/Message';

import GooAsker from './classes/GooAsker';

import Classifier from './classes/Classifier';

import { db_file, goo_api_key, goo_customsearch_key, clarifai_public, clarifai_secret } from '../settings';

const goo = new GooAsker(goo_api_key, goo_customsearch_key);

const cla = new Classifier(clarifai_public, clarifai_secret);

let bird = "Kirtland's Warbler";
let tags = ['no person', 'bird'];

goo.getBirdPhotos(bird, (err, urls) => {
  if (err) {
    throw new Error(err);
  }

  cla.imagesWithTags(urls, tags, (err, res) => {
    if (err) {
      throw new Error(err);
    }

    console.log(res);
  });
});
