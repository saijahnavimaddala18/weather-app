var userinput = document.getElementById("userinput");
var locationn = document.getElementById("locationn");
var temparature = document.getElementById("temparature");
var climate = document.getElementById("climate");
var humid = document.getElementById("humidity")
var btn = document.getElementById("btn");
var apikey = "724d7985285d1ba228e6839d7d096121";


btn.addEventListener("click", () => {
    if (userinput.value == "") {
        alert("please enter any location");
    }
    else {
        var userinp = userinput.value;
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${userinp}&appid=${apikey}`;
        fetch(url)
            .then(response => response.json())
            .then(result => {
                console.log(result);

                const { name } = result;
                locationn.innerHTML = name;

                const { description } = result.weather[0];
                climate.innerHTML = description;

                const { feels_like } = result.main;
                temparature.innerHTML = (Math.floor(feels_like-273));

                const { humidity } = result.main;
                humid.innerHTML = humidity;


            })

    }
    
})
