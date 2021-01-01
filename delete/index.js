'use strict';

const yellowThingsModel = require('./yellowThings.schema');

exports.handler = async (event) => {
  const id = event.pathParameters.id;


  try {
    const deletedData = await yellowThingsModel.delete({ id });
    console.log('DELETED ITEM');

    return {
      statusCode: 200,
      body: JSON.stringify(deletedData)

    }
  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }
};



// DELETE
// /people/## - Given an id (##) removes the matching record from the database
// returns an empty object