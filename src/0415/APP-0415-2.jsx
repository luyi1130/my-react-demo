import { useState } from 'react'
import p1 from './images/p1.jpg'
import p2 from './images/p2.jpg'

function App() {
    //圖片陣列
    const arrPhotos = [p1, p2];
    // 目前圖片的state，預設為第一張圖的索引
    const [currentImg, setCurrenImg] = useState(0);
    return (
        <>
            <div className="main">
                {/* 縮圖區 */}
                <div>
                    {
                        arrPhotos.map((photo, index) => {
                            return (
                                <img
                                    key={index} src={photo} alt="" width={100}
                                    // 當滑鼠碰到時，取得目前圖片索引編號，透過setCurrentImg方法更改
                                    onMouseOver={e => setCurrenImg(index)}
                                    //變更滑鼠的形狀為手型icon
                                    style={{ cursor: "pointer" }}
                                />

                            )
                        })
                    }
                </div>

                {/* 放大園區 */}
                <div>
                    <img src={arrPhotos[currentImg]} alt="" width={300} />
                </div>

            </div>
        </>

    )
}
export default App