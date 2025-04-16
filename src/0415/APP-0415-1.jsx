import { useState } from "react"
function ChildComponent({propsCount}){
    return <div>{propsCount}</div>
}

// 子元件
function MyComponent(){
    // let count = 0;
    // 使用狀態(state)控制變數
    const[count,setCount]=useState(0);

    const handleClick=()=>{
        // count++
        // 使用useState中的方法，改變count變數值
        setCount(count + 1);
    }
    return(
        <>
         <button onClick={handleClick}>點擊次數</button>
         <ClickComponent propsCount={count}/>
        </>
    )
}

// 程式進入點
function App(){
    return(
        <>
        {/* 呼叫子元元件 */}

        <MyComponent/>
        </>
    )
}
export default App