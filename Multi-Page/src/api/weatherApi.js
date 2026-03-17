const API_KEY  = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function fetchWeatherData(city) {
  const res = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) {
    if (res.status === 404) throw new Error(`City "${city}" not found.`);
    throw new Error("Something went wrong. Please try again.");
  }
  const d = await res.json();
  return {
    city:        d.name,
    country:     d.sys.country,
    temp:        Math.round(d.main.temp),
    feelsLike:   Math.round(d.main.feels_like),
    description: d.weather[0].description,
    humidity:    d.main.humidity,
    wind:        d.wind.speed.toFixed(1),
  };
}