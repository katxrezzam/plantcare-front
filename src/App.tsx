import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Home, Prediction } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/prediction" element={<Prediction />} />
      </Route>
    </Routes>
  );
}
