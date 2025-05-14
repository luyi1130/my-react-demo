// import { useEffect } from "react"

// export default function App() {

//     useEffect(()=> {
//         if(!localStorage.visit){
//             localStorage.visit=0;
//         }
//         localStorage.visit=parseInt(localStorage.visit)+1;
//         document.getElementById("count").textContent=localStorage.visit;
//     },[])

//     return(
//         <>
//         <h2>拜訪次數:<span id="count"></span></h2>
//         </>
//     )
// }

// import { useEffect, useState } from "react";

// export default function App() {
//   const [visitCount, setVisitCount] = useState(0);

//   useEffect(() => {
//     // 初始設為 0，如果沒有這個 key
//     if (!localStorage.visit) {
//       localStorage.visit = 0;
//     }

//     // 每次進來 +1
//     const updatedCount = parseInt(localStorage.visit) + 1;
//     localStorage.visit = updatedCount;

//     // 設定到狀態中以顯示
//     setVisitCount(updatedCount);
//   }, []);



//   return (
//     <>
//       <h2>拜訪次數: <span>{visitCount}</span></h2>
//       <button onClick={() => {
//   localStorage.visit = 0;
//   setVisitCount(0);
// }}>重置</button>
//     </>
//   );
// }

import { useEffect, useState } from "react";

export default function App() {
  const [visitCount, setVisitCount] = useState(0);
  const [showModal, setShowModal] = useState(false); // 控制 modal 顯示

  useEffect(() => {
    const count = parseInt(localStorage.getItem("visit") || "0") + 1;
    localStorage.setItem("visit", count);
    setVisitCount(count);
  }, []);

  const handleConfirmReset = () => {
    localStorage.setItem("visit", "0");
    setVisitCount(0);
    setShowModal(false); // 關閉 modal
  };

  const handleCancel = () => {
    setShowModal(false); // 關閉 modal
  };

  return (
    <><h2>拜訪次數: <span>{visitCount}</span></h2>
      <button onClick={() => setShowModal(true)}>重置</button>

      {/* 客製化彈窗 */}
      {showModal && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <p>你確定要重置拜訪次數嗎？</p>
            <button onClick={handleConfirmReset}>確定</button>
            <button onClick={handleCancel} style={{ marginLeft: "10px" }}>取消</button>
          </div>
        </div>
      )}
    </>
  );
}

// 彈窗樣式
const modalStyles = {
  overlay: {
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex", justifyContent: "center", alignItems: "center",
    zIndex: 1000
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    textAlign: "center"
  }
};
