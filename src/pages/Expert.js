import React, { useEffect, useState } from "react";
import "./Expert.css";

// mock API ดึงข้อมูลจาก PHP (จะเปลี่ยน URL เป็น API จริงทีหลัง)
const API_URL = "http://localhost:8000/api/getData?type=servants";

function Expert() {
  const [characters, setCharacters] = useState([]);
  const [teams, setTeams] = useState(
    Array.from({ length: 10 }, () => [
      { charId: null, level: 1, skills: [1, 1, 1] },
      { charId: null, level: 1, skills: [1, 1, 1] },
      { charId: null, level: 1, skills: [1, 1, 1] },
    ])
  );

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (teamIndex, memberIndex, field, value, skillIndex) => {
    const newTeams = [...teams];
    if (field === "charId") {
      newTeams[teamIndex][memberIndex].charId = parseInt(value);
    } else if (field === "level") {
      newTeams[teamIndex][memberIndex].level = parseInt(value);
    } else if (field === "skill") {
      newTeams[teamIndex][memberIndex].skills[skillIndex] = parseInt(value);
    }
    setTeams(newTeams);
  };

  const calculateWinRate = (team) => {
    let totalLevel = 0;
    let totalSkill = 0;
    let count = 0;

    team.forEach((member) => {
      if (member.charId) {
        totalLevel += member.level;
        totalSkill += member.skills.reduce((a, b) => a + b, 0);
        count++;
      }
    });

    if (count === 0) return 0;

    const avgLevel = totalLevel / count;
    const avgSkill = totalSkill / (count * 3);

    // สูตรจำลอง: (เลเวล/100 + สกิล/10) * 50%
    return Math.min(100, ((avgLevel / 100 + avgSkill / 10) * 50).toFixed(2));
  };

  return (
    <div className="expert-container">
      <h1>Expert Team Builder</h1>

      {teams.map((team, teamIndex) => (
        <div key={teamIndex} className="team-card">
          <h2>Team {teamIndex + 1}</h2>

          <div className="team-members">
            {team.map((member, memberIndex) => (
              <div key={memberIndex} className="member-card">
                {/* เลือกตัวละคร */}
                <select
                  value={member.charId || ""}
                  onChange={(e) =>
                    handleChange(teamIndex, memberIndex, "charId", e.target.value)
                  }
                >
                  <option value="">-- Select Character --</option>
                  {characters.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.class})
                    </option>
                  ))}
                </select>

                {/* เลเวล */}
                <div className="lv-card">
                  Level:{" "}
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={member.level}
                    onChange={(e) =>
                      handleChange(teamIndex, memberIndex, "level", e.target.value)
                    }
                  />
                </div>

                {/* สกิล 3 ช่อง */}
                {member.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    Skill {skillIndex + 1}:{" "}
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={skill}
                      onChange={(e) =>
                        handleChange(
                          teamIndex,
                          memberIndex,
                          "skill",
                          e.target.value,
                          skillIndex
                        )
                      }
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* โอกาสชนะ */}
          <p className="winrate">
            โอกาสชนะของทีมนี้: {calculateWinRate(team)}%
          </p>
          <p className="winrate">
            การคำนวณมีโอกาศผิดพลาดได้ ทางเราจะพัฒนาต่อไป
          </p>
        </div>
      ))}
    </div>
  );
}

export default Expert;
