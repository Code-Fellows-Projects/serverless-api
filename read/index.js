
'use strict';

const yellowThingsModel = require('./yellowThings.schema');

exports.handler = async (event) => {
  const yellowId = event.pathParameters.id;
  console.log('__YELLOWID__', yellowId);

  try {

    let data;
    // check to see if there is an id
    // query the DB to find the record with the id and return it
    if (yellowId) {
      const list = await yellowThingsModel.query('id').eq(yellowId).limit(1).exec();
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