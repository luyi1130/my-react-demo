import { useState } from "react"
import { createUserWithEmailAndPassword,signInWithPopup,signOut}from"firebase/auth";
import {auth, googleProvider} from"./config/firebase";

 export const Auth=()=>{
    const [email,setEmail]=useState("");
    const [password, setPassword] = useState("");

    // 查看登入資訊
    console.log(auth?.currentUser?.email);

    // 帳密登入
    const signIn=async()=>{
        try{
            await createUserWithEmailAndPassword(auth,email,password);
        } catch(err){
             console.error(err);
        }
    };
    // google登入
    const signInWithGoogle =() => {

        try {
            await signInWithPopup(auth, googleProvider);
        }catch(err) {
            console.error(err);
        }
    }
    // 登出
    const logout = async() => {
        try{
           await signOut(auth);
        }catch(err) {
            console.error(err);
        }
    }
    return(
        <>
         <div>
            {/* 請輸入Email */}
            <input type="text" placeholder="請輸入Email..." 
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* 請輸入密碼 */}
             <input type="password" placeholder="請輸入密碼..." 
              onChange={(e) => setPassword(e.target.value)}
              />

              <button onClick={signIn}>帳密登入</button>

              <button onClick={signInWithGoogle}>Google登入</button>
              <button onClick={logout}>登出</button>
         </div>
        </>
    )
 }