import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./site/Home";
import Map from "./pages/Map";
import Kampaniyalar from "./pages/Kampaniyalar";
import Korporativ from "./pages/Korporativ";
import Liked from "./pages/Liked";
import Müqayisə from "./pages/Müqayisə";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} path="/"/>
          <Route element={<Map />} path="/magazalar"/>
          <Route element={<Kampaniyalar />} path="/kampaniyalar"/>
          <Route element={<Korporativ />} path="/korporativ"/>
          <Route element={<Liked />} path="/liked"/>
          <Route element={<Müqayisə />} path="/müqayisə"/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;