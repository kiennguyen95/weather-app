const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7712853c36544e73c3e2c77e24d0dd9a&query=' + latitude + ',' + longitude + '&unit=f'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location service.', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast
