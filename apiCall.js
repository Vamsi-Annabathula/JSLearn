const url = "https://api.covid19api.com/summary"

async function getData(){
    const response = await fetch(url)
    let data = await response.json()
    document.getElementById("total").textContent = data.Global.TotalConfirmed
    document.getElementById("recovered").textContent = data.Global.TotalRecovered
    document.getElementById("deceased").textContent = data.Global.TotalDeaths
    console.log(data)
}

async function getCountriesData(){
    let select  = document.querySelector('select')
    const response = await fetch(url)
    let data = await response.json()
    let count = 0
    let options = data.Countries.map(e => `<option value = ${count++}>${e.Country}</option>`
    );
    select.innerHTML = options
}

async function getCountryCovidDetails(){
    let selectedOption = document.querySelector('select')
    let optionIndex = selectedOption.options[selectedOption.selectedIndex].value
    const response = await fetch(url)
    let data = await response.json()
    let countryDetails = data.Countries[optionIndex]
    document.getElementById("country-name").innerHTML = countryDetails.Country
    document.getElementById("country-total").textContent = countryDetails.TotalConfirmed
    document.getElementById("country-recovered").textContent = countryDetails.TotalRecovered
    document.getElementById("country-deceased").textContent = countryDetails.TotalDeaths
}
        