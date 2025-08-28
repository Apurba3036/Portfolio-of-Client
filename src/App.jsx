import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="mt-5"></div>
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;