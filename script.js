
const countries = [
    {
        name: 'India', value: 'IN', cities: [
            'Delhi',
            'Mumbai'
        ]
    },
    {
        name: 'Pakistan', value: 'Pak', cities: [
            'Lahore',
            'Karachi',
        ]
    },
    {
        name: 'Bangladesh', value: 'BG', cities: [
            'Dhaka',
            'Chittagong'
        ]
    }
]

const main = document.getElementById("main");
const countryDD = document.getElementById("country");
const cityDD = document.getElementById("cities");
countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country.value;
    option.innerText = country.name;
    countryDD.appendChild(option);
});

countryDD.addEventListener("change", () => {
    const cities = countries.find(country => country.value === countryDD.value).cities;
    const option = document.createElement("option");
    cityDD.innerHTML = "";

    cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.innerText = city;
        cityDD.appendChild(option);
    });
})