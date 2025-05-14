// import { useEffect } from "react"
// import $ from 'jquery'
// import './App.css'
// export default function App() {

// useEffect(()=>{
//     // 當滑鼠碰到圖片區域時，放大圖片
//    $('.cssAnim1').on('mouseover',function(){
//     $(this).addClass('imgScale');
//    })
// //    當滑鼠離開圖片區域時，還原圖片
// $('.cssAnim1').on('mouseout',function(){
//     $(this).removeClass('imgScale');
//    })
// },[])

//     return(
//         <div>
//             <a href="#" className="cssAnim1"></a>
//             <img src="./images/p1.jpg" alt="" />
//         </div>

//     )
// }

// import { useEffect } from "react";
// import $ from "jquery";
// import "./App.css";

// export default function App() {
//   useEffect(() => {
//     // 當滑鼠碰到圖片區域時，放大圖片
//     $(".cssAnim1").on("mouseover", function () {
//       $(this).addClass("imgScale");
//     });

//     // 當滑鼠離開圖片區域時，還原圖片
//     $(".cssAnim1").on("mouseout", function () {
//       $(this).removeClass("imgScale");
//     });

//     // 清除事件綁定，避免記憶體洩漏
//     return () => {
//       $(".cssAnim1").off("mouseover");
//       $(".cssAnim1").off("mouseout");
//     };
//   }, []);

//   return (
//     <div>
//       <a href="#" className="cssAnim1">
//         <img src="/images/p1.jpg" alt="" />
//       </a>
//     </div>
//   );
// }
import { useState } from "react";
import Lightbox from "./components/Lightbox";
import "./App.css";

const images = [
  "/images/p1.jpg",
  "/images/p2.jpg",
  "/images/p3.jpg"
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <h2>圖片預覽示範</h2>
      <div className="gallery">
        {images.map((src, index) => (
          <img key={index} src={src} alt="" onClick={() => {
            setCurrentIndex(index);
            setIsOpen(true);
          }} />
        ))}
      </div>

      {isOpen && (
        <Lightbox
          images={images}
          index={currentIndex}
          onClose={() => setIsOpen(false)}
          onChange={(newIndex) => setCurrentIndex(newIndex)}
        />
      )}
    </>
  );
}

