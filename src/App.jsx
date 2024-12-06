import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import KelasDetail from "./pages/Detail/KelasDetail";
import TugasDetail from "./pages/Detail/TugasDetail";
import Class from "./pages/Course/Class";
import Tugas from "./pages/Course/Tugas";
import Schedule from "./pages/Schedule/schedule";
import Report from "./pages/Report/report";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<KelasDetail />} />
          <Route path="/details" element={<TugasDetail />} />
          <Route path="/class" element={<Class />} />
          <Route path="/tugas" element={<Tugas />} />
          <Route path="/jadwal" element={<Schedule />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
