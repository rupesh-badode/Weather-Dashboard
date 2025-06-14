import React from "react";

export default function Favorites({ favorites, onSelect }) {
  return (
    <div className="mt-4">
      <h5>⭐ Favorites</h5>
      {favorites.map((city, index) => (
        <button key={index} className="btn btn-outline-info me-2 mb-2" onClick={() => onSelect(city)}>
          {city}
        </button>
      ))}
    </div>
  );
}