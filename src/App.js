import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Explore from "./explore";



function App() {
  return (
    <div className="app">

    {/* //サイドバー  */}
   
    {/* メイン */}
    <Router>
    <Sidebar />
      <Routes>
        <Route exact path="/" element={<Feed />}/>
        <Route exact path="/explore" element={<Explore/>}/>
      </Routes>
    </Router>
    {/* ウィジェット（右側） */}
    <Widgets />

    </div>
  );
}

export default App;
