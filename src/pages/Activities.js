import React from "react";
import "./Activities.css";

function Activities() {
  return (
    <div className="page-container">
      <h1>🎉 กิจกรรมและอีเวนต์ในเกม (ส.ค.–ก.ย. 2025)</h1>

      {/* กล่องพื้นหลังฟ้าอ่อน */}
      <div
        style={{
          backgroundColor: "#e6f7ff",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h2>📌 กิจกรรมปัจจุบัน (Ongoing Events)</h2>
        <table border="1" cellPadding="8" cellSpacing="0" width="100%">
          <thead>
            <tr style={{ backgroundColor: "#cceeff" }}>
              <th>📌 ชื่อกิจกรรม</th>
              <th>📅 ช่วงเวลา</th>
              <th>🎁 รางวัลหลัก</th>
              <th>📝 รายละเอียด</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>🎊 ครบรอบ 10 ปี FGO</td>
              <td>2 ก.ย. – 16 ก.ย. 2025</td>
              <td>เพชร 100, ตัวละคร SSR เลือกได้ 1</td>
              <td>
                แจกของรางวัลใหญ่ ฉลอง 10 ปี พร้อม Banner กาชาพิเศษ
              </td>
            </tr>
            <tr>
              <td>🔥 Raid Boss: Beast Challenge</td>
              <td>5 ก.ย. – 12 ก.ย. 2025</td>
              <td>ทอง, Rare Prism, Event CE</td>
              <td>
                ผู้เล่นต้องช่วยกันทำดาเมจรวมทั่วเซิร์ฟเวอร์ กำจัดบอสระดับ Beast
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* กล่องพื้นหลังฟ้าอ่อน */}
      <div
        style={{
          backgroundColor: "#e6f7ff",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h2>📅 กิจกรรมที่กำลังจะมาถึง (Upcoming Events)</h2>
        <table border="1" cellPadding="8" cellSpacing="0" width="100%">
          <thead>
            <tr style={{ backgroundColor: "#cceeff" }}>
              <th>📌 ชื่อกิจกรรม</th>
              <th>📅 ช่วงเวลา</th>
              <th>🎁 รางวัลหลัก</th>
              <th>📝 รายละเอียด</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>🌸 Event Collaboration พิเศษ</td>
              <td>20 ก.ย. – 5 ต.ค. 2025</td>
              <td>CE พิเศษ, ตัวละครลิมิต</td>
              <td>
                อีเวนต์ร่วมกับอนิเมะชื่อดัง มีระบบเควสเฉพาะ + ตัวละคร Collaboration
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* กล่องพื้นหลังฟ้าอ่อน */}
      <div
        style={{
          backgroundColor: "#e6f7ff",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        <h2>📚 กิจกรรมที่ผ่านมา (Past Events / Archive)</h2>
        <table border="1" cellPadding="8" cellSpacing="0" width="100%">
          <thead>
            <tr style={{ backgroundColor: "#cceeff" }}>
              <th>📌 ชื่อกิจกรรม</th>
              <th>📅 ช่วงเวลา</th>
              <th>🎁 รางวัลหลัก</th>
              <th>📝 รายละเอียด</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>🏆 Summer Festival 2025</td>
              <td>1 ส.ค. – 20 ส.ค. 2025</td>
              <td>เพชร, Event CE, Costume</td>
              <td>อีเวนต์ฤดูร้อน พร้อมชุดพิเศษและกิจกรรมมินิเกม</td>
            </tr>
            <tr>
              <td>🎯 Hunting Quest</td>
              <td>25 ก.ค. – 30 ก.ค. 2025</td>
              <td>EXP Card, QP, Material</td>
              <td>เควสพิเศษ ฟาร์ม Material จากมอนสเตอร์</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Activities;
