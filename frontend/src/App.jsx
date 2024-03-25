import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="main_body">
      <div className="content">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
