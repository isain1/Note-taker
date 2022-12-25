//Imports Express, and initiates the app on port 3001
const express = require('express');
const app = express();
const PORT = 3001;

//Imports the route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Routes 
app.use('/', htmlRoutes);
app.use('/apiRoutes', apiRoutes);

//Initializes the server
app.listen(PORT, () => {
    console.log(`App launched on port: ${PORT}`);
});