const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Could not connect', error);
  }
  console.log('Connected to mongodb');
  const db = client.db('ToDoApp');

  // db.collection('Users').deleteMany({
  //   name: 'Rapahel'
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID('5bbdd991830440672db3215d')
  // }).then((result) => {
  //   console.log(result);
  // });

  // client.close();
});