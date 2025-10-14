// 📂 src/pages/Credits.js
import React, { useState } from "react";
import "./Weekrequest.css";

function Credits() {
  // ข้อมูลภารกิจรายสัปดาห์
  const [missions, setMissions] = useState([
    {
      id: 1,
      name: "ชนะศัตรู 5 ครั้ง",
      condition: "เคลียร์ด่านใดก็ได้ 5 ครั้ง",
      duration: "2 ก.ย. – 8 ก.ย. 2025",
      reward: { type: "gold", text: "เศษเพชร 3 ชิ้น" },
      done: false,
    },
    {
      id: 2,
      name: "ใช้ตัวละครธาตุน้ำ",
      condition: "ใช้ตัวละครธาตุน้ำอย่างน้อย 3 ครั้ง",
      duration: "2 ก.ย. – 8 ก.ย. 2025",
      reward: { type: "gem", text: "เศษเพชร 3 ชิ้น" },
      done: false,
    },
    {
      id: 3,
      name: "ภารกิจเด่นสัปดาห์นี้ 🎉",
      condition: "ชนะ Boss Event พิเศษ 1 ครั้ง",
      duration: "2 ก.ย. – 8 ก.ย. 2025",
      reward: { type: "ticket", text: "เศษเพชร 3 ชิ้น" },
      done: false,
      highlight: true,
    },
    {
      id: 4,
      name: "สะสมการเล่นครบ 10 ครั้ง",
      condition: "ลงเล่นด่านใดก็ได้ 10 รอบ",
      duration: "2 ก.ย. – 8 ก.ย. 2025",
      reward: { type: "gold", text: "เศษเพชร 3 ชิ้น" },
      done: false,
    },
    {
      id: 5,
      name: "ใช้ท่าไม้ตาย",
      condition: "ใช้สกิลไม้ตายอย่างน้อย 5 ครั้ง",
      duration: "2 ก.ย. – 8 ก.ย. 2025",
      reward: { type: "gem", text: "เศษเพชร 3 ชิ้น" },
      done: false,
    },
    {
      id: 6,
      name: "ชนะด้วย Perfect Clear",
      condition: "เคลียร์ด่านโดยไม่เสีย HP 1 ครั้ง",
      duration: "2 ก.ย. – 8 ก.ย. 2025",
      reward: { type: "ticket", text: "เศษเพชร 3 ชิ้น" },
      done: false,
    },
    {
      id: 7,
      name: "ภารกิจสุดท้าย 🔒",
      condition: "ทำภารกิจ 1–6 สำเร็จทั้งหมด",
      duration: "2 ก.ย. – 8 ก.ย. 2025",
      reward: { type: "gem", text: "เศษเพชร 3 ชิ้น" },
      done: false,
      final: true,
    },
  ]);

  // toggle เช็คว่า ทำภารกิจแล้ว
  const toggleMission = (id) => {
    setMissions((prev) =>
      prev.map((m) => {
        // ภารกิจสุดท้ายต้องเช็คก่อนว่า 1–6 สำเร็จครบ
        if (m.id === id && m.final) {
          const firstSixDone = prev
            .filter((x) => x.id >= 1 && x.id <= 6)
            .every((x) => x.done);
          if (!firstSixDone) {
            alert("⚠ ต้องทำภารกิจ 1–6 ให้ครบก่อน!");
            return m;
          }
        }
        return m.id === id ? { ...m, done: !m.done } : m;
      })
    );
  };

  // นับ % progress
  const progress = Math.round(
    (missions.filter((m) => m.done).length / missions.length) * 100
  );

  return (
    <div className="credits-container">
      <h1>📌 ภารกิจรายสัปดาห์</h1>
      <p>ระยะเวลา: 2 ก.ย. – 8 ก.ย. 2025</p>

      {/* Progress bar */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p>{progress}% ทำสำเร็จ</p>

      {/* ตารางภารกิจ */}
      <table className="missions-table">
        <thead>
          <tr>
            <th>🎯 ชื่อภารกิจ</th>
            <th>📋 เงื่อนไข</th>
            <th>🕒 ระยะเวลา</th>
            <th>🎁 รางวัล</th>
            <th>✅ สำเร็จ</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((m) => (
            <tr
              key={m.id}
              className={`${m.highlight ? "highlight" : ""} ${
                m.final ? "final-mission" : ""
              }`}
            >
              <td>{m.name}</td>
              <td>{m.condition}</td>
              <td>{m.duration}</td>
              <td>💎 {m.reward.text}</td>
              <td>
                <input
                  type="checkbox"
                  checked={m.done}
                  onChange={() => toggleMission(m.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Credits;
