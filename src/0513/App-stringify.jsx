export default function App() {
    let country=[
        {
            cityId:1,
            cityName:"台北市" ,
        },
        {
            cityId:2,
            cityName:"桃園市",
        }
    ]

    return (
        <>

        <button onClick={() =>{
            // 將陣列物件轉成字串
         let  countryString=JSON.stringify
        }}>寫入</button>
        </>
    )
}