"use strict ";
require("dotenv").config();

var weather = require("openweather-apis");
const apikey = process.env.API_KEY;
weather.setAPPID(apikey);
weather.setLang("fr");
// your api key to the api generated by the website




const getWeather = (location) => {
  return new Promise((resolve, reject) => {
  weather.setCity(location);
  weather.getTemperature((err, temp) => {
    if (err) console.log(err.message);
    else {
      resolve(temp);
    }
  });
  // returns back theresults to the chatbot
});
};

module.exports = getWeather;
