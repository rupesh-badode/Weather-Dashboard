
import React from "react";

export default function Forecast({ forecast, unit }) {
  return (
    <div className="row">
      <h5>5-Day Forecast</h5>
      {forecast.map((day, index) => (
        <div className="col-md-2 mb-3" key={index}>
          <div className="card text-center">
            <div className="card-body">
              <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
              <p>{day.main.temp}°{unit === "metric" ? "C" : "F"}</p>
              <p>{day.weather[0].main}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

