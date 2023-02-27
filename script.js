let weather = {
    "apiKey": "fbec71bfdad28665aee9f9031300e378",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        )
         .then((response) => response.json())
         .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data
        const { icon, description } = data.weather[0]
        const { temp, humidity } = data.main
        const { speed } = data.wind
        const { country } = data.sys

        document.querySelector(".city").innerText = "Weather in " + name + ", " + country
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png"
        document.querySelector(".description").innerText = description
        document.querySelector(".temp").innerText = temp + "ºC"
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"
        document.querySelector(".wind").innerText =  "Wind speed: " + speed + " KM/H"
        document.querySelector(".weather").classList.remove("hide")
        document.querySelector(".search-city").classList.add("hide")
    },
    search: function () {
       this.fetchWeather(document.querySelector(".search-bar").value)
    }
}

document.querySelector(".search-button").addEventListener("click", function() {
    // weather.search()
    if(document.querySelector(".search-bar").value != ""){
        weather.search()
    }
    document.querySelector(".search-bar").value = ""
})

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        if(document.querySelector(".search-bar").value != ""){
            weather.search()
        }
        document.querySelector(".search-bar").value = ""
    }
})