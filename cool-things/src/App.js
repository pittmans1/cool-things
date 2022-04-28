import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from "./components/Landing"


function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
          <Route path="/home" element={Landing}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
