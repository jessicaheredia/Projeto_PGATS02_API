const bcrypt = require('bcryptjs');

// In-memory user database
const users = [
  {
    username: 'jessica', 
    password: bcrypt.hashSync('123456', 8), 
    favorecidos: [ 'vinicius' ], 
    saldo: 20000
  },
  {
    username: 'vinicius', 
    password: bcrypt.hashSync('123456', 8), 
    favorecidos: [ 'jessica' ], 
    saldo: 20000
  }
];

module.exports = {
  users
};
