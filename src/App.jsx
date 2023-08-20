import {BrowserRouter, Routes, Route} from "react-router-dom";
import {
  NoPage,
  Home,
  Layout,
  Products,
  Customers,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="customers" element={<Customers />}/>
          <Route path="products" element={<Products />}/>
          <Route path="*" element={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
