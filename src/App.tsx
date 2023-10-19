
import Layeout from "../components/Layout";
import { OverlayProvider } from "../context/OverlayContext";
const App = () => {
  return (
  <OverlayProvider>
  <Layeout /> 
  </OverlayProvider>
  );
};

export default App;
