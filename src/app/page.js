"use client";

import { useState, useEffect } from "react";
import AngelNumberInput from "../components/AngelNumberInput";
import AngelNumberDisplay from "../components/AngelNumberDisplay";
import AngelNumberHistory from "../components/AngelNumberHistory";
import DailyAngelNumber from "../components/DailyAngelNumber";
import '@fontsource/twinkle-star'; 
import '@fontsource/delius-swash-caps'; 




export default function AngelNumberApp() {
  const [meaning, setMeaning] = useState("");
  const [history, setHistory] = useState([]);
  const [dailyNumber, setDailyNumber] = useState(null);

const angelNumberMeanings = {
  111: "A powerful sign of manifestation and new beginnings. Your thoughts are aligned with your purpose.",
  222: "Balance and harmony are aligning in your life. Keep faith and trust in the process.",
  333: "The universe is guiding and protecting you. Your angels are with you, offering support.",
  444: "Angels are surrounding you with love and support. You are on the right path, trust your journey.",
  555: "Major changes are on the horizon, embrace transformation. Prepare for new opportunities.",
  666: "Reevaluate your thoughts and beliefs; realign with positivity. Avoid negative thinking.",
  777: "You're on the right path, keep moving forward with faith. You're in alignment with your higher purpose.",
  888: "Abundance and prosperity are entering your life. You are in a cycle of abundance and success.",
  999: "A cycle is completing, and new opportunities are on the way. Prepare for new beginnings.",
  1111: "Your thoughts are manifesting quickly, stay focused. It's a sign that your desires are coming to fruition.",
  1212: "Trust the process; everything is falling into place. Stay positive and keep moving forward.",
  3333: "Your angels are sending you a message of love and protection. You are fully supported in your journey.",
  4444: "You are surrounded by angelic energy. Stay aligned with your soul’s purpose and the universe’s plan.",
  5555: "Change is inevitable. Embrace the new and trust the path you’re on.",
  6666: "You're being asked to balance your material pursuits and spiritual growth. Return to love and harmony.",
  7777: "You're in complete alignment with the universe. Keep your thoughts positive and follow your intuition.",
  8888: "Abundance and success are on the way. Stay open to receiving the rewards of your efforts.",
  2222: "Trust in divine timing and patience. Things are aligning perfectly in your life.",
  444: "Your angels are watching over you, providing protection and guidance.",
  5555: "Big changes are coming, and they will lead you to something better.",
  1010: "A reminder to stay focused on your spiritual path. Keep an open mind to new ideas."
};

  useEffect(() => {
    const today = new Date().toDateString();
    const storedDaily = localStorage.getItem("dailyNumber");
    if (storedDaily && JSON.parse(storedDaily).date === today) {
      setDailyNumber(JSON.parse(storedDaily).number);
    } else {
      const randomNum = Math.floor(Math.random() * 999) + 1;
      setDailyNumber(randomNum);
      localStorage.setItem("dailyNumber", JSON.stringify({ date: today, number: randomNum }));
    }
  }, []);

  const handleSearch = (number) => {
    const numMeaning = angelNumberMeanings[number] || "This number carries unique energy. Trust your intuition!";
    setMeaning(numMeaning);
    setHistory([...history, number]);
  };
 return (
  
 <div className="min-h-screen bg-gradient-to-b from-purple-700 to-blue-900 text-white p-6 text-center">
<h1>Angel Number Guide 🐦‍⬛</h1>
<p>Been seeing 111, 222, 333, or maybe a number that just felt special? Type it in and uncover its meaning!</p>
<AngelNumberInput onSearch={handleSearch} />
      <AngelNumberDisplay meaning={meaning} />
      <AngelNumberHistory history={history} />
      <DailyAngelNumber dailyNumber={dailyNumber} />
        <footer><p>Brendan Dindial | Student ID: N01279862</p></footer>
    </div>

  );
}