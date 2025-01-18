const mongoose = require('mongoose');
const { DB_NAME } = require('../constants');

const dbconnection = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URL}${DB_NAME}`);
    console.log('Database Connected !!');
  } catch (error) {
    console.log('DataBase Error: ', error);
  }
};

module.exports = { dbconnection };
