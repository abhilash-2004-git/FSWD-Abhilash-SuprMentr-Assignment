const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function fetchWeatherData(city) {
  const res = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  );

  if (!res.ok) {
    if (res.status === 404) throw new Error(`City "${city}" not found. Please check the spelling.`);
    if (res.status === 401) throw new Error("Invalid API key. Check your .env file.");
    throw new Error("Something went wrong. Please try again.");
  }

  const data = await res.json();

  const forecastRes = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&cnt=5`
  );
  const forecastData = await forecastRes.json();

  return {
    city:        data.name,
    country:     data.sys.country,
    temp:        Math.round(data.main.temp),
    feelsLike:   Math.round(data.main.feels_like),
    description: data.weather[0].description,
    humidity:    data.main.humidity,
    wind:        data.wind.speed.toFixed(1),
    visibility:  data.visibility,
    forecast:    forecastData.list.map((item) => ({
      day:  new Date(item.dt * 1000).toLocaleDateString("en", { weekday: "short" }),
      temp: Math.round(item.main.temp),
      icon: item.weather[0].icon,
    })),
  };
}