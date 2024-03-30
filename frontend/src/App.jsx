import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="main_body">
      <Nav />
      <div className="content">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
