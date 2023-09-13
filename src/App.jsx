import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </>
  );
}

export default App;
