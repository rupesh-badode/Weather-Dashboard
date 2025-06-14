import React from "react";

export default function SearchHistory({ history, onSelect }) {
  return (
    <div className="mt-4">
      <h5>🔍 Search History</h5>
      {history.map((city, index) => (
        <button key={index} className="btn btn-outline-secondary me-2 mb-2" onClick={() => onSelect(city)}>
          {city}
        </button>
      ))}
    </div>
  );
}
