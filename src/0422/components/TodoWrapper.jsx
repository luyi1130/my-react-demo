import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"

function TodoWrapper(){
    // 因為有N個todo，所以用陣列存放
    const[todos,setTodos]= useState([
        {content:'停車費',id: Math.random()},
        {content:'對發票',id: Math.random()},
    ])

    // 建立加入新的todo內容函式
    // 其餘運算子(...名稱)
    const addTodo=(content)=>{
        setTodos([...todos,{ content:newContent, id:Math.random()}])
    }



    return (
        <div className="wrapper">
           <h1>待辦事項</h1>
           <CreateForm addTodo={addTodo}/>
           {
             todos.map((todo) => {
                return <Todo todo={todo} 
                key={todo.id}
                delTodo={delTodo}

                />
             })
           
           }
        </div>
    )
}
export default TodoWrapper