// 摺疊QA => Accordion
// npm install motion
import {AnimatePresence,motion}from"motion/react";
import { useState } from "react";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
function App(){
    // 作用中的變數
    const[activeQuestion,setActiveQuestion]=useState(null);
    
    // FAQ的資料
    const questions =[
        {
            id:1,
            question:"題目1",
            ans:"答案1答案1答案1答案1答案1答案1",
        },
        {
            id:2,
            question:"題目2",
            ans:"答案2答案2答案2答案2答案2答案2答案2",
    
        },
        {
            id:3,
            question:"題目3",
            ans:"答案3答案3答案3答案3答案3答案3答案3",
        }
    ];
    return(
        <>
        {/* 最外層 */}
        <div style={{
            maxWidth:"100vw",
            height:"100vh",
            backgroundColor:"black",
            color:"#ffff",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }}>
            {/* Accordion摺疊面板 */}
            <div style={{
                width:"90%",
                margin:"auto",
                maxWidth:"1200px",
                backgroundColor:"#aaa",
                padding:"10px",
                borderRadius:"5px",
            }}>
                <h2 style={{
                    textAlign:"center",
                    marginBottom:"6px",
                }}>FAQ標題</h2>
                {
                    // 帶出陣列資料
                  questions.map((q)=>{
                    return(
                        <div key={q.id} style={{marginBottom:"4px"}}>
                            {/* QA按鈕 */}
                            <button>
                                {/* 題目 */}
                                {q.question}
                                {/* icon */}
                                {activeQuestion===q.id?<CiCircleMinus />: <CiCirclePlus />}
                            </button>

                            {/* 摺疊紐動畫 */}
                            <AnimatePresence>
                                {
                                    // 檢查是否作用中的題目，如果是，展開答案
                                    activeQuestion===q.id&&(
                                        <motion.div
                                            initial={{opacity:0,height:0}}
                                            animate={{opacity:1,height:"auto"}}
                                            exit={{opacity:0,height:0}}
                                            style={{marginTop:"5px",backgroundColor:"#333"}}
                                            >
                                                {q.ans}
                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                        </div>
                    )
                  })
                }
            </div>
        </div>

        </>
    )
}
export default App