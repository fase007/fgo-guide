// dbserver.js
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 ตั้งค่าการเชื่อมต่อฐานข้อมูลโดยตรง (ไม่ใช้ .env)
const db = mysql.createConnection({
  host: "jupiter.csc.ku.ac.th",        
  user: "6540200398",             
  password: "1qazxsw2@",             
  database: "data6540200398", 
});

// 🔹 ตรวจสอบการเชื่อมต่อ
db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL database");
  }
});

// 🔹 API ดึงข้อมูลจากแต่ละตาราง
app.get("/api/getData", (req, res) => {
  const { type } = req.query;

  if (!type) {
    return res.status(400).json({ error: "Invalid type" });
  }

  let query = "";

  switch (type) {
    case "craft_essences":
      query = "SELECT * FROM craft_essences";
      break;
    case "qp_stages":
      query = "SELECT * FROM qp_stages";
      break;
    case "servants":
      query = "SELECT * FROM servants";
      break;
    default:
      return res.status(400).json({ error: "Invalid type" });
  }

  db.query(query, (err, results) => {
    if (err) {
      console.error("❌ Query Error:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// 🔹 เริ่มเซิร์ฟเวอร์
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
