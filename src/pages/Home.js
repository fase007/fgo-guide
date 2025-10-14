import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const startDate = new Date("2025-09-01T00:00:00");
    const endDate = new Date("2025-10-30T23:59:59");

    const timer = setInterval(() => {
      const now = new Date();

      if (now < startDate) {
        const diff = startDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft(`เริ่มในอีก ${days} วัน ${hours} ชม. ${minutes} นาที ${seconds} วิ`);
      } else if (now >= startDate && now <= endDate) {
        const diff = endDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft(`เหลือเวลาอีก ${days} วัน ${hours} ชม. ${minutes} นาที ${seconds} วิ`);
      } else {
        setTimeLeft("หมดเวลาแล้ว");
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container">
      <link rel="icon" href="./favicon.png" />
      {/* 🔔 Infobox Section */}
      <div className="infobox">
        <h3>📢 กิจกรรมปัจจุบัน</h3>
        <p>กิจกรรม "Summer Festival 2025" กำลังดำเนินอยู่! รีบฟาร์มของก่อนหมดเวลา</p>

        <h3>🆕 แพตช์ล่าสุด</h3>
        <p>อัปเดต 1.2.5 เพิ่มระบบ QP Calculator และปรับสมดุลตัวละคร</p>
      </div>

      {/* 🕒 Countdown Timer */}
      <div className="countdown-box">
        <h3>⏳ เวลาที่เหลือของกิจกรรม</h3>
        <p>{timeLeft}</p>

        {/* ✅ ปุ่ม Credits อยู่ในกล่อง */}
        <Link to="/Weekrequest" className="extra-button">
          📜 Weekrequest
        </Link>
      </div>

      {/* ✅ ปุ่มพิเศษนอกกล่อง */}
      <div className="extra-buttons">
        <Link to="/qp-calculator" className="extra-button">
          ⚖️ QP Calculator Tool
        </Link>
        <Link to="/expert" className="extra-button">
          🏆 ด่าน Expert
        </Link>
      </div>

      {/* 🔘 Button Grid */}
      <div className="button-grid">
        <Link to="/beginner" className="home-button">
          ข้อมูลแนะนำสำหรับผู้เริ่มต้น
        </Link>
        <Link to="/tips" className="home-button">
          เคล็ดลับสำหรับมือใหม่ในการเอาชนะการต่อสู้
        </Link>
        <Link to="/qp" className="home-button">
          วิธีการสร้างรายได้ QP อย่างมีประสิทธิภาพ
        </Link>
        <Link to="/strategy" className="home-button">
          วิธีง่ายๆ ในการดำเนินเรื่องหลักและเวลาที่คาดว่าจะเคลียร์
        </Link>
      </div>
    </div>
  );
}

export default Home;
