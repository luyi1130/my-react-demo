// 子元件
function MyComponent(props){
    // 查看props物件
    console.log(props)

    // 使用大括號{props.屬性名稱}
    return<>
        <div>我是子元件，帶有主元件傳遞過來的屬性內容為「{props.a}」</div>
        <div>我是子元件，帶有主元件傳遞過來的屬性內容為「{props.b}」</div>
        {props.c}
        </>
}

//父元件
function App(){
    return(
        <>
        {/* 回調函式 => callback funtion */}
        <MyComponent 
        a="我是屬性a" 
        b="我是屬性b"
        c={()=>{console.log("我是屬性c")}}
        />

        </>
    )
}
export default App