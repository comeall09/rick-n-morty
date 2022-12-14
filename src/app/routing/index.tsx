import { Navigate, Route, Routes } from "react-router-dom"
import { Episodes } from "../../pages/episodes/ui"
import { Cart } from "../../pages/cart/ui"
import { Orders } from "../../pages/orders/ui"

export const Routing = () => {
  return <>
    <Routes>
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
      <Route index element={<Episodes />} />
      <Route path="*" element={<Navigate to="/episodes" replace />} />
    </Routes>
  </>
}