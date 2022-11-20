import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import MyDrive from "./pages/MyDrive";
import SharedWithMe from "./pages/SharedWithMe";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyDrive />} />
          <Route path="shared-with-me" element={<SharedWithMe />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
