import Main from "./pages/Main";
import "./App.css";
import AddCar from "./components/AddCar";
import EditCar from "./components/EditCar";
import ListCar from "./components/ListCar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="ListCar" element={<ListCar />}></Route>
          <Route exact path="AddCar" element={<AddCar />}></Route>
          <Route exact path="EditCar" element={<EditCar />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
