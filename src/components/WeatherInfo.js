import { useEffect } from 'react';

export default function WeatherInfo({ weather, unit, onToggleUnit, onAddToFavorites }) {
  useEffect(() => {
    console.log("Weather data:", weather);
  }, [weather]);

  // Guard clause if data is not yet loaded
  if (!weather || !weather.main || !weather.sys) {
    return <div className="alert alert-info">Loading weather data...</div>;
  }

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h4>{weather.name}, {weather.sys.country}</h4>
        <p><strong>Temperature:</strong> {weather.main.temp}°{unit === "metric" ? "C" : "F"}</p>
        <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
        <p><strong>Visibility:</strong> {weather.visibility} m</p>
        <p><strong>Feels Like:</strong> {weather.main.feels_like}°</p>
        <p><strong>Pressure:</strong> {weather.main.pressure} mb</p>

        <button className="btn btn-outline-secondary m-2" onClick={onToggleUnit}>
          Switch to °{unit === "metric" ? "F" : "C"}
        </button>
        <button className="btn btn-outline-success m-2" onClick={onAddToFavorites}>
          ⭐ Add to Favorites
        </button>
      </div>
    </div>
  );
}
