import './App.css';
import DiaryEditor from "./DiartEditor";
import DiaryList from "./DiaryList";
import {useRef, useState} from "react";

    // const dummyList = [
    //     {
    //         id: 1,
    //         author : '이지수',
    //         content : 'Hi',
    //         emotion : 5,
    //         created_date : new Date().getTime(),
    //     },
    //     {
    //         id: 2,
    //         author : '홍길동',
    //         content : 'Hi2',
    //         emotion : 2,
    //         created_date : new Date().getTime(),
    //     },
    //     {
    //         id: 3,
    //         author : '이지수',
    //         content : 'Hi3',
    //         emotion : 5,
    //         created_date : new Date().getTime(),
    //     },
    // ]
function App() {

    const [data, setDate] = useState([]);

    const dataId = useRef(0);

    const onCreate = (author, content, emotion) => {
        const created_date = new Date().getDate();
        const newItem ={
            author,
            content,
            emotion,
            created_date,
            id : dataId.current,
        }
        dataId.current += 1;
        setDate([newItem,...data])
    }
    const onRemove = (targetId) =>{
        console.log(`${targetId}가 삭제되었습니다.`)
        const newDiaryList = data.filter((it) => it.id !== targetId);
        setDate(newDiaryList);
    }
    const onEdit = (targetId, newContent) => {
        setDate(
            data.map((it)=> it.id === targetId ? {...it, content: newContent} : it)
        )
    }

  return (
    <div className="App">
        <DiaryEditor onCreate={onCreate}/>
        <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit}/>
    </div>
  );
}

export default App;
