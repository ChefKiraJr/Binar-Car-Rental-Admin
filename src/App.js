import Main from "./pages/Main";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
