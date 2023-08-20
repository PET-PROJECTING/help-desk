import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  NoPage,
  Home,
  Layout,
  Products,
  Customers,
} from "./pages";
import { PATHS } from './constants';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.ROOT} element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path={PATHS.CUSTOMERS} element={<Customers />}/>
          <Route path={PATHS.CUSTOMERS} element={<Products />}/>
          <Route path={PATHS.OTHERS} element={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

App.displayName = 'App';

export default App;
