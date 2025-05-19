import axios from "axios";
import { filter } from "motion/react-client";
import { useEffect, useState } from "react";

export default function App() {
    // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
    const api = "https://api.unsplash.com/search/photos";
    const accesskey = "JYkKvsb4wrxdBkggBGnGjNYmLn_RzgpyUQlQhmRlEfY";
    const [filterString, setfilterString] = useState('dog');

    // 存取篩選後的資料
    const [jonsData, setJonsData] = useState([]);


    // 建立非同步方法，取得遠端資料
    const getPhotos = async () => {
        try {
            const result = await axios.get(`${api}?client_id=$(accessKey)&query=${filterString}`);
            console.log(result);

            // 將資料載入陣列jsonData
            setJonsData(result.data.results);
            console.log(jonsData);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPhotos();
    }, []);



    return (
        <>
            <h1>取得遠端資料</h1>
        </>
    )
}