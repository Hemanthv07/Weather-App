console.log('start')

setTimeout(()=>{
    console.log('2 Second Timer')
},2000)

setTimeout(()=>{
    console.log('0 Second Timer')
},0)


console.log('stop')


const request = require('request')

// const url='http://api.weatherstack.com/current?access_key=e77e01e61ed600911dbe4572500d43ba&query=37.8267,-122.4233'

request({url:url},(error,response)=>{
    console.log(response)
    const data = JSON.parse(response.body)
    console.log(data)
    console.log(data.current)
})


const request = require('request')

const url='http://api.weatherstack.com/current?access_key=e77e01e61ed600911dbe4572500d43ba&query=37.8267,-122.4233'

request({url:url, json:true},(error,response)=>{
    console.log(response.body.current)
    console.log('It is current ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
    console.log(response.body.current.weather_descriptions[0] + '. It is current ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')

})

//Geocoding
//Address-> Lat/Long ->weather

const request = require('request')

const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGVtYW50aHY3IiwiYSI6ImNseTY1YWFlOTA3MjAybHNhNjl2MDh0ZjgifQ.YmVUOYe9sz4oU_eu6-ExbQ&limit=1'

request({url:geocodeURL,json:true},(error,response)=>{
    const latitude = response.body.features[0].center[0]
    const longitude= response.body.features[0].center[1]
    console.log(latitude,longitude)
})