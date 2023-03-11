let input = document.querySelector('input')
let form = document.querySelector('form')
let ans = document.getElementsByClassName('ans')[0]
let img = document.getElementById('img')
let cityName = document.getElementById('cityName')
let tempC = document.getElementById('tempC')
let tempF = document.getElementById('tempF')
let state = document.getElementById('state')
let country = document.getElementById('country')
let date = document.getElementById('date')
let time = document.getElementById('time')
let timeZone = document.getElementById('timeZone')
let lastUpdateTimeDate = document.getElementById('lastUpdateTimeDate')


form.addEventListener('submit', weatherAPI)
async function weatherAPI(e) {
    try {
        ans.style.opacity = "1"
        e.preventDefault()
        var key = "1868eecae1ae49ecb7262531232802"
        var res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${input.value}&aqi=yes`)
        var data = await res.json()

        //ans 
        img.setAttribute('src', `${data.current.condition.icon}`)

        cityName.innerText = data.location.name + " , "
        state.innerText = data.location.region + " , "
        country.innerText = data.location.country

        tempC.innerText = data.current.temp_c
        tempF.innerText = data.current.temp_f

        time.innerText = "Time - " + data.location.localtime.split(" ")[1]
        date.innerText = "Date - " + data.location.localtime.split(" ")[0]
        timeZone.innerText = "Time zone - " + data.location.tz_id
        lastUpdateTimeDate.innerText = "Last updated - " + data.current.last_updated
        form.reset()
    } catch (error) {
        alert("Please Enter valid City name")
    }
}


let bg = document.querySelector('body')
function mode() {
    let modeButton = document.getElementById('mode')

    if (modeButton.textContent === "Night") {

        bg.style.backgroundImage = 'none'
        bg.style.color = 'black'
        bg.style.backgroundColor = 'white'
        modeButton.innerText = "Day"
    } else if (modeButton.textContent === "Day") {
        bg.style.backgroundImage = 'none'
        bg.style.color = 'white'
        ans.style.color = 'white'
        bg.style.backgroundColor = 'black'
        modeButton.innerText === "Night"
        mode()
    }
}
