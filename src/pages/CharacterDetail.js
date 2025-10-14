// src/pages/CharacterDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";

// ข้อมูลตัวละคร 50 ตัว — skills (ชื่อ + รายละเอียด Lore+Gameplay) และ np (ชื่อ + รายละเอียด)
const characterData = [
  // --- 1-4 Saber ---
  {
    id: 1,
    name: "Artoria Pendragon",
    class: "Saber",
    skills: [
      { name: "Mana Burst (Flame)", effect: "เพิ่มพลังโจมตีแบบ Buster อย่างมาก 1 เทิร์น — Lore: การรวมพลังเวทของราชา" },
      { name: "Charisma", effect: "เพิ่ม ATK ให้ทีมเล็กน้อยหลายเทิร์น — Lore: ภาวะผู้นำของราชา" },
      { name: "Instinct", effect: "เพิ่ม Critical Star Gain และให้ Insight ในการเลือกเป้าหมาย — Lore: สัมผัสสัญชาตญาณรบ" }
    ],
    np: { name: "Excalibur", effect: "ปล่อยลำแสงศักดิ์สิทธิ์โจมตีหมู่ (Buster AoE) มีพลังทำลายสูง — Lore: ดาบแห่งแสงของราชา" },
    stats: "ATK ★★★★★ | HP ★★★★★",
    image: "../../images/char1.png",
    detail: "ราชาแห่งอัศวินผู้ถือ Excalibur เป็นสัญลักษณ์ของความยุติธรรมและความเสียสละ"
  },
  {
    id: 2,
    name: "Nero Claudius",
    class: "Saber",
    skills: [
      { name: "Imperial Privilege", effect: "สุ่มบัฟเพิ่ม ATK/NP Gain/DEF ให้ตนเอง 1 เทิร์น — Lore: สิทธิ์ของจักรพรรดิ" },
      { name: "Thrice-Setting Sun", effect: "เพิ่ม Critical Strength และ Buster Performance สั้นๆ — Lore: ความร้อนแรงของเวที" }
    ],
    np: { name: "Aestus Domus Aurea", effect: "โจมตีหมู่แบบ Buster พร้อมบัฟ ATK ให้ตนเองก่อนใช้ NP — Lore: พิธีกรรมโอเปร่าแห่งจักรพรรดิ" },
    stats: "ATK ★★★★☆ | HP ★★★★☆",
    image: "../../images/char2.png",
    detail: "จักรพรรดินีเนโร ผู้รักศิลปะและการแสดง แต่ก็มีพลังรบที่น่าเกรงขาม"
  },
  {
    id: 3,
    name: "Siegfried",
    class: "Saber",
    skills: [
      { name: "Dragon Slayer", effect: "เพิ่มความสามารถทำความเสียหายกับมอนสเตอร์/มังกร และเพิ่ม ATK เล็กน้อย" },
      { name: "Battle Continuation", effect: "เมื่อ HP เหลือน้อย จะมีโอกาสรอดและฟื้นสถานะบางอย่าง — Lore: ความทนทานของวีรบุรุษ" }
    ],
    np: { name: "Balmung", effect: "โจมตีเดี่ยวที่ทรงพลัง มีโอกาสลด DEF เป้าหมาย — Lore: ดาบแห่งผู้พิชิตมังกร" },
    stats: "ATK ★★★☆☆ | HP ★★★★☆",
    image: "../../images/char3.png",
    detail: "วีรบุรุษผู้ปราบมังกร ร่างกายทนทานต่อเวทมนตร์ และใจงาม"
  },
  {
    id: 4,
    name: "Okita Souji",
    class: "Saber",
    skills: [
      { name: "Shukuchi", effect: "เพิ่มความเร็วการเคลื่อนที่/โดดเข้าหาศัตรู ทำให้โจมตีครั้งแรกมีความเสียหายสูง" },
      { name: "Mind's Eye", effect: "เพิ่มความแม่นยำและ Critical Star Absorption ชั่วคราว — Lore: เทคนิคการยิงสังเกตการณ์" }
    ],
    np: { name: "Mumyo Sandanzuki", effect: "ชุดการโจมตีความเร็วสูงหลายครั้งไปยังศัตรูเดี่ยว (Arts/Quick mix) — Lore: ทักษะดาบขั้นสูง" },
    stats: "ATK ★★★★☆ | HP ★★★★☆",
    image: "../../images/char4.png",
    detail: "หัวหน้าหน่วยชินเซนงุมิ ผู้โจมตีด้วยความเร็วและความแม่นยำสูง"
  },

  // --- 5-8 Archer ---
  {
    id: 5,
    name: "EMIYA",
    class: "Archer",
    skills: [
      { name: "Projection", effect: "สร้างสำเนาอาวุธเพื่อใช้ต่อสู้ เพิ่ม NP Gauge เล็กน้อย — Lore: ความสามารถสร้างอาวุธจากภาพความทรงจำ" },
      { name: "Independent Action", effect: "เพิ่ม Self NP Gain / Critical potential เล็กน้อย" }
    ],
    np: { name: "Unlimited Blade Works", effect: "สร้างสนามอาวุธทวนทบ โจมตีศัตรูเป็นกลุ่ม/เดี่ยวตามเวอร์ชัน (Buster/Arts hybrid) — Lore: โลกจำลองของนักรบ" },
    stats: "ATK ★★★★☆ | HP ★★★☆☆",
    image: "../../images/char5.png",
    detail: "ผู้ที่รวบรวมอาวุธและใช้พลังจากโลกจำลองเป็นอาวุธโจมตี"
  },
  {
    id: 6,
    name: "Gilgamesh",
    class: "Archer",
    skills: [
      { name: "Golden Rule", effect: "เพิ่ม NP generation และ NP damage เล็กน้อย — Lore: การครอบครองสมบัติ" },
      { name: "Charisma", effect: "เพิ่ม ATK ให้ทีมในระยะสั้น — Lore: พลังดึงดูดของราชา" }
    ],
    np: { name: "Gate of Babylon", effect: "เรียกอาวุธในคลังโจมตีหมู่จำนวนมาก (Buster AoE) และสามารถกดลด DEF หรือ stun แบบ lore-driven ได้บางครั้ง" },
    stats: "ATK ★★★★★ | HP ★★★★☆",
    image: "../../images/char6.png",
    detail: "ราชาแห่งฮีโร่ ครอบครองคลังสมบัติและอาวุธมากมายจนไม่มีใครเทียบ"
  },
  {
    id: 7,
    name: "Atalanta",
    class: "Archer",
    skills: [
      { name: "Crossing Arcadia", effect: "เพิ่ม Quick performance และ Critical damage แก่ตัวเอง" },
      { name: "Independent Action", effect: "ช่วยให้ไม่พึ่งพามาสเตอร์มาก เพิ่มความคล่องตัวในสนาม" }
    ],
    np: { name: "Phoebus Catastrophe", effect: "โจมตีหมู่แบบ Quick-focused พร้อมโอกาสลด NP Gauge ศัตรู" },
    stats: "ATK ★★★☆☆ | HP ★★★★☆",
    image: "../../images/char7.png",
    detail: "นักล่าผู้ได้รับพรจากเทพ ชำนาญการโจมตีระยะไกลและความเร็ว"
  },
  {
    id: 8,
    name: "Robin Hood",
    class: "Archer",
    skills: [
      { name: "Sabotage", effect: "ลด ATK/DEF เป้าหมายหรือก่อเอฟเฟกต์ซุ่มโจมตี" },
      { name: "Independent Action", effect: "เพิ่มความอยู่รอดและการโจมตีแบบ surprise" }
    ],
    np: { name: "Yew Bow", effect: "ยิงระยะไกลแบบ ST/หอกพร้อมโอกาสติด DoT เล็กน้อย — Lore: ธนูแห่งผู้พิทักษ์ป่า" },
    stats: "ATK ★★★☆☆ | HP ★★★☆☆",
    image: "../../images/char8.png",
    detail: "วีรบุรุษแห่งป่าเชอร์วูด ใช้เทคนิคซุ่มโจมตีและพิษ"
  },

  // --- 9-12 Lancer ---
  {
    id: 9,
    name: "Cu Chulainn",
    class: "Lancer",
    skills: [
      { name: "Battle Continuation", effect: "มีโอกาสฟื้นขึ้นมาเมื่อถูกโจมตีจน HP เหลือน้อย — Lore: วิญญาณนักรบไม่ยอมแพ้" },
      { name: "Rune Magic", effect: "เสกแรนเพื่อเพิ่ม DEF หรือโจมตีพิเศษตามสถานการณ์" }
    ],
    np: { name: "Gáe Bolg", effect: "หอกคำสาปแทงทะลุเป้าหมายเดี่ยว (Quick ST) ที่มีโอกาสตี Critical/Ignore Defense — Lore: หอกที่ลงโทษหัวใจ" },
    stats: "ATK ★★★★☆ | HP ★★★★☆",
    image: "../../images/char9.png",
    detail: "นักรบไอริชที่เชี่ยวชาญการใช้หอกคำสาป มีความกล้าหาญและทักษะการต่อสู้สูง"
  },
  {
    id: 10,
    name: "Elizabeth Bathory",
    class: "Lancer",
    skills: [
      { name: "Innocent Monster", effect: "เพิ่ม NP Gain และการฟื้นฟู HP เล็กน้อย — Lore: ความไร้เดียงสาภายใต้หน้ากาก" },
      { name: "Torture Technique", effect: "เพิ่มความเสียหายแบบ DoT หรือเพิ่ม Damage vs Male enemies" }
    ],
    np: { name: "Bathory Erzsébet", effect: "โจมตีหมู่ด้วยพลังแห่งตำนาน มีโอกาสทำให้ศัตรูกลัว/ลด ATK" },
    stats: "ATK ★★★☆☆ | HP ★★★☆☆",
    image: "../../images/char10.png",
    detail: "ไอดอลผู้ได้รับแรงบันดาลใจจาก Countess Bathory ซึ่งมีเสน่ห์และความลับอันน่ากลัว"
  },
  {
    id: 11,
    name: "Karna",
    class: "Lancer",
    skills: [
      { name: "Mana Burst (Flame)", effect: "เพิ่ม ATK ของตนเองอย่างมากใน 1 เทิร์น — Lore: พลังแห่งบุตรของเทพ" },
      { name: "Uncrowned Arms Mastery", effect: "เพิ่มความแม่นยำ NP และโอกาส Critical ต่อศัตรูชนิด Divine/Dragon" }
    ],
    np: { name: "Vasavi Shakti", effect: "โจมตีเดี่ยวที่ทรงพลังแบบ Anti-Divine / High Damage ST พร้อมโอกาสลด NP Gauge ศัตรู" },
    stats: "ATK ★★★★★ | HP ★★★★☆",
    image: "../../images/char11.png",
    detail: "บุตรแห่งพระอาทิตย์ ผู้ถือหอกที่มีพลังทำลายล้างสูงและศักดิ์ศรีของวีรบุรุษ"
  },
  {
    id: 12,
    name: "Scathach",
    class: "Lancer",
    skills: [
      { name: "Wisdom of Dun Scaith", effect: "เพิ่ม NP damage และ Critical Strength ให้ตัวเอง" },
      { name: "Primordial Rune", effect: "เสก Rune ที่สร้างบัฟให้เพื่อน/ลด DEF ศัตรู" }
    ],
    np: { name: "Gáe Bolg Alternative", effect: "หอกขั้นสูงโจมตีหมู่/เดี่ยวด้วยการลงโทษจิตวิญญาณ — Lore: เทคนิคแห่งครูฝึก" },
    stats: "ATK ★★★★★ | HP ★★★★☆",
    image: "../../images/char12.png",
    detail: "หญิงผู้ฝึกนักรบและเชี่ยวชาญศาสตร์หอกขั้นสูง อาศัยในแดนนักรบ"
  },

  // --- 13-16 Caster ---
  {
    id: 13,
    name: "Medea",
    class: "Caster",
    skills: [
      { name: "Territory Creation", effect: "สร้างพื้นที่ที่เพิ่มความแรงของเวทหรือ NP สำหรับตนเอง" },
      { name: "Item Construction", effect: "สร้างเครื่องมือ/หยุดเวทของศัตรูชั่วคราว" }
    ],
    np: { name: "Rule Breaker", effect: "สกัดเส้นเวทหรือยกเลิกการผนึก/Bind ของศัตรู มีผลลบต่อ Enchantments" },
    stats: "ATK ★★★☆☆ | HP ★★★☆☆",
    image: "../../images/char13.png",
    detail: "แม่มดแห่งโคลชิส เชี่ยวชาญคาถาชนิดทำลายวงเวทและการหนี"
  },
  {
    id: 14,
    name: "Tamamo no Mae",
    class: "Caster",
    skills: [
      { name: "Curse", effect: "ใส่สถานะลด ATK/DEF ให้ศัตรู หรือเรียกบัฟฟื้นฟูให้ทีม" },
      { name: "Fox’s Wedding", effect: "ให้บัฟฟื้นฟู HP/NP และเพิ่ม Arts performance ให้ทีม" }
    ],
    np: { name: "Eightfold Blessings of Amaterasu", effect: "ฟื้นฟู HP ให้เพื่อนทีมและมอบ NP per turn พร้อมบัฟการโจมตี" },
    stats: "ATK ★★★★☆ | HP ★★★★★",
    image: "../../images/char14.png",
    detail: "ปีศาจจิ้งจอกทรงพลังที่ผสมผสานความงามและเวทฟื้นฟูได้อย่างเก่งกาจ"
  },
  {
    id: 15,
    name: "Merlin",
    class: "Caster",
    skills: [
      { name: "Hero Creation", effect: "เพิ่ม Buster/ATK และ Max HP ให้เป้าหมายหนึ่งตัวเป็นเวลานาน" },
      { name: "Illusion", effect: "ให้บัฟ Incapacitate/Invulnerability/Heal แบบชั่วคราวแก่ทีม" },
      { name: "Dreamlike Charisma", effect: "เพิ่ม NP Gauge ให้เพื่อนร่วมทีมและเพิ่ม ATK" }
    ],
    np: { name: "Garden of Avalon", effect: "สร้างสนามแห่งการฟื้นฟู: ฟื้น HP, ให้ NP Per Turn และลบดีบัฟ — Lore: สวนในตำนาน" },
    stats: "ATK ★★★★★ | HP ★★★★★",
    image: "../../images/char15.png",
    detail: "พ่อมดแห่งตำนาน ผู้ให้การสนับสนุนทีมอย่างครอบคลุมทั้งการฟื้นฟูและการบัฟ"
  },
  {
    id: 16,
    name: "Nitocris",
    class: "Caster",
    skills: [
      { name: "Egypt Magecraft", effect: "เพิ่ม Arts performance และเพิ่มโอกาส Stun ให้เป้าหมาย" }
    ],
    np: { name: "Anpu Neb Ta Djeser", effect: "ปล่อยเวทพิพากษาแบบ AoE ที่อาจทำให้ศัตรูถูกมึนงงหรือโดน DoT — Lore: พลังแห่งเทพอียิปต์" },
    stats: "ATK ★★★★☆ | HP ★★★☆☆",
    image: "../../images/char16.png",
    detail: "ราชินีแห่งอียิปต์ ผู้ใช้เวทพิพากษาและพิธีกรรมโบราณในการต่อสู้"
  },

  // --- 17-20 Assassin ---
  {
    id: 17,
    name: "Hassan of the Cursed Arm",
    class: "Assassin",
    skills: [
      { name: "Presence Concealment", effect: "ลดการถูกตรวจจับ เพิ่มโจมตีแบบ Surprise และ Critical Chance" }
    ],
    np: { name: "Zabaniya", effect: "สังหารเป้าหมายเดี่ยวด้วยเวทที่ขจัดความเป็นอยู่ของศัตรู — Lore: เทคนิคมืดแห่งนิกาย" },
    stats: "ATK ★★★☆☆ | HP ★★★☆☆",
    image: "../../images/char17.png",
    detail: "มือสังหารผู้ลึกลับจากนิกายฮัสซัน ผู้จู่โจมด้วยความเงียบและความแม่นยำ"
  },
  {
    id: 18,
    name: "Shuten-Douji",
    class: "Assassin",
    skills: [
      { name: "Demonic Nature", effect: "เพิ่ม ATK และลดการถูกควบคุมสถานะบางชนิด" },
      { name: "Wine of the Oni", effect: "สร้าง DoT หรือทำให้ศัตรูหลงใหลชั่วคราว" }
    ],
    np: { name: "Multitude of Colors", effect: "ปล่อยคลื่นแห่งพิษและความมึนงงโจมตีศัตรูหมู่ มีโอกาสติด Charm/Poison — Lore: พลังแห่งอสูร" },
    stats: "ATK ★★★★☆ | HP ★★★☆☆",
    image: "../../images/char18.png",
    detail: "อสูรสาวผู้ดื่มเหล้าและมีพลังทำลายสูง ผสมความงามและอันตราย"
  },
  {
    id: 19,
    name: "Jack the Ripper",
    class: "Assassin",
    skills: [
      { name: "Murderer on the Misty Night", effect: "เพิ่ม Critical Damage และเพิ่ม Evade / Stealth ชั่วคราว" }
    ],
    np: { name: "Maria the Ripper", effect: "ชุดการโจมตีสั้นต่อเป้าหมายเดี่ยวพร้อมเพิ่ม Critical Damage และ DoT — Lore: ความโหดร้ายที่ห่อหุ้มด้วยปริศนา" },
    stats: "ATK ★★★★☆ | HP ★★★☆☆",
    image: "../../images/char19.png",
    detail: "มือสังหารหญิงลึกลับจากลอนดอน ผู้โจมตีอย่างรวดเร็วและเลือดเย็น"
  },
  {
    id: 20,
    name: "Okada Izo",
    class: "Assassin",
    skills: [
      { name: "Man-Slayer", effect: "เพิ่ม Bonus Damage ต่อมนุษย์/เพิ่ม Critical Rate เล็กน้อย" }
    ],
    np: { name: "Man-Slayer’s Blade", effect: "โจมตีเดี่ยวแบบ Quick/ST ที่มีความเสียหายเพิ่มต่อมนุษย์ — Lore: ดาบของนักฆ่า" },
    stats: "ATK ★★★☆☆ | HP ★★★☆☆",
    image: "../../images/char20.png",
    detail: "นักดาบแห่งยุคบาคุมัตสึ ผู้เชี่ยวชาญการจู่โจมแบบปิดเสียง"
  },

  // --- 21-24 Berserker ---
  {
    id: 21,
    name: "Heracles",
    class: "Berserker",
    skills: [
      { name: "Mad Enhancement", effect: "เพิ่ม ATK อย่างมากแลกกับการลดความสามารถในการควบคุมตัวเอง" },
      { name: "Battle Continuation", effect: "มีความสามารถฟื้นตัว/ลดความเสียหายครั้งสุดท้าย" }
    ],
    np: { name: "Nine Lives", effect: "ชุดการโจมตีรุนแรงหลายครั้งที่ลด HP ศัตรูและอาจทำให้ติด DoT — Lore: พลังเหนือธรรมชาติของวีรบุรุษ" },
    stats: "ATK ★★★★★ | HP ★★★★☆",
    image: "../../images/char21.png",
    detail: "ฮีโร่แห่งตำนานที่มีพลังและความคงทนเหนือธรรมชาติ ผ่านการทดสอบ 12 ครั้ง"
  },
  {
    id: 22,
    name: "Kiyohime",
    class: "Berserker",
    skills: [
      { name: "Stalking", effect: "เพิ่มความสามารถติดตามและเพิ่ม Damage vs Single Target" },
      { name: "Mad Enhancement", effect: "เพิ่ม ATK แต่ลดการควบคุมตัวเอง" }
    ],
    np: { name: "Transform Flaming Mountain", effect: "เปลี่ยนร่างเป็นมังกรไฟ โจมตีหมู่ด้วยไฟและความแค้น — Lore: การกลายร่างของจิตใจ" },
    stats: "ATK ★★★☆☆ | HP ★★★☆☆",
    image: "../../images/char22.png",
    detail: "หญิงผู้แปรเปลี่ยนเป็นมังกรแห่งความแค้น ใช้ไฟทำลายล้างและจู่โจมด้วยความหฤโหด"
  },
  {
    id: 23,
    name: "Ibaraki-Douji",
    class: "Berserker",
    skills: [
      { name: "Demonic Strength", effect: "เพิ่ม ATK แบบถาวรหรือชั่วคราวอย่างมาก และอาจลด DEF ของศัตรู" }
    ],
    np: { name: "Great Grudge of Rashomon", effect: "โจมตีหมู่ด้วยพลังยักษ์ โอกาสทำให้ศัตรูติด Fear/Charm" },
    stats: "ATK ★★★★☆ | HP ★★★☆☆",
    image: "../../images/char23.png",
    detail: "ยักษ์สาวจากตำนานญี่ปุ่น ผู้ใช้กำลังและความบ้าคลั่งบุกทำลายศัตรู"
  },
  {
    id: 24,
    name: "Minamoto no Raikou",
    class: "Berserker",
    skills: [
      { name: "Mana Burst", effect: "เพิ่ม ATK แบบสายฟ้าสั้นๆ และเพิ่ม Critical Damage" },
      { name: "Mad Enhancement", effect: "พลังโจมตีสูงขึ้นแต่ควบคุมยาก" }
    ],
    np: { name: "Vengeful Lightning of the Ox-King", effect: "โจมตีหมู่ด้วยสายฟ้า สร้างความเสียหายสูงและมีโอกาส Paralysis" },
    stats: "ATK ★★★★★ | HP ★★★★☆",
    image: "../../images/char24.png",
    detail: "นักรบหญิงที่เรียกพลังสายฟ้า มาพร้อมความโกรธและความเร็วในการโจมตี"
  },

  // --- 25-28 Rider ---
  {
    id: 25,
    name: "Medusa",
    class: "Rider",
    skills: [
      { name: "Mystic Eyes", effect: "มีโอกาสสตันหรือลด ATK ของศัตรูเมื่อโจมตี" },
      { name: "Riding", effect: "เพิ่ม NP Gain และ Quick performance ขณะขี่พาหนะ" }
    ],
    np: { name: "Bellerophon", effect: "เรียกหาพาหนะโจมตีเป้าหมายเดี่ยว/หมู่ แบบ ST/Hybrid ขึ้นกับเวอร์ชัน — Lore: ม้าเทพบาลเลอรอฟ" },
    stats: "ATK ★★★★☆ | HP ★★★★☆",
    image: "../../images/char25.png",
    detail: "หญิงแห่งตำนานโกร์กอน การโจมตีผสมระหว่างเสน่ห์และสายตาทรงพลัง"
  },
  {
    id: 26,
    name: "Iskandar",
    class: "Rider",
    skills: [
      { name: "Charisma", effect: "เพิ่ม ATK ให้ทีมเป็นจำนวนมาก — Lore: พลังผู้นำของมหาอำนาจ" },
      { name: "Lightning Conqueror", effect: "เพิ่ม NP gain และความต่อเนื่องในสนามรบ" }
    ],
    np: { name: "Ionioi Hetairoi", effect: "เรียกกองทัพเพื่อนร่วมรบโจมตีหมู่ด้วยพลัง Buster และเพิ่ม ATK ให้ทีมชั่วคราว — Lore: พลังของทหารผู้ภักดี" },
    stats: "ATK ★★★★★ | HP ★★★★☆",
    image: "../../images/char26.png",
    detail: "มหาราชผู้ชักนำกองทัพและใช้พลังมวลชนเป็นอาวุธใน Noble Phantasm"
  },
  {
    id: 27,
    name: "Astolfo",
    class: "Rider",
    skills: [
      { name: "Evaporation of Sanity", effect: "ทำให้ศัตรูสับสน/ลดการต้านทานและเพิ่ม Buff ให้เพื่อนบางประเภท" }
    ],
    np: { name: "Hippogriff", effect: "เรียก Hipppogriff โจมตีหมู่/เดี่ยว มีผล Debuff เล็กน้อย — Lore: การขี่สิ่งมีชีวิตสุดแปลก" },
    stats: "ATK ★★★★☆ | HP ★★★☆☆",
    image: "../../images/char27.png",
    detail: "อัศวินขี้เล่น ผู้มาพร้อมโชคและความสามารถไม่คาดคิด"
  },
  {
    id: 28,
    name: "Ozymandias",
    class: "Rider",
    skills: [
      { name: "Imperial Privilege", effect: "สุ่มบัฟเพิ่ม DEF / ATK / NP Gain ให้ตัวเองและบางครั้งทีม" }
    ],
    np: { name: "Ramesseum Tentyris", effect: "สร้างทรัพยากรแห่งชาติ: โจมตีหมู่และมอบบัฟฟื้นฟู/Regeneration ให้ทีม — Lore: อำนาจฟาโรห์" },
    stats: "ATK ★★★★★ | HP ★★★★★",
    image: "../../images/char28.png",
    detail: "ฟาโรห์ผู้ยิ่งใหญ่ ใช้พลังแห่งอาณาจักรและการปกครองเพื่อสนับสนุนทีม"
  },

  // --- 29-31 Ruler ---
  {
    id: 29,
    name: "Jeanne d’Arc",
    class: "Ruler",
    skills: [
      { name: "Revelation", effect: "เพิ่ม DEF/Resist และลดผลกระทบจาก Curse/Charm" },
      { name: "True Name Discernment", effect: "เปิดเผยจุดอ่อนศัตรู เพิ่มโอกาส Critical vs Enemies with hidden status" }
    ],
    np: { name: "Luminosité Eternelle", effect: "ปล่อยลำแสงปกป้องทีม ฟื้นฟู HP และมอบบัฟ DEF/Invincibility ระยะสั้น — Lore: แสงศักดิ์สิทธิ์ของนักบุญ" },
    stats: "ATK ★★★★☆ | HP ★★★★★",
    image: "../../images/char29.png",
    detail: "ผู้ถูกกล่าวขวัญเป็นนักบุญ ปกป้องผู้บริสุทธิ์และเอื้อเฟื้อต่อมิตร"
  },
  {
    id: 30,
    name: "Amakusa Shirou",
    class: "Ruler",
    skills: [
      { name: "Independent Manifestation", effect: "เพิ่ม NP gain และ Anti-Commandment effects" }
    ],
    np: { name: "Twin Arm – Big Crunch", effect: "โจมตีแบบ Mystic/Anti-Fortress มีผลทำลายหมู่พร้อมลด NP ของศัตรู" },
    stats: "ATK ★★★★☆ | HP ★★★★☆",
    image: "../../images/char30.png",
    detail: "นักบุญที่กลายเป็นผู้นำการต่อสู้ด้วยความเชื่อของตนเอง มีพลังทางศาสนาที่รุนแรง"
  },
    {
    id: 31,
    name: "Okita Souji",
    class: "Saber",
    image: "../../images/char31.png",
    skills: [
      { name: "Shukuchi", effect: "เพิ่มความเร็วและ Critical Rate ชั่วคราว" },
      { name: "Mumyou Sandanzuki", effect: "เพิ่ม Quick Card และพลังโจมตีในเทิร์นเดียว" },
      { name: "Mind's Eye (Fake)", effect: "เพิ่มการหลบหลีกและพลังโจมตี" }
    ],
    np: { name: "Mumyo Sandanzuki", effect: "โจมตีศัตรูเดี่ยวด้วย Quick NP ความเสียหายรุนแรง" },
    stats: "ATK 11200 / HP 11900",
    detail: "นักดาบหญิงผู้เก่งกาจจากกลุ่มชินเซ็งงุมิ มีความเร็วและพลังโจมตีสูง"
  },
  {
    id: 32,
    name: "Oda Nobunaga",
    class: "Archer",
    image: "../../images/char32.png",
    skills: [
      { name: "Unifying the Nation by Force", effect: "เพิ่มพลังโจมตีต่อศัตรูประเภท Divine" },
      { name: "Demon King of the Sixth Heaven", effect: "ลด DEF ของศัตรูทั้งหมด" },
      { name: "Strategy", effect: "เพิ่ม NP gain สำหรับทีม" }
    ],
    np: { name: "Three Thousand Worlds", effect: "โจมตีศัตรูทั้งหมดด้วยพลังศักดิ์สิทธิ์ต่อต้าน Divine" },
    stats: "ATK 10600 / HP 11850",
    detail: "แม่ทัพจอมเผด็จการจากยุคเซ็งโงะกุ ผู้ใช้ปืนและอำนาจแห่งไฟ"
  },
  {
    id: 33,
    name: "Katsushika Hokusai",
    class: "Foreigner",
    image: "../../images/char33.png",
    skills: [
      { name: "Eternal Masterpiece", effect: "เพิ่มพลังโจมตี Arts ของทีมทั้งหมด" },
      { name: "Great Wave", effect: "ลด DEF ของศัตรูทั้งหมด" },
      { name: "Ink Splash", effect: "เพิ่ม NP gain และ Critical Damage" }
    ],
    np: { name: "Thirty-Six Views of Mount Fuji", effect: "โจมตีศัตรูทั้งหมดด้วย Arts NP และลด DEF" },
    stats: "ATK 11300 / HP 12900",
    detail: "ศิลปินผู้ใช้พลังของ Lovecraftian Entity มาสร้างผลงานศิลป์ในสนามรบ"
  },
  {
    id: 34,
    name: "Scathach-Skadi",
    class: "Caster",
    image: "../../images/char34.png",
    skills: [
      { name: "Primordial Rune", effect: "เพิ่ม Quick Card Efficiency และ Critical Strength ให้ทีม" },
      { name: "Wisdom of Dun Scaith", effect: "เพิ่ม NP gain และพลังป้องกัน" },
      { name: "Allfather’s Blessing", effect: "เพิ่ม NP สำหรับเพื่อนร่วมทีม" }
    ],
    np: { name: "Gate of Skye", effect: "เพิ่มพลัง Quick และ DEF ของทีมทั้งหมด" },
    stats: "ATK 10500 / HP 14000",
    detail: "เทพธิดาผู้สืบทอดจากสกาฮะ ผู้มอบพลังแห่งความหนาวเหน็บและกลยุทธ์"
  },
  {
    id: 35,
    name: "Ereshkigal",
    class: "Lancer",
    image: "../../images/char35.png",
    skills: [
      { name: "Mana Burst (Cage)", effect: "เพิ่มพลังโจมตีและ DEF" },
      { name: "Blessing of Kur", effect: "เพิ่ม NP gain และพลังป้องกันให้ทีม" },
      { name: "Mystic Eyes of Venus", effect: "เพิ่ม HP ให้ทีมทั้งหมด" }
    ],
    np: { name: "Kur Kigal Irkalla", effect: "โจมตีศัตรูทั้งหมดและเพิ่ม DEF ให้ทีม" },
    stats: "ATK 10700 / HP 13600",
    detail: "เทพธิดาแห่งยมโลกจากเมโสโปเตเมีย ผู้ควบคุมพลังแห่งชีวิตและความตาย"
  },
  {
    id: 36,
    name: "Ishtar",
    class: "Archer",
    image: "../../images/char36.png",
    skills: [
      { name: "Manifestation of Venus", effect: "เพิ่มพลังโจมตีและ Critical Damage" },
      { name: "Mana Burst (Gem)", effect: "เพิ่ม Buster Power" },
      { name: "Goddess’ Essence", effect: "เพิ่ม NP gauge ของตนเองทันที" }
    ],
    np: { name: "An Gal Ta Seven", effect: "โจมตีศัตรูทั้งหมดด้วยพลัง Buster" },
    stats: "ATK 11700 / HP 13000",
    detail: "เทพีแห่งความรักและสงคราม ใช้พลังของดาวศุกร์เพื่อโจมตีศัตรูอย่างสง่างาม"
  },
  {
    id: 37,
    name: "Merlin",
    class: "Caster",
    image: "../../images/char37.png",
    skills: [
      { name: "Dreamlike Charisma", effect: "เพิ่มพลังโจมตีให้ทีม" },
      { name: "Illusion", effect: "เพิ่ม Critical Stars และ HP ต่อเทิร์น" },
      { name: "Hero Creation", effect: "เพิ่ม Buster และ Critical Damage แก่เพื่อนร่วมทีม" }
    ],
    np: { name: "Garden of Avalon", effect: "ฟื้นฟู HP และเพิ่ม NP ต่อเทิร์นให้ทีมทั้งหมด" },
    stats: "ATK 10500 / HP 14000",
    detail: "พ่อมดผู้เป็นตำนานแห่งกษัตริย์อาเธอร์ มอบพลังสนับสนุนอันไร้เทียมทาน"
  },
  {
    id: 38,
    name: "Morgan le Fay",
    class: "Berserker",
    image: "../../images/char38.png",
    skills: [
      { name: "Fairy Queen’s Command", effect: "เพิ่มพลังโจมตีและ NP gain ของทีม" },
      { name: "Dark Blessing", effect: "ลด DEF ศัตรูและเพิ่ม Critical Rate ของตน" },
      { name: "Royal Authority", effect: "เพิ่ม NP ทันที 20%" }
    ],
    np: { name: "Excalibur Morgan", effect: "โจมตีศัตรูทั้งหมดด้วยพลังมืดของ Excalibur" },
    stats: "ATK 12200 / HP 12500",
    detail: "ราชินีแห่ง Avalon ผู้ใช้พลังแห่งความมืดและความโกรธของโลก"
  },
  {
    id: 39,
    name: "Melusine",
    class: "Lancer",
    image: "../../images/char39.png",
    skills: [
      { name: "Fairy Transformation", effect: "สลับ Class และเพิ่มพลังโจมตีสูงสุด" },
      { name: "Draconic Energy", effect: "เพิ่ม NP gain และ DEF" },
      { name: "Glory of Albion", effect: "เพิ่ม ATK และ Quick Power" }
    ],
    np: { name: "Faerie Knight Galatine", effect: "โจมตีศัตรูเดี่ยวอย่างรุนแรงด้วยพลังมังกร" },
    stats: "ATK 12000 / HP 12300",
    detail: "อัศวินนางฟ้าแห่งรัชสมัย Fairy Britain ผู้มีสองร่างระหว่างมนุษย์กับมังกร"
  },
  {
    id: 40,
    name: "Mash Kyrielight (Ortinax)",
    class: "Shielder",
    image: "../../images/char40.png",
    skills: [
      { name: "Shield of Humanity", effect: "เพิ่ม DEF ของทีมทั้งหมด" },
      { name: "Obscurant Wall of Chalk", effect: "ลดความเสียหายจากศัตรูทั้งหมด" },
      { name: "Iron Determination", effect: "เพิ่ม NP gauge และฟื้นฟู HP" }
    ],
    np: { name: "Lord Camelot", effect: "เพิ่ม DEF และต้านทานความเสียหายให้ทีมทั้งหมด" },
    stats: "ATK 9500 / HP 15500",
    detail: "ผู้พิทักษ์แห่ง Chaldea ที่อุทิศชีวิตเพื่อปกป้องมนุษยชาติ"
  },
  {
    id: 41,
    name: "Muramasa",
    class: "Saber",
    image: "../../images/char41.png",
    skills: [
      { name: "Forged Blade", effect: "เพิ่ม Arts Power และ Ignore Invincibility" },
      { name: "Swordsmith’s Insight", effect: "ลด DEF ของศัตรู" },
      { name: "Anvil of Destiny", effect: "เพิ่ม NP ทันที 30%" }
    ],
    np: { name: "Tsumugari Muramasa", effect: "โจมตีศัตรูทั้งหมดด้วย Arts NP และ Ignore DEF" },
    stats: "ATK 11800 / HP 12600",
    detail: "ช่างตีดาบในตำนาน ผู้แปรพลังแห่งดาบให้กลายเป็นเวทมนตร์"
  },
  {
    id: 42,
    name: "Kama",
    class: "Assassin",
    image: "../../images/char42.png",
    skills: [
      { name: "Love’s Poison", effect: "ลด ATK ศัตรูและเพิ่ม NP gain" },
      { name: "Eternal Desire", effect: "เพิ่ม NP gauge และพลังโจมตี" },
      { name: "Demonic Seduction", effect: "เพิ่ม Critical Rate และลด DEF ของศัตรู" }
    ],
    np: { name: "Mara Papiyas", effect: "โจมตีศัตรูเดี่ยวด้วยพลังแห่งความปรารถนา" },
    stats: "ATK 11400 / HP 12600",
    detail: "เทพีแห่งความรักผู้มืดมน ผสานความปรารถนาและการทำลายเข้าด้วยกัน"
  },
  {
    id: 43,
    name: "Space Ishtar",
    class: "Avenger",
    image: "../../images/char43.png",
    skills: [
      { name: "Universe Manifestation", effect: "เปลี่ยน NP Card Type ได้ตามต้องการ" },
      { name: "Cosmic Charisma", effect: "เพิ่ม ATK ให้ทีมทั้งหมด" },
      { name: "Venus Drive", effect: "เพิ่ม NP ทันที 30%" }
    ],
    np: { name: "Edin Shugurra Quasar", effect: "โจมตีศัตรูทั้งหมดด้วย NP ที่เปลี่ยนได้ทุกแบบ" },
    stats: "ATK 12000 / HP 12800",
    detail: "เทพีจากห้วงจักรวาลที่แปลงพลังแห่งดาวศุกร์เป็นพลังแห่งอวกาศ"
  },
  {
    id: 44,
    name: "Arjuna Alter",
    class: "Berserker",
    image: "../../images/char44.png",
    skills: [
      { name: "Mahapralaya", effect: "เพิ่มพลังโจมตีมหาศาลและ HP regen" },
      { name: "Universe Cycle", effect: "ลด DEF ของศัตรูทั้งหมด" },
      { name: "Divine Core", effect: "ต้านทาน Debuff และเพิ่ม NP" }
    ],
    np: { name: "Mahapralaya", effect: "โจมตีศัตรูทั้งหมดด้วย Buster NP รุนแรง" },
    stats: "ATK 12400 / HP 12100",
    detail: "อัศวินแห่งการทำลายล้าง ผู้ได้รับพลังจากพระเจ้าเพื่อกวาดล้างทุกสิ่ง"
  },
  {
    id: 45,
    name: "Oberon",
    class: "Pretender",
    image: "../../images/char45.png",
    skills: [
      { name: "King’s Dream", effect: "เพิ่มพลังโจมตีและ NP gain ให้ทีมทั้งหมด" },
      { name: "Fairy’s Illusion", effect: "เพิ่ม NP gauge 20% และลด DEF ศัตรู" },
      { name: "Eternal Slumber", effect: "เพิ่มพลัง NP Damage ชั่วคราว" }
    ],
    np: { name: "Night’s Dream", effect: "เพิ่มพลังโจมตีของทีมทั้งหมดก่อนลด ATK หลังเทิร์น" },
    stats: "ATK 10800 / HP 13800",
    detail: "ราชาแห่งภูตที่ควบคุมความฝันและความสิ้นหวังในเวลาเดียวกัน"
  },
  {
    id: 46,
    name: "Cú Chulainn (Alter)",
    class: "Berserker",
    image: "../../images/char46.png",
    skills: [
      { name: "Madness Enhancement", effect: "เพิ่มพลังโจมตีและ Critical" },
      { name: "Battle Continuation", effect: "ฟื้นคืนชีพเมื่อ HP หมด" },
      { name: "Protection from Arrows", effect: "เพิ่มการหลบหลีกชั่วคราว" }
    ],
    np: { name: "Curruid Coinchenn", effect: "โจมตีศัตรูเดี่ยวด้วย NP ที่ Ignore DEF" },
    stats: "ATK 11800 / HP 12100",
    detail: "อัศวินผู้สูญสิ้นความเป็นมนุษย์ เหลือเพียงสัญชาตญาณนักรบ"
  },
  {
    id: 47,
    name: "Kingprotea",
    class: "Alter Ego",
    image: "../../images/char47.png",
    skills: [
      { name: "Growth", effect: "เพิ่ม HP ต่อเทิร์นอย่างถาวร" },
      { name: "Monstrous Strength", effect: "เพิ่มพลังโจมตีมหาศาล" },
      { name: "Macrocosmos", effect: "ลด DEF ศัตรูทั้งหมด" }
    ],
    np: { name: "Sapientia", effect: "โจมตีศัตรูทั้งหมดตามขนาดร่างกายที่เติบโต" },
    stats: "ATK 11200 / HP 16800",
    detail: "สาวยักษ์ในร่างเด็กหญิง ผู้เติบโตไม่หยุดและมีพลังเหนือมนุษย์"
  },
  {
    id: 48,
    name: "BB (Summer)",
    class: "MoonCancer",
    image: "../../images/char48.png",
    skills: [
      { name: "Summer Splash", effect: "สับเปลี่ยนการ์ดและเพิ่ม NP gauge" },
      { name: "Goddess’ Play", effect: "เพิ่ม Critical Rate และ NP Damage" },
      { name: "BB Slot", effect: "ล็อกการ์ดในเทิร์นถัดไป" }
    ],
    np: { name: "C.C.C. Moon Cancer", effect: "โจมตีศัตรูทั้งหมดด้วย Arts NP" },
    stats: "ATK 10900 / HP 13900",
    detail: "AI แสนซนผู้ควบคุมความเป็นจริงและเล่นสนุกกับ Master ตามใจ"
  },
  {
    id: 49,
    name: "Jeanne d’Arc (Alter)",
    class: "Avenger",
    image: "../../images/char49.png",
    skills: [
      { name: "Self-Modification", effect: "เพิ่ม Critical Damage" },
      { name: "Demonic Drive", effect: "เพิ่ม ATK และ NP gain" },
      { name: "Dragon Witch", effect: "เพิ่มพลังโจมตีของทีมที่เป็นมังกร" }
    ],
    np: { name: "La Grondement Du Haine", effect: "โจมตีศัตรูทั้งหมดด้วย Buster NP" },
    stats: "ATK 12000 / HP 12600",
    detail: "อัศวินสาวผู้กลับชาติมาเกิดด้วยความแค้นและความเกลียดชัง"
  },
  {
    id: 50,
    name: "Artoria Pendragon (Ruler)",
    class: "Ruler",
    image: "../../images/char50.png",
    skills: [
      { name: "Charisma of the King", effect: "เพิ่ม ATK ให้ทีมทั้งหมด" },
      { name: "Mana Burst (Holy)", effect: "เพิ่ม Buster Power มหาศาล" },
      { name: "King’s Resolve", effect: "เพิ่ม NP gauge และต้านทาน Debuff" }
    ],
    np: { name: "Excalibur Luminos", effect: "โจมตีศัตรูทั้งหมดด้วยแสงศักดิ์สิทธิ์" },
    stats: "ATK 12100 / HP 13000",
    detail: "กษัตริย์ผู้กลับมาพร้อมพลังแห่งความศรัทธาและความยุติธรรม"
  }
];



function CharacterDetail() {
  const { id } = useParams();
  const character = characterData.find((c) => c.id === parseInt(id, 10));

  if (!character) {
    return (
      <div className="page-container">
        <h1>Character Not Found</h1>
        <Link to="/characters">
          <button className="back-btn">⬅ Back to Characters</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1>{character.name}</h1>
<div style={{ textAlign: "center" }}>
  <img
    src={character.image}
    alt={character.name}
    style={{ width: "250px", borderRadius: "12px", marginBottom: "20px" }}
  />
</div>


      <p><b>Class:</b> {character.class}</p>

      <div>
        <b>Skills:</b>
        <ul>
          {character.skills.map((skill, idx) => (
            <li key={idx}>
              <b>{skill.name}</b> — {skill.effect}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <b>Noble Phantasm:</b>
        <p>
          <b>{character.np.name}</b> — {character.np.effect}
        </p>
      </div>

      <p><b>Stats:</b> {character.stats}</p>
      <p><b>Detail:</b> {character.detail}</p>

      <Link to="/characters">
        <button className="back-btn">⬅ Back to Characters</button>
      </Link>
    </div>
  );
}

export default CharacterDetail;
