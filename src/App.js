import { YoutubeForm, About } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<YoutubeForm />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
