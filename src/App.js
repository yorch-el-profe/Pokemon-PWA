import { useEffect, useState } from "react";
import Offline from "./components/Offline";
import Pokedex from "./components/Pokedex";

function App() {
  const [internet, setInternet] = useState(navigator.onLine);

  useEffect(function () {
    // Cuando llega el internet
    window.addEventListener("online", () => {
      setInternet(true);
    });

    // Cuando se va el internet
    window.addEventListener("offline", () => {
      setInternet(false);
    });
  }, []);

  return (
    <div className="container d-flex justify-content-center flex-column align-items-center">
      {internet ? <Pokedex /> : <Offline />}
    </div>
  );
}

export default App;
