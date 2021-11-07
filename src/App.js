import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';


function App() {
  return (
    <div className="app">

    {/* //サイドバー  */}
    <Sidebar />
    {/* メイン */}
    <Feed />
    {/* ウィジェット（右側） */}
    <Widgets />

    </div>
  );
}

export default App;
