import React from "react";
import "./Beginner.css"; // ✅ ใช้สไตล์เดิมได้เลย

function Beginner() {
  return (
    <div className="page-container">
      <h1>🌟 คู่มือผู้เล่นใหม่ FGO (Fate/Grand Order)</h1>
      <div className="beginner-image">
        <img src="/pageimages/beginner.png" alt="FGO Beginner" />
      </div>
      <p>
        สวัสดีชาวมาสเตอร์หน้าใหม่ (และหน้าเก่าที่กลับมาอีกครั้ง!) 🙌  
        ยินดีต้อนรับเข้าสู่โลกของ <strong>Fate/Grand Order</strong> หรือที่เราเรียกกันสั้น ๆ ว่า <em>FGO</em> —
        เกมแนว RPG กาชาเนื้อเรื่องเข้มที่หลายคนรักและหลายคนก็หัวร้อน 😂  
        ถ้าคุณเพิ่งเริ่ม หรืออยากกลับมาจับอีกทีหลังห่างไปนาน บทความนี้จะช่วยให้คุณรู้ว่าควรเริ่มตรงไหน
        ทำอะไรต่อดี และมีเทคนิคเล็ก ๆ น้อย ๆ ที่คนเล่นมานานอยากบอกต่อกัน
      </p>

      <h2>💫 1. เข้าใจระบบพื้นฐานก่อน</h2>
      <p>
        FGO เป็นเกมแนว “จัดทีม – วางแผน – ตีเป็นเทิร์น”  
        ซึ่งทุกตัวละคร (หรือที่เรียกว่า <strong>Servant</strong>) จะมีการ์ดโจมตี 5 ใบ
        แบ่งเป็น <strong>Buster (แดง)</strong> สำหรับแรง, <strong>Arts (น้ำเงิน)</strong> สำหรับชาร์จ NP,  
        และ <strong>Quick (เขียว)</strong> สำหรับสร้างดาวคริติคอล
      </p>
      <ul>
        <li>
          🔺 <strong>Buster</strong>: ตีแรงสุดแต่ไม่ช่วยชาร์จ NP  
        </li>
        <li>
          🔹 <strong>Arts</strong>: เพิ่มเกจ NP (ใช้ปล่อยท่าไม้ตาย)  
        </li>
        <li>
          🔸 <strong>Quick</strong>: ทำให้ได้ “ดาว” เพิ่มโอกาสคริติคอลเทิร์นหน้า  
        </li>
      </ul>
      <p>
        ถ้าเลือกการ์ดชนิดเดียวกัน 3 ใบ จะเกิด “Chain”  
        และถ้าเป็นการ์ดของ Servant คนเดียวกัน 3 ใบ จะเรียกว่า <strong>Brave Chain</strong> ซึ่งจะได้บัฟพิเศษอีก!
      </p>

      <h2>🧭 2. เริ่มเกมใหม่ควรทำอะไรบ้าง</h2>
      <ul>
        <li>
          🎁 เล่นเนื้อเรื่อง Prologue ให้จบ (เมือง Fuyuki) ก่อน — จะได้ Servant และ CE ฟรีหลายชิ้น  
        </li>
        <li>
          💎 <strong>Reroll</strong> ถ้าอยากได้ Servant ที่ชอบตั้งแต่แรก เช่น Artoria, Jeanne, หรือ Tamamo (แต่ไม่จำเป็นนะ!)  
        </li>
        <li>
          🔐 ผูกบัญชีด้วย Transfer Code หรือเชื่อมกับ Apple/Google ID — กันหายไว้ก่อนเลย สำคัญมาก!  
        </li>
        <li>
          🧑‍🤝‍🧑 เพิ่มเพื่อนที่มี Support ดี ๆ เช่น Waver, Merlin, หรือ Castoria จะช่วยผ่านด่านง่ายขึ้น  
        </li>
      </ul>

      <h2>⚔️ 3. ระบบคลาส (Class) เข้าใจง่าย ๆ</h2>
      <p>คลาสแต่ละแบบแพ้ทางกัน คล้าย “เป่ายิ้งฉุบ” เวอร์ชันดาบเวทมนตร์ 😂</p>
      <table className="class-table">
        <thead>
          <tr>
            <th>คลาส</th>
            <th>แพ้ทาง</th>
            <th>ได้เปรียบ</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Saber</td><td>Lancer</td><td>Archer</td></tr>
          <tr><td>Archer</td><td>Saber</td><td>Lancer</td></tr>
          <tr><td>Lancer</td><td>Archer</td><td>Saber</td></tr>
          <tr><td>Rider</td><td>Assassin</td><td>Caster</td></tr>
          <tr><td>Assassin</td><td>Caster</td><td>Rider</td></tr>
          <tr><td>Caster</td><td>Rider</td><td>Assassin</td></tr>
          <tr><td>Berserker</td><td>ทุกคลาส</td><td>ทุกคลาส (แต่ก็บอบบางสุด)</td></tr>
          <tr><td>Ruler / Avenger / Alter Ego ฯลฯ</td><td colSpan="2">มีระบบเฉพาะตัว (แพ้/ชนะเฉพาะบางคลาส)</td></tr>
        </tbody>
      </table>

      <h2>🧪 4. การอัปเกรดตัวละคร</h2>
      <p>
        หลังได้ Servant มา สิ่งที่ควรทำคือ “ปั้น” ให้เก่งขึ้น  
        ซึ่งใน FGO จะใช้ระบบ EXP Card (ไม่ใช่สู้แล้วอัปเลเวลแบบเกมทั่วไป)
      </p>
      <ul>
        <li>
          🧾 <strong>Level Up:</strong> ใช้ EXP Cards จาก Daily Quest “Ember Gathering”  
        </li>
        <li>
          🧙‍♀️ <strong>Ascension:</strong> ปลดเพดานเลเวลโดยใช้วัสดุเฉพาะของแต่ละตัว (เช่น Fang, Proof, Bone ฯลฯ)  
        </li>
        <li>
          💥 <strong>Skill Upgrade:</strong> ใช้ QP และวัสดุจำนวนมาก (อย่าอัปมั่ว ควรอัปสกิลหลักก่อน!)  
        </li>
        <li>
          🪶 <strong>NP Level:</strong> ได้จากการซ้ำ Servant ตัวเดิมในกาชา  
        </li>
      </ul>

      <h2>🎯 5. การจัดทีมเบื้องต้น</h2>
      <p>
        อย่าเน้นแต่ตัว 5 ดาวอย่างเดียว — ตัว 1–3 ดาวบางตัวเทพมากถ้าใช้ถูกจังหวะ  
        เช่น <strong>Arash</strong> ยิงเปิดเวฟแรกสุดแรง, <strong>Hans</strong> ให้บัฟแบบมินิ-Merlin,  
        หรือ <strong>Cu Chulainn</strong> ที่ถึกจนโดนเรียกว่า “อมตะ” 😂
      </p>
      <p>แนวทางจัดทีมง่าย ๆ:</p>
      <ul>
        <li>1 ตัวหลักโจมตี (DPS)</li>
        <li>1 ตัวซัพพอร์ตให้บัฟ (Support)</li>
        <li>1 ตัวช่วยป้องกันหรือเสริม NP</li>
      </ul>

      <h2>💰 6. ของสำคัญในเกม</h2>
      <ul>
        <li>
          💎 <strong>Saint Quartz:</strong> ไว้สุ่มกาชา (อย่าใช้เปลืองกับกาชา Event ถ้าไม่ได้อยากได้จริง ๆ)
        </li>
        <li>
          💰 <strong>QP:</strong> เงินในเกม ใช้แทบทุกอย่าง – อัปสกิล, Ascend, ฯลฯ
        </li>
        <li>
          📜 <strong>Mana Prism:</strong> จากการขาย EXP Card 3★ เอาไว้แลกของดีในร้าน Da Vinci
        </li>
        <li>
          🧭 <strong>Rare Prism:</strong> ได้จากขาย Servant 4★ ขึ้นไป (อย่าขายมั่ว!)
        </li>
      </ul>

      <h2>🔥 7. ภารกิจและกิจกรรม</h2>
      <p>
        ทุกวันจะมีเควสต์หมุนเวียน เช่น ฟาร์ม EXP, ฟาร์ม QP, ฟาร์มวัสดุ  
        ส่วนกิจกรรม (Event) มักมีเนื้อเรื่องแยกกับรางวัลพิเศษ — บางอันแจก Servant ฟรีด้วย!
      </p>
      <p>
        📅 อย่าลืมทำภารกิจประจำสัปดาห์ (Master Mission) ด้วย  
        เพราะของรางวัลอย่าง Saint Quartz Fragment มีค่ามากในระยะยาว
      </p>

      <h2>💡 8. เคล็ดลับสายฟรี (F2P)</h2>
      <ul>
        <li>เก็บ Saint Quartz ไว้รอ Banner ที่มีตัวที่อยากได้จริง ๆ</li>
        <li>ล็อก Servant / CE สำคัญทุกตัว ป้องกันขายทิ้ง</li>
        <li>เล่นกิจกรรมทุกครั้ง อย่าปล่อยผ่าน</li>
        <li>ใช้เพื่อนที่มี Support ดี ๆ เช่น Castoria หรือ Koyanskaya</li>
        <li>ตัว 3 ดาวดี ๆ ก็ใช้ได้ เช่น Robin Hood, Ushiwakamaru, Medea</li>
      </ul>

      <h2>🌍 9. เส้นทางแนะนำสำหรับผู้เล่นใหม่</h2>
      <ol>
        <li>จบเนื้อเรื่อง Fuyuki ให้เร็วที่สุด</li>
        <li>เก็บ EXP และ QP จาก Daily Quest</li>
        <li>อัปตัวหลัก 1 ตัวให้สุดก่อน</li>
        <li>ทำ Event ทุกครั้งเพื่อเก็บของฟรี</li>
        <li>สะสม Saint Quartz รอ Banner สำคัญ</li>
        <li>อ่าน Story ไปเรื่อย ๆ — เนื้อเรื่องดีมากกกกก ❤️</li>
      </ol>

      <h2>🎁 สรุปสั้น ๆ จากรุ่นพี่</h2>
      <blockquote>
        💬 “อย่าพยายามปั้นทุกตัวพร้อมกัน — เลือกตัวหลักก่อนแล้วค่อยขยายทีม”  
        💬 “เซิร์ฟนี้เล่นช้า แต่ของดีมีเวลาได้ครบแน่นอน”  
        💬 “เล่นเพราะชอบตัวละคร จะสนุกกว่าพยายามไล่เมต้า”
      </blockquote>

      <p>
        หวังว่าคู่มือนี้จะช่วยให้คุณเริ่มต้นได้ง่ายขึ้น 💪  
        ถ้าชอบแนวแนะนำแบบเพื่อนคุยแบบนี้ บอกได้เลยครับ — ผมจะเขียนภาคต่อ  
        “แนวทางผู้เล่นระดับกลาง” กับ “เทคนิคปั้นทีม Meta” ให้ด้วย 🔥
      </p>
    </div>
  );
}

export default Beginner;
