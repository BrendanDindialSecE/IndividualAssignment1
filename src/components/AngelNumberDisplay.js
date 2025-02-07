"use client"; // Because we're using state

export default function AngelNumberDisplay({ meaning }) {
  return (
    <div className="mt-4 p-4 bg-black/50 rounded"> {/* Container with padding and background for better visibility */}
      <h2 className="text-xl">🪽 Meaning:</h2> {/* Title for the meaning display */}
      <p>{meaning}</p> {/* Displays the meaning of the angel number */}
    </div>
  );
}
