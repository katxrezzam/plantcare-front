import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Home } from "./pages";

export default function App() {
  return (
    <div className="plant-care-app">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  )
}
