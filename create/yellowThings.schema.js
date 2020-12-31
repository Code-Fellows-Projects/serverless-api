'use strict';

const dynamoose = require('dynamoose');

const yellowThingsSchema = new dynamoose.Schema({
  "id": String,
  "item": String,
  "shade": {
    "type": Array,
    "schema": [String]
  },
  "description": String
});

module.exports = dynamoose.model('yellowThings', yellowThingsSchema);