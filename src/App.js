import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "./App.css";
import AllGuns from "./Components/AllGuns/AllGuns";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  const [count, setCount] = useState(0);

  const setCartCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Navbar count={count} />
      <AllGuns setCartCount={setCartCount}></AllGuns>
      <Footer />
    </div>
  );
}

export default App;
