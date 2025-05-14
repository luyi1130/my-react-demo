// import { input } from "motion/react-client";
// import { useRef,useState } from "react";

// export default function App() {
//     // const [value,setValue]=useState('');
//     // 建立一個useRef的變數 
//     const inputRef=useRef(null);

//     console.log('App渲染了');


//     const submitHandler =(flag) =>{
//         // console.log(value);
//         // 傳回被綁定的useRef的物件
//         // console.log(inputRef);
//         // 查看值
//         // console.log(inputRef.current.value);
//         // 查類型
//         // console.log(inputRef.current.type);
//         // 動態改變類型為 password
//         // inputRef.current.type="password";
//         // 查類型
//         // console.log(inputRef.current.type);

//       if(flag){
//         inputRef.current.type ="password";
//        }else {
//         inputRef.current.type="text";
//        }
//     }

//     // const submitHandler2 =() =>{
//     //     // 動態改變類型為 text
//     // inputRef.current.type ="text"; }


//     return(
//         <>

//         {/* <input type="text" onChange={(e)=>setValue(e.target.value)}/> */}
//         <input type="text" ref={inputRef} />
//         <button onClick={submitHandler(true)}>關閉密碼</button>
//         <button onClick={submitHandler(false)}>查看密碼</button>

//         </>
//     )
// }

// import { useRef } from "react";

// export default function App() {
//   const inputRef = useRef(null);

//   console.log("App渲染了");

//   const submitHandler = (flag) => {
//     if (inputRef.current) {
//       if (flag) {
//         inputRef.current.type = "password";
//       } else {
//         inputRef.current.type = "text";
//       }
//     }
//   };

//   return (
//     <>
//       <input type="text" ref={inputRef} />
//       <button onClick={() => submitHandler(true)}>關閉密碼</button>
//       <button onClick={() => submitHandler(false)}>查看密碼</button>
//     </>
//   );
// }

import { useState, useRef } from "react";
import { Eye, EyeOff } from "lucide-react"; // 引入圖示

export default function App() {
  const inputRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false); // 控制密碼顯示

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "300px" }}>
      <div style={{ position: "relative" }}>
        <input ref={inputRef}
          type={showPassword ? "text" : "password"}
          placeholder="輸入密碼"
          style={{ paddingRight: "2.5rem", width: "100%", padding: "0.5rem" }}
        />
        <span onClick={togglePasswordVisibility}
          style={{
            position: "absolute",
            right: "0.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer"
          }}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </span>
      </div>
    </div>
  );
}

