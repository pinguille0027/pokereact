import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layeout from "../components/Layout";

const App = () => {
  return (
    <Router>
      <Layeout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layeout>
    </Router>
  );
};

export default App;
