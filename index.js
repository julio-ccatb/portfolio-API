require('dotenv').config();
var app = require('./app');



var server = app.listen(process.env.SERVER_PORT||3000, () => console.log(`Server running on port: ${process.env.SERVER_PORT}
URL: http://localhost:${process.env.SERVER_PORT}/api`));