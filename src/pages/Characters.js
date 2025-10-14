// src/pages/Characters.js
import React from "react";
import { Link } from "react-router-dom";

function Characters() {
  const characters = Array.from({ length: 50 }, (_, i) => `no.${i + 1}`);

  return (
    <div className="page-container">
      <h1>Characters</h1>
      <div className="character-list">
        {characters.map((name, index) => (
          <div key={index} className="character-card">
            {/* ลิงก์ไปยังหน้ารายละเอียด */}
            <Link to={`/characters/${index + 1}`}>
              <div className="character-icon">🧑</div>
              <p>{name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
