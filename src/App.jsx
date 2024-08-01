import Home from "./page/Home"
import NotePage from "./page/NotePage"
import { Toaster } from "react-hot-toast";
import NotFound from "./page/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/group/:groupId" element={<NotePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-left" />
    </BrowserRouter>
  )
}

export default App;