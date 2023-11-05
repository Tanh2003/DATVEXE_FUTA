const { Sequelize } = require('sequelize');



// Option 3: Passing parameters separately (other dialects)
<<<<<<< main
<<<<<<< HEAD
=======
>>>>>>> xong datxe
const sequelize = new Sequelize('futa', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
<<<<<<< main
=======
const sequelize = new Sequelize('freedb_DB_Futa', 'root','', {
  host: 'localhost',
  dialect:  'mysql', 
  logging: false
>>>>>>> e1b8d3530fee7fff3c03299fc52349ddd317f206
=======
>>>>>>> xong datxe
});

let connectDB = async() => {

    // kiểm tra kết nối DB thành công hay không 
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}
module.exports = connectDB;