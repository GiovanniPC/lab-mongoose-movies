const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/starter-code`);

const goCelebritys = [{name: 'Gigio', occupation: 'Pizzaiolo', cathphrase: 'Lets eat pizza.'},
{name: 'Gigio2', occupation: 'StoneMaker', cathphrase: 'Lets build stones'},
{name: 'Gigio3', occupation: 'Sayajin', cathphrase: 'Lets save the world'}];

Celebrity.create(goCelebritys, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${goCelebritys.length} celebrity`);
    mongoose.connection.close();
  });