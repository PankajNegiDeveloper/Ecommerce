import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing_page from "./Landing_page";
import AdminPortal from "./Components/AdminPortal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_page/>}></Route>
        <Route path="/adminportal/*" element={<AdminPortal/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
