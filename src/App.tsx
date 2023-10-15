import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "../pages/List";
import Layeout from "../components/Layout";

const App = () => {
  return (
    <Router>
      <Layeout />
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </Router>
  );
};

export default App;
