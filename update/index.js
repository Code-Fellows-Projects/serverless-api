'use strict';

const uuid = require('uuid').v4;
const yellowThingsModel = require('./yellowThings.schema');

exports.handler = async (event) => {
  const { item, shade, description } = JSON.parse(event.body);

  const id = uuid();

  try {
    const data = await yellowThingsModel.update({ id, item, shade, description });

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


// await.model.update

// PUT
// /people/## - Given a JSON body and an ID (##), updates a record in the database
// returns an object representing one record, by its id (##)