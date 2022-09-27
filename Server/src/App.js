import io from "socket.io-client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import StarterPage from "./comp/starterPage/StarterPage";
import SignUp from "./comp/signUp/SignUp";

const socket = io.connect("http://localhost:4200/", {
  reconnection: true
});

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route exact path='/' element={<StarterPage />} />
            <Route exact path='/signup' element={<SignUp socket={socket} />} />
          </Routes>
        </Router>

      </div>
    </div >
  );
}

export default App;
