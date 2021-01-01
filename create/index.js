'use strict';

const uuid = require('uuid').v4;
const yellowThingsModel = require('./yellowThings.schema');

exports.handler = async (event) => {
  const { item, shade, description } = JSON.parse(event.body);

  const id = uuid();

  try {
    const record = new yellowThingsModel({ id, item, shade, description });
    const data = await record.save();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }

};


// POST
// /people - Given a JSON body, inserts a record into the database
// returns an object representing one record, by its id (##)