const express = require('express');
const https = require('https');
const app = express();

app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    const query = req.body.cityName;
    const units = "metric"
    const apikey = "1a3649510866258206ea21cf29567c8c"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=" + units;
    https.get(url, (response) => {

        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            const weatherDesc = weatherData.weather[0].description;
            const temp = weatherData.main.temp
            const weatherIcon = weatherData.weather[0].icon;
            const imgUrl = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png"

            res.write('<p>The temperature of '+query+' is '+temp+'</p>')
            res.write('<p>The weather description of '+query+' is '+weatherDesc+'</p>')
            res.write("<img src=" + imgUrl + ">")
            res.send()
        })
    })
})

app.listen(3000, (req, res) => {
    console.log('Server is running')
})