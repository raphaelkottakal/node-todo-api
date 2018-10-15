// const crypto = require('crypto');

// const secret = 'abcdefg';
// const hash = crypto.createHmac('sha512', secret)
//   .update('I love cupcakes')
//   .digest('hex');
// console.log(hash);
const jwt = require('jsonwebtoken');

const data = {
  id: 18
};

const token = jwt.sign(data, 'shhhh');
console.log('token', token);

const decoded = jwt.verify(token, 'shhhh');
console.log('decoded', decoded);
