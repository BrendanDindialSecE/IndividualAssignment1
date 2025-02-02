"use client"; // Because we're using state

export default function DailyAngelNumber({ dailyNumber }) {
    return (
      <div className="mt-4 p-4 bg-black/50 rounded">
        <h2 className="text-xl">✨ Your Special Number For Today:</h2>
        <p className="text-2xl font-bold">{dailyNumber}</p>
      </div>
    );
  }