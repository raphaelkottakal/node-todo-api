const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Could not connect', error);
  }
  console.log('Connected to mongodb');
  const db = client.db('ToDoApp');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bbdcd9ff69d05654ff876cb')
  },
  {
    $set: {
      name: 'Raphael'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  // client.close();
});