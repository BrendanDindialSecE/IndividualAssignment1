"use client"; // Because we're using state

export default function AngelNumberDisplay({ meaning }) {
  return (
    <div className="mt-4 p-4 bg-black/50 rounded">
      <h2 className="text-xl">🪽 Meaning:</h2>
      <p>{meaning}</p>
    </div>
  );
}