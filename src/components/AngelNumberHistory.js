"use client"; // Because we're using state

export default function AngelNumberHistory({ history = [] }) {
  return (
    <div className="mt-4 p-4 bg-black/50 rounded">
      <h2 className="text-xl">🧾Search History:</h2>
      <ul>
        {history.length > 0 ? (
          history.map((num, index) => <li key={index}>{num}</li>) // Display each number in the history
        ) : (
          <p>No searches yet.</p> // Message when the history is empty
        )}
      </ul>
    </div>
  );
}