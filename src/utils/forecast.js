const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url= 'http://api.weatherstack.com/current?access_key=b971210a048457decc461c7a2ef8ed3c&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json: true}, (error, {body}) =>{
        if (error){
            callback('Unable to connect weather service', undefined)

        } else if (body.error){
            callback('Unable to find location', undefined)

        } else {
            
            callback(
                undefined, 
                body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature +  '  degrees out. The humidity today is  '  + body.current.humidity +  '  with the index of ' + body.current.uv_index + '. There is a ' + body.current.precip + '% chance of rain')
 
        }

    })


}

module.exports = forecast