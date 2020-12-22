const express = require('express');
const path = require('path');
const axios = require('axios');
// Loads env variables
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3001;
// Adds json parsing middleware
app.use(express.json());
// Setup static directory to serve
app.use(express.static(path.resolve('client', 'build')));
app.use(express.static(path.join(__dirname, '/movies-client/dist/movies-client')));
// Creates weather endpoint
app.post('/weather', async (req, res) => {
    const { location } = req.body
    // Encode the variable so we can send the location in a URL
    const encodedLocation = encodeURIComponent(location)
    try {
        // Call the Weather API
        const { data } = await axios({
            method: "GET",
            url: `https://aerisweather1.p.rapidapi.com/observations/${encodedLocation}`,
            headers: {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "aerisweather1.p.rapidapi.com",
                "x-rapidapi-key": process.env.RAPIDAPI_KEY,
                "useQueryString": true
            }
        })
        // Pull the information that we need from the Weather API response
        const weatherData = {
            conditions: data.response.ob.weather,
            tempC: data.response.ob.tempC,
            tempF: data.response.ob.tempF
        }
        // Return the data object
        return res.send(weatherData)
    } catch (e) {
        console.log(e)
        return res.status(500).send('Error.')
    }
})
app.use('/api/user', require('./routes/user'));

// For any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
})
app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
});
// console.log that your server is up and running
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("Express is working on port " + port);
  });
app.listen(process.env.PORT || 5000);
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });