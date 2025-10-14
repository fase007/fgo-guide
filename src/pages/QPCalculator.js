
// import React, { useEffect, useState } from "react";
// import "./QPCalculator.css";

// function QPCalculator() {
//   const [ces, setCes] = useState([]);
//   const [stages, setStages] = useState([]);
//   const [selectedStage, setSelectedStage] = useState("");
//   const [selectedCEs, setSelectedCEs] = useState(Array(5).fill(""));
//   const [mlbCEs, setMlbCEs] = useState(Array(5).fill(false));
//   const [supportCE, setSupportCE] = useState("");
//   const [mlbSupportCE, setMlbSupportCE] = useState(false);
//   const [result, setResult] = useState(null);

//   // โหลด CE + Stages จาก API Express
//   useEffect(() => {
//     // โหลด Craft Essences
//     fetch("http://localhost:8000/api/getData?type=craft_essences")
//       .then((res) => res.json())
//       .then((data) => setCes(data))
//       .catch((err) => console.error("Error loading CE:", err));

//     // โหลด QP Stages
//     fetch("http://localhost:8000/api/getData?type=qp_stages")
//       .then((res) => res.json())
//       .then((data) => setStages(data))
//       .catch((err) => console.error("Error loading Stage:", err));
//   }, []);


//   const handleCEChange = (index, value) => {
//     const newCEs = [...selectedCEs];
//     newCEs[index] = value;
//     setSelectedCEs(newCEs);
//   };

//   const handleMLBChange = (index, checked) => {
//     const newMLBs = [...mlbCEs];
//     newMLBs[index] = checked;
//     setMlbCEs(newMLBs);
//   };

//   const calculateQP = () => {
//     let totalBonus = 0;
//     let baseQP = 0;

//     // ด่าน
//     const stage = stages.find((s) => s.id === selectedStage);
//     if (stage) baseQP = parseInt(stage.base_qp);

//     // CE ของเรา 5 ใบ
//     selectedCEs.forEach((ceId, i) => {
//       const ce = ces.find((c) => c.id === ceId);
//       if (ce) {
//         totalBonus += mlbCEs[i]
//           ? parseFloat(ce.bonus_mlb)
//           : parseFloat(ce.bonus_base);
//       }
//     });

//     // CE Support
//     const support = ces.find((c) => c.id === supportCE);
//     if (support) {
//       totalBonus += mlbSupportCE
//         ? parseFloat(support.bonus_mlb)
//         : parseFloat(support.bonus_base);
//     }

//     const totalQP = Math.floor(baseQP * (1 + totalBonus));
//     setResult(totalQP);
//   };

//   return (
//     <div className="page-container">
//       <h1>QP Calculator Tool ⚖️</h1>
//       <p>ใช้คำนวณ QP ที่ได้รับจากการฟาร์ม</p>

//       {/* เลือกด่าน */}
//       <div className="qp-row">
//         <label>เลือกด่านฟาร์ม:</label>
//         <select
//           value={selectedStage}
//           onChange={(e) => setSelectedStage(e.target.value)}
//         >
//           <option value="">-- เลือกด่าน --</option>
//           {stages.map((s) => (
//             <option key={s.id} value={s.id}>
//               {s.stage_name} (Base: {s.base_qp})
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* CE ของเรา */}
//       <div className="qp-row">
//         <label>Craft Essence ของเรา:</label>
//         <div className="ce-list">
//           {Array.from({ length: 5 }).map((_, index) => (
//             <div key={index} className="ce-slot">
//               <select
//                 value={selectedCEs[index]}
//                 onChange={(e) => handleCEChange(index, e.target.value)}
//               >
//                 <option value="">-- เลือก CE --</option>
//                 {ces.map((ce) => (
//                   <option key={ce.id} value={ce.id}>
//                     {ce.name}
//                   </option>
//                 ))}
//               </select>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={mlbCEs[index]}
//                   onChange={(e) => handleMLBChange(index, e.target.checked)}
//                 />
//                 MLB
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CE Support */}
//       <div className="qp-row">
//         <label>Craft Essence Support:</label>
//         <select
//           value={supportCE}
//           onChange={(e) => setSupportCE(e.target.value)}
//         >
//           <option value="">-- เลือก CE --</option>
//           {ces.map((ce) => (
//             <option key={ce.id} value={ce.id}>
//               {ce.name}
//             </option>
//           ))}
//         </select>
//         <label>
//           <input
//             type="checkbox"
//             checked={mlbSupportCE}
//             onChange={(e) => setMlbSupportCE(e.target.checked)}
//           />
//           MLB
//         </label>
//       </div>

//       <button onClick={calculateQP}>คำนวณ QP</button>

//       {result !== null && <h2>QP ที่ได้รับ: {result.toLocaleString()} 💰</h2>}
//     </div>
//   );
// }

// export default QPCalculator;
import React, { useEffect, useState } from "react";
import "./QPCalculator.css";

function QPCalculator() {
  const [ces, setCes] = useState([]);
  const [stages, setStages] = useState([]);
  const [selectedStage, setSelectedStage] = useState("");
  const [selectedCEs, setSelectedCEs] = useState(Array(5).fill(""));
  const [mlbCEs, setMlbCEs] = useState(Array(5).fill(false));
  const [supportCE, setSupportCE] = useState("");
  const [mlbSupportCE, setMlbSupportCE] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/getData?type=craft_essences")
      .then((res) => res.json())
      .then((data) => setCes(data))
      .catch((err) => console.error("Error loading CE:", err));

    fetch("http://localhost:8000/api/getData?type=qp_stages")
      .then((res) => res.json())
      .then((data) => setStages(data))
      .catch((err) => console.error("Error loading Stage:", err));
  }, []);

  const handleCEChange = (index, value) => {
    const newCEs = [...selectedCEs];
    newCEs[index] = value ? parseInt(value) : "";
    setSelectedCEs(newCEs);
  };

  const handleMLBChange = (index, checked) => {
    const newMLBs = [...mlbCEs];
    newMLBs[index] = checked;
    setMlbCEs(newMLBs);
  };

  const calculateQP = () => {
    if (!selectedStage) {
      alert("กรุณาเลือกด่านก่อนคำนวณ!");
      return;
    }

    let totalBonus = 0;
    const stage = stages.find((s) => s.id === parseInt(selectedStage));
    let baseQP = stage ? parseInt(stage.base_qp) : 0;

    selectedCEs.forEach((ceId, i) => {
      if (!ceId) return;
      const ce = ces.find((c) => c.id === ceId);
      if (ce) {
        totalBonus += mlbCEs[i]
          ? parseFloat(ce.bonus_mlb || 0)
          : parseFloat(ce.bonus_base || 0);
      }
    });

    if (supportCE) {
      const support = ces.find((c) => c.id === parseInt(supportCE));
      if (support) {
        totalBonus += mlbSupportCE
          ? parseFloat(support.bonus_mlb || 0)
          : parseFloat(support.bonus_base || 0);
      }
    }

    const totalQP = Math.floor(baseQP * (1 + totalBonus));
    setResult(totalQP);
  };

  const resetCalculator = () => {
    setSelectedStage("");
    setSelectedCEs(Array(5).fill(""));
    setMlbCEs(Array(5).fill(false));
    setSupportCE("");
    setMlbSupportCE(false);
    setResult(null);
  };

  return (
    <div className="page-container">
      <h1>QP Calculator ⚡</h1>
      <p>คำนวณ QP ที่ได้รับจากการฟาร์มแบบรวดเร็ว</p>

      <div className="qp-form-horizontal">
        {/* เลือกด่าน */}
        <div className="qp-row">
          <label>เลือกด่าน:</label>
          <select
            value={selectedStage}
            onChange={(e) => setSelectedStage(e.target.value)}
          >
            <option value="">-- เลือกด่าน --</option>
            {stages.map((s) => (
              <option key={s.id} value={s.id}>
                {s.stage_name} (Base: {s.base_qp})
              </option>
            ))}
          </select>
        </div>

        {/* CE ของเรา */}
        <div className="qp-row">
          <label>Craft Essence ของเรา:</label>
          <div className="ce-list">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="ce-slot">
                <select
                  value={selectedCEs[index]}
                  onChange={(e) => handleCEChange(index, e.target.value)}
                >
                  <option value="">-- เลือก CE --</option>
                  {ces.map((ce) => (
                    <option key={ce.id} value={ce.id}>
                      {ce.name}
                    </option>
                  ))}
                </select>
                <label className="mlb-label">
                  <input
                    type="checkbox"
                    checked={mlbCEs[index]}
                    onChange={(e) => handleMLBChange(index, e.target.checked)}
                  />
                  MLB
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* CE Support */}
        <div className="qp-row">
          <label>Support CE:</label>
          <select
            value={supportCE}
            onChange={(e) => setSupportCE(e.target.value)}
          >
            <option value="">-- เลือก CE --</option>
            {ces.map((ce) => (
              <option key={ce.id} value={ce.id}>
                {ce.name}
              </option>
            ))}
          </select>
          <label className="mlb-label">
            <input
              type="checkbox"
              checked={mlbSupportCE}
              onChange={(e) => setMlbSupportCE(e.target.checked)}
            />
            ยังไม่ปลด
          </label>
        </div>
                {/* ผลลัพธ์ */}
        {result !== null && (
          <h2 className="qp-result">QP ที่ได้รับ: {result.toLocaleString()} 💰</h2>
        )}

        {/* ปุ่ม */}
        <div className="qp-buttons">
          <button className="btn-calc" onClick={calculateQP}>
            คำนวณ QP
          </button>
          <button className="btn-reset" onClick={resetCalculator}>
            รีเซ็ท
          </button>
        </div>
      </div>
    </div>
  );
}

export default QPCalculator;
