let weather = {

    search: function(){
        this.getWeather(document.querySelector(".latInput").value, document.querySelector(".longInput").value);
    },

    getWeather : function (latitude, longitude){
        
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=imperial&appid=KEY GOES HERE`
        ).then((Response) => Response.json()).then((data) => this.displayCurrentWeather(data));
    },
    
    displayCurrentWeather :  function(data){ 
        
        const timezone = data.timezone; 
        const icon = data.current.weather[0].icon;
        const description = data.current.weather[0].description;
        const { temp, humidity, uvi, wind_speed } = data.current;

        console.log(timezone, description, icon, temp, humidity, uvi, wind_speed);

        document.querySelector(".city").innerText = timezone;
        document.querySelector(".icon").src = `http://openweathermap.org/img/wn/${icon}@2x.png`
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".uvi").innerText = "UV Index: " + uvi;
        document.querySelector(".wind").innerText = "Wind: " + wind_speed + "mph";

        
        for(var i = 0; i < data.daily.length; i++){

            const dt = new Date(data.daily[i].dt * 1000);
            const min = data.daily[i].temp.min;
            const max = data.daily[i].temp.max;
            const { icon, description } = data.daily[i].weather[0];

            console.log(dt, min, max, icon, description);

            if(i == 0){

                document.querySelector(".day0").innerHTML = dt;
                document.querySelector(".minDaily0").innerHTML = min;
                document.querySelector(".maxDaily0").innerHTML = max;
                document.querySelector(".iconDaily0").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                document.querySelector(".descriptionDaily0").innerHTML = description;
            
            }
            if(i == 1){

                document.querySelector(".day1").innerHTML = dt;
                document.querySelector(".minDaily1").innerHTML = min;
                document.querySelector(".maxDaily1").innerHTML = max;
                document.querySelector(".iconDaily1").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                document.querySelector(".descriptionDaily1").innerHTML = description;
              
            }
            if(i == 2){

                document.querySelector(".day2").innerHTML = dt;
                document.querySelector(".minDaily2").innerHTML = min;
                document.querySelector(".maxDaily2").innerHTML = max;
                document.querySelector(".iconDaily2").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                document.querySelector(".descriptionDaily2").innerHTML = description;
            
            }
            if(i == 3){

                document.querySelector(".day3").innerHTML = dt;
                document.querySelector(".minDaily3").innerHTML = min;
                document.querySelector(".maxDaily3").innerHTML = max;
                document.querySelector(".iconDaily3").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                document.querySelector(".descriptionDaily3").innerHTML = description;
         
            }
            if(i == 4){

                document.querySelector(".day4").innerHTML = dt;
                document.querySelector(".minDaily4").innerHTML = min;
                document.querySelector(".maxDaily4").innerHTML = max;
                document.querySelector(".iconDaily4").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                document.querySelector(".descriptionDaily4").innerHTML = description;
       
            }
            if(i == 5){

                document.querySelector(".day5").innerHTML = dt;
                document.querySelector(".minDaily5").innerHTML = min;
                document.querySelector(".maxDaily5").innerHTML = max;
                document.querySelector(".iconDaily5").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                document.querySelector(".descriptionDaily5").innerHTML = description;
               
            }
            if(i == 6){

                document.querySelector(".day6").innerHTML = dt;
                document.querySelector(".minDaily6").innerHTML = min;
                document.querySelector(".maxDaily6").innerHTML = max;
                document.querySelector(".iconDaily6").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                document.querySelector(".descriptionDaily6").innerHTML = description;
               
            }

        }
       
        document.querySelector(".inputContainer").classList.add("deActivate");
        document.querySelector(".currentContainer").classList.add("active");
        document.querySelector(".dailyContainer").classList.add("active");

    },

};

document.querySelector(".button1").addEventListener("click", function() { weather.search(); })