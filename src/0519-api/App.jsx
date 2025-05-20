import axios from "axios";
import { filter } from "motion/react-client";
import { useEffect, useState } from "react";

export default function App() {
    // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
    const api = "https://api.unsplash.com/search/photos";
    const accesskey = "JYkKvsb4wrxdBkggBGnGjNYmLn_RzgpyUQlQhmRlEfY";
    const [filterString, setFilterString] = useState('dog');




    // 存放篩選後的資料
    const [jsonData, setJsonData] = useState([]);


    // 建立非同步方法，取得遠端資料
    const getPhotos = async () => {
        try {
            const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`);
            console.log(result);


            // 將資料寫入陣列jsonData
            setJsonData(result.data.results);
        } catch (error) {
            console.log(error)
        }
    }


    // 顯示陣列資料元件
    const ShowPhoto = () => {
        // console.log(jsonData)
        return (
            jsonData.map((item, index) => {
                return (
                    <div key={index} style={{ margin: "3px" }}>
                        <img src={item.urls.regular} alt="" width="400" height="320" style={{ objectFit: "cover" }} />
                    </div>
                )
            })
        )
    }




    useEffect(() => {
        getPhotos();
    }, [])




    return (


        <>
            <h1>取得遠端資料</h1><hr />
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                <ShowPhoto />
            </div>


        </>
    )
}

