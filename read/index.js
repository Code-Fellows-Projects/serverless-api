
'use strict';

const yellowThingsModel = require('./yellowThings.schema');

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  console.log('__id__', id);

  try {

    let data;
    // check to see if there is an id
    // query the DB to find the record with the id and return it
    if (id) {
      const list = await yellowThingsModel.query('id').eq(id).limit(1).exec();
      data = list;
    } else {
      // if not
      // return all the records
      data = await yellowThingsModel.scan().exec();
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      response: JSON.stringify(e)
    }
  }
};

// GET
// /people - returns an array of objects representing the records in the database
// /people/## - returns an object representing one record, by its id (##)