import { useState } from 'react';
import './App.css';
import Main from './component/Main';
import Sidebar from './component/Sidebar';


function App() {

  const [notes, setNotes] = useState([]);
  const onAddNote = () => {
    console.log("ノートを追加しました")
    const newNote = {
      id: 1,
      title: "新しいノート",
      content: "新しいノートの内容",
      moddate: Date.now()
    };
    setNotes([...notes, newNote]);
    console.log(notes)
  };

  return (
    <div className='App'>
      <Sidebar onAddNote={onAddNote} notes={notes}/>
      <Main />
    </div>
  );
}

export default App;
