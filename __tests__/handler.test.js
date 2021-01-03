'use strict';

// const createRoute = require('../create/index.js');
// const readRoute = require('../read/index.js');
// const updateRoute = require('../update/index.js');
// const deleteRoute = require('../delete/index.js');


let url = 'https://anay0prhv3.execute-api.us-west-2.amazonaws.com/yellowThings/';

const request = require('superagent');


describe('endpoint', () => {
  it('GET', async () => {
    const response = await request.get(url);

    expect(response).toHaveProperty('status', 200);
    expect(typeof response.body).toEqual('object');
  });

  it('POST', async () => {
    let yellowThings = {
      "item": 'lemon',
      "shade": ['highlighter yellow'],
      "description": 'best served sour not sweet',
    };

    const response = await request.post('https://anay0prhv3.execute-api.us-west-2.amazonaws.com/yellowThings-POST');
    expect(response).toHaveProperty('status', 200);

  });

  it('PUT', async () => {
    let yellowThings = {
      'item': 'baby duck',
      'shade': ['light yellow'],
      'description': 'cute and quacks',
    };

    const response = await request.put('https://anay0prhv3.execute-api.us-west-2.amazonaws.com/yellowThings-PUT');
    expect(response).toHaveProperty('status', 200);
  });

  it('DELETE', async () => {
    const response = await request.delete(url);

    expect(response).toHaveProperty('status', 200);
    expect(typeof response.body).toEqual('object');
  })
});
