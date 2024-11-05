import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Programacao } from "./pages/Programacao";
import { useEffect } from "react";

function App() {
  const RouteTitleUpdater = () => {
    const location = useLocation();

    useEffect(() => {
      const routeTitles = {
        "/": "SIEGEPAN - SIEGEPAN",
        "/programacao": "Programação SIEGEPAN",
      };

      document.title = routeTitles[location?.pathname] || "SIEGEPAN";
    }, [location]);
    return null;
  };

  return (
    <>
      <Router>
        <RouteTitleUpdater />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programacao" element={<Programacao />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
