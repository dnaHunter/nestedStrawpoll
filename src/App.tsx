import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/polls/:pollId" element={<></>} />
        </Routes>
        <Header />
        <Routes>
          <Route path="/" element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
