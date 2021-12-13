import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import AddedPeople from "./components/AddedPeople/AddedPeople";
import People from "./components/People/People";
import RemovePeople from "./components/RemovePeople/RemovePeople";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const rootStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    justifyItem: 'center',
    margin: '20px auto',
    paddingTop: '100px'
  }
  return (
    <div className="App">
      <div className="root-nav">Man Power Business</div>
      <BrowserRouter>
        <div style={rootStyle}>
          <div>
            <SideBar />
          </div>
          <div>
            <Routes>
              <Route path='/' element={<People />} />
              <Route path='/home' element={<People />} />
              <Route path='/added-people' element={<AddedPeople />} />
              <Route path='/removed-people' element={<RemovePeople />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
