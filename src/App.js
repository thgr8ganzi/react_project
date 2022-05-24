import './App.css';
import DiaryEditor from "./DiartEditor";
import DiaryList from "./DiaryList";

function App() {

    const dummyList = [
        {
            id: 1,
            author : '이지수',
            content : 'Hi',
            emotion : 5,
            created_date : new Date().getTime(),
        },
        {
            id: 2,
            author : '홍길동',
            content : 'Hi2',
            emotion : 2,
            created_date : new Date().getTime(),
        },
        {
            id: 3,
            author : '이지수',
            content : 'Hi3',
            emotion : 5,
            created_date : new Date().getTime(),
        },
    ]

  return (
    <div className="App">
        <DiaryEditor/>
        <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
