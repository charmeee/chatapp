import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ChatPage from './components/ChatPage/ChatPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
