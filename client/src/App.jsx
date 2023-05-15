import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from "./pages/Default";
import EditedPage from "./pages/EditedPage";
import Editor from "./pages/Editor";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/:editor" element={<EditedPage />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
