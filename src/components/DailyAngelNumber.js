"use client"; // Because we're using state

export default function DailyAngelNumber({ dailyNumber }) { // Defines a React component that takes "dailyNumber" as a prop
  return (
    <div className="mt-4 p-4 bg-black/50 rounded"> {/* A box with padding, a semi-transparent black background, and rounded corners */}
      <h2 className="text-xl">✨ Your Special Number For Today:</h2> {/* A heading with a emoji and text styling */}
      <p className="text-2xl font-bold">{dailyNumber}</p> {/* Displays the number */}
    </div>
  );
}