const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');
const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/user');

const todos = [
  {
    _id: new ObjectID(),
    text: 'First todo'
  },
  {
    _id: new ObjectID(),
    text: 'Second todo',
    completed: true,
    completedAt: 456
  }
];

const populateTodos = (done) => {
  Todo.deleteMany({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [
  {
    _id: userOneId,
    email: 'tester@testing.com',
    password: 'userOnePass',
    tokens: [
      {
        access: 'auth',
        token: jwt.sign({ _id: userOneId, access: 'auth'}, '123qwerty').toString()
      }
    ]
  },
  {
    _id: userTwoId,
    email: 'secondTester@testing.com',
    password: 'userTwoPass'
  }
];

const populateUsers = (done) => {
  User.deleteMany({}).then(() => {
    const userOne = new User(users[0]).save();
    const userTwo = new User(users[1]).save();
    return Promise.all([userOne, userTwo]);
  }).then(() => done());
};

module.exports = {
  todos,
  populateTodos,
  users,
  populateUsers
}