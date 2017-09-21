const dynamoose = require('dynamoose');
const Event = dynamoose.model(
  'particle-event',
  {
    coreid: {
      type: String,
      hashKey: true,
    },
    published_at: {
      type: Date,
      rangeKey: true,
    },
  },
  {
    saveUnknown: true,
    expires: 30*24*60*60,
  }
);

module.exports = Event;
