const DiaryList = ({diaryList}) => {
    console.log(diaryList)
    return(
        <div className='DiaryList'>
            <h2>일기 리스트</h2>
            <h2>{diaryList.length}개의 일기가 있습니다.</h2>
        <div>
            {diaryList.map((it) => (
                <div>
                    <div>작성자 : {it.author}</div>
                    <div>일기 : {it.content}</div>
                    <div>감정 : {it.emotion}</div>
                <hr/>
                </div>
            ))}
        </div>
        </div>
    )
}
export default DiaryList;