"use client"; // Because we're using state

import { useState } from "react";

export default function AngelNumberInput({ onSearch }) {
  const [number, setNumber] = useState(111); // Default number set to 111

  const handleSearch = () => {
    const num = Number(number);
    if (!isNaN(num)) {
      onSearch(num); // Pass the number to the parent component for searching
    } else {
      alert('Please enter a valid number'); // Alert user if input is not a number
    }
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)} // Updates state when input changes
        className="p-2 text-black rounded"
      />
      <button
        onClick={handleSearch} // Searches when button is clicked
        className="ml-2 p-2 bg-indigo-600 rounded hover:bg-indigo-800"
      >
        Reveal Meaning
      </button>
    </div>
  );
}

