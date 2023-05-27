import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ShopsPage } from "./pages/ShopsPage";
import { CartPage } from "./pages/CartPage";
import { HistoryPage } from "./pages/HistoryPage";
import { GoodsList } from "./components/Shops/GoodsList";

function App() {
  return (
    <Suspense fallback={false}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="shops" element={<ShopsPage />}>
            <Route index path="goods/:shop" element={<GoodsList />} />
          </Route>
          <Route path="cart" element={<CartPage />} />
          <Route path="history" element={<HistoryPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
