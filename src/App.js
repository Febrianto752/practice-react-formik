import { YoutubeForm, About, TestForm } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<YoutubeForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/test" element={<TestForm />} />
    </Routes>
  );
}

export default App;
