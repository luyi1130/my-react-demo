function App(){
    
    //過濾出陣列中，除了CSS的書本
    const filterBooks =listBooks.filter((book)=>{
        // 檢查書本名稱如果不是css，就保留
        if(book.bookName !='CSS'){
            return true
        }
    }) 

    return (
        <>
        { /*使用陣列方法1*/ }
        {listItem}
        <hr />

        {/*使用陣列方法2:map方法 */}
        {
            listBooks.map((books)=>{
                return <div key={book.id}>{book.bookName}</div>
            })
        }
        <hr/>
        {/* 顯示filter()過濾後的陣列資料 */}
        {
            filterBooks.map((books)=>{
                return <div key={book.id}>{books.bookName}</div>
            })
        }
        </>
    )
}
export default App