
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Feed } from "./Pages/Feed";
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
     <GlobalStyle />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Feed" element={<Feed />} />
     </Routes >
    </Router>
  );
}

export default App;