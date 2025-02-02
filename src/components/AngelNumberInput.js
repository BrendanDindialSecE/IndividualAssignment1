"use client"; // Because we're using state

import { useState } from "react";

export default function AngelNumberInput({ onSearch }) {
  const [number, setNumber] = useState(111);

  const handleSearch = () => {
    const num = Number(number);
    if (!isNaN(num)) {
      onSearch(num); // Call onSearch here in the input component
    } else {
      alert('Please enter a valid number');
    }
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="p-2 text-black rounded"
      />
      <button
        onClick={handleSearch} // Trigger search when clicked
        className="ml-2 p-2 bg-indigo-600 rounded hover:bg-indigo-800"
      >
        Reveal Meaning
      </button>
    </div>
  );
}