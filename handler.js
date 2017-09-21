'use strict';
const querystring = require('querystring');
const dynamoose = require('dynamoose');
// disable table creationg and waiting for lambda function
dynamoose.setDefaults( { create: false, waitForActive: false });
const Event = require('./Event');

module.exports.event = (event, context, callback) => {
  const particleEvent = new Event(querystring.parse(event.body));

  console.log(JSON.stringify(particleEvent));

  particleEvent.save()
  .then(function () {
    console.log('saved particle event')
    callback(null, { statusCode: 200 });
  })
  .catch(function (err) {
    console.log(err)
    callback(null, { statusCode: 501 });
  })
};
