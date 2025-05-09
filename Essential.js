// ========== WEATHER FUNCTION ==========
const cityWeatherData = {
  Paris: "🌧️ Light rain, 17°C",
  Tokyo: "☀️ Sunny, 25°C",
  Pokhara: "⛅ Partly cloudy, 22°C",
  "New York": "🌤️ Clear, 21°C",
  Rome: "🌞 Hot and sunny, 29°C",
  Kyoto: "🌧️ Showers, 19°C",
  Sydney: "🌬️ Windy, 20°C",
  Reykjavik: "❄️ Cold with snow, -2°C",
  Barcelona: "☀️ Warm and sunny, 26°C"
};

function showWeather() {
  const selectedCity = document.getElementById("weatherCity").value;
  const resultDiv = document.getElementById("weatherResult");

  // Log selected city for debugging
  console.log("Selected city:", selectedCity);

  if (selectedCity && cityWeatherData[selectedCity]) {
    resultDiv.innerText = `Weather in ${selectedCity}: ${cityWeatherData[selectedCity]}`;
  } else {
    resultDiv.innerText = "";
  }
}

// ========== NEARBY SHOPS FUNCTION ==========
function findNearbyShopsAndAttractions() {
  const shopResults = document.getElementById("shopResults");
  const category = document.getElementById("categorySelect").value;

  const predefinedShops = {
    gear: [
      { name: "Sunrise Adventure Trek", address: "Kathmandu, Nepal", link: "https://sunriseadventuretrek.com/blogs/best-trekking-gears-shop-in-kathmandu" },
      { name: "Footprint Adventure", address: "Kathmandu, Nepal", link: "https://www.footprintadventure.com/blog/top-trekking-and-hiking-gear-shops-in-nepal" }
    ],
    books: [
      { name: "The Longest Way Home", address: "Thamel, Kathmandu", link: "https://www.thelongestwayhome.com/blog/nepal/bookshops-in-kathmandu-nepal" },
      { name: "Pilgrims Books", address: "Kathmandu, Nepal", link: "https://pilgrimsbooks.com/" }
    ],
    souvenir: [
      { name: "Trip Advisor", address: "Kathmandu, Nepal", link: "https://www.tripadvisor.com/Attractions-g293890-Activities-c26-t144-Kathmandu" },
      { name: "Full Time Explorer", address: "Kathmandu, Nepal", link: "https://fulltimeexplorer.com/nepal-souvenirs-kathmandu/" }
    ]
  };

  const shops = predefinedShops[category];

  if (shops && shops.length > 0) {
    let htmlContent = `<p>Here are nearby options for "<strong>${category}</strong>":</p>`;
    shops.forEach(shop => {
      htmlContent += `
        <div class="shop">
          <h4><a href="${shop.link}" target="_blank">${shop.name}</a></h4>
          <p>${shop.address}</p>
        </div>
      `;
    });
    shopResults.innerHTML = htmlContent;
  } else {
    shopResults.innerHTML = "<p>No shops found in this category.</p>";
  }
}

// ========== CURRENCY CONVERTER FUNCTION ==========
const exchangeRates = {
  USD: { USD: 1, EUR: 0.91, NPR: 133.5, JPY: 150 },
  EUR: { USD: 1.1, EUR: 1, NPR: 146, JPY: 165 },
  NPR: { USD: 0.0075, EUR: 0.0068, NPR: 1, JPY: 1.13 },
  JPY: { USD: 0.0067, EUR: 0.0061, NPR: 0.88, JPY: 1 }
};

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  const result = document.getElementById("result");

  if (isNaN(amount) || amount <= 0) {
    result.innerText = "Please enter a valid amount.";
    return;
  }

  const rate = exchangeRates[from][to];
  const converted = amount * rate;

  result.innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}
