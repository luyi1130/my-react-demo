// 展示列表
// 使用props接收元件屬性
// funtion Todo(props){
// return(
//     <div className="todo">
//         <p>{preprocessCSS.todo}</p>
//     </div>
// )
// }

import { MdDelete } from "react-icons/md"

// 將props物件解構{元件屬性}
function Todo({todo}){
    return (
        <div className="todo">
          <p>{todo.content}</p>
          {/* 修改icon */}
         < MdEdit style={{cursor:'pointer'}}/>
           {/* 刪除icon */}
           <MdDelete 
           onClick={()=>{delTodo(Todo)}}
           style={{cursor:'pointer',margin:'5px'}}/>
        </div>
    )
}
export default Todo