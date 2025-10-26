import React from "react";

function Beginner() {
  return (
    <div className="page-container">
      <h1>🌟 Beginner Guide (คู่มือผู้เล่นใหม่ FGO)</h1>
      <div className="beginner-image">
        <img src="/pageimages/strategy.png" alt="FGO Strategy" />
      </div>
      <p>
        ในโลกของเกมมือถือชื่อดังอย่าง <strong>Fate/Grand Order (FGO)</strong>{" "}
        ผู้เล่นใหม่มักจะสับสนกับระบบที่ซับซ้อนและกลยุทธ์ที่หลากหลาย
        คู่มือนี้จะช่วยนำทางคุณไปสู่การเป็น <em>Master</em> ที่แข็งแกร่ง
      </p>

      <section>
        <h2>🚀 เริ่มต้นการเดินทาง</h2>
        <p>
          เมื่อเริ่มเล่น คุณจะได้รับ Servant แรกคือ{" "}
          <strong>Mash Kyrielight</strong> ซึ่งเป็นตัวละครสำคัญในเนื้อเรื่อง
          และเป็น Servant ที่แข็งแกร่งเหมาะสำหรับมือใหม่
        </p>

        <h3>สิ่งสำคัญที่ควรทำในช่วงแรก:</h3>
        <ul>
          <li>
            📖 <strong>ผ่านเนื้อเรื่องหลัก (Main Quest):</strong> เพื่อทำความเข้าใจเนื้อเรื่อง
            ระบบการต่อสู้ และรับ Saint Quartz กับไอเทมต่าง ๆ
          </li>
          <li>
            ⚔️ <strong>เรียนรู้ระบบการต่อสู้:</strong> ใช้การ์ด 3 ใบจาก 5 ใบในการโจมตี
            โดยการ์ดมี 3 แบบ:
            <ul>
              <li>🔴 Buster: ความเสียหายสูง</li>
              <li>🔵 Arts: เติมเกจ NP (Noble Phantasm)</li>
              <li>🟢 Quick: สร้างดาวคริติคอล</li>
            </ul>
            การเลือกการ์ดสีเดียวกัน 3 ใบจะเกิด{" "}
            <strong>Chain</strong> พร้อมโบนัสพิเศษ
          </li>
        </ul>
      </section>

      <section>
        <h2>💪 การพัฒนาตัวละคร (Servants)</h2>
        <ul>
          <li>
            📈 <strong>การเพิ่มเลเวล (Level Up):</strong> ใช้ EXP Cards
            เพื่อเพิ่มเลเวล หาได้จาก Daily Quest
          </li>
          <li>
            🌟 <strong>การอัปเกรดขั้น (Ascension):</strong> ใช้ไอเทม Ascension
            เพื่อปลดล็อคเลเวลสูงสุดและเปลี่ยนภาพตัวละคร
          </li>
          <li>
            🌀 <strong>สกิล (Skills):</strong> ใช้ Skill Materials
            เพื่ออัปเกรดสกิล เพิ่มความสามารถ
          </li>
          <li>
            💥 <strong>Noble Phantasm (NP):</strong> ท่าไม้ตายของ Servant
            ต้องเก็บเกจ NP ให้เต็มก่อนใช้
          </li>
        </ul>
      </section>

      <section>
        <h2>💎 การบริหารทรัพยากร</h2>
        <ul>
          <li>
            💎 <strong>Saint Quartz:</strong> ใช้สำหรับกาชา หาได้จากเควสและกิจกรรม
          </li>
          <li>
            🤝 <strong>Friend Points (FP):</strong> กาชาฟรีที่ให้ Servant 1-3 ดาว
            และ EXP Cards
          </li>
          <li>
            🎁 <strong>Ascension & Skill Materials:</strong> ของหายาก
            ใช้อย่างระมัดระวัง เลือกใช้กับตัวที่เล่นจริงจัง
          </li>
        </ul>
      </section>

      <section>
        <h2>📌 เคล็ดลับสำหรับผู้เล่นใหม่</h2>
        <ul>
          <li>
            👥 <strong>หาเพื่อน:</strong> ยืม Servant ของเพื่อนมาใช้ช่วยในการต่อสู้
          </li>
          <li>
            🔍 <strong>ศึกษาข้อมูล:</strong> มีเว็บไซต์/ชุมชนที่รวบรวมข้อมูล Servants
            และกิจกรรม ควรใช้เพื่อวางแผน
          </li>
          <li>
            🕐 <strong>ไม่ต้องรีบ:</strong> FGO เป็นเกมระยะยาว
            สนุกไปกับเนื้อเรื่องและกิจกรรม
          </li>
        </ul>
      </section>

      <p>
        ถ้าคุณมีคำถามเฉพาะเกี่ยวกับระบบ ตัวละคร หรือกิจกรรม
        สามารถถามเพิ่มเติมได้เลย ✨
      </p>
    </div>
  );
}

export default Beginner;
