import Message from './classes/Message';

import GooAsker from './classes/GooAsker';

import Classifier from './classes/Classifier';

import { db_file, goo_api_key, goo_customsearch_key, clarifai_public, clarifai_secret } from '../settings';

const goo = new GooAsker(goo_api_key, goo_customsearch_key);

const cla = new Classifier(clarifai_public, clarifai_secret);

goo.getBirdPhoto('canada goose', (url) => {
  cla.tagImage(url, 'canada goose', (err, res) => {
    console.log(res);
  });
});
