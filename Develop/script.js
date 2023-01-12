apiKey: "567c5a359e1b9f47641646a5afb70ab7"

var apiFetch='https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}' + search ;
await fetch(apiFetch)
    .then(response => {
        response.json
    })
    .then(data => {
        console.log('One momnent')
        for (i =0 ; i < data.items.length; i++) {
            var cityEl = document.createElement ;
            var tempEl = document.createElement ;
            var humidityEl = document.createElement ;
            var windEl = document.createElement ;

            cityEl.innerHTML = data.items[i].city ;
            tempEl.innerHTML = data.items[i].temp ;
            humidityEl.innerHTML = data.items[i].humidity ;
            windEl.innerHTML = data.items[i].wind ;
        }
    })