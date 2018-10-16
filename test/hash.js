// const crypto = require('crypto');

// const secret = 'abcdefg';
// const hash = crypto.createHmac('sha512', secret)
//   .update('I love cupcakes')
//   .digest('hex');
// console.log(hash);
// const jwt = require('jsonwebtoken');

// const data = {
//   id: 18
// };

// const token = jwt.sign(data, 'shhhh');
// console.log('token', token);

// const decoded = jwt.verify(token, 'shhhh');
// console.log('decoded', decoded);
const bcrypt = require('bcryptjs');

const password = '1234qwerty';

// bcrypt.genSalt(10, (err, salt) => {
//   console.log('salt', salt);
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   })
// })

// bcrypt.hash(password, '$2a$10$Rs3IOUaOY.rN3/FBRC6h0.', (err, hash) => {
//   console.log(err)
//   console.log(hash);
// })

const pastHash = '$2a$10$VV/KaksCmA14XIj/xy6//emRgM5jinciQ4oR5zSv125O8CNE1v98G';

bcrypt.compare('1234qwerty', pastHash, (err, result) => {
  console.log(result);
})