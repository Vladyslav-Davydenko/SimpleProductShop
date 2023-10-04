import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./pages/Main/Main"
import About from "./pages/About/About"
import Products from "./pages/Products/Products"
import DetailedProduct from "./pages/DetailedProduct/DetailedProduct"
import Cart from "./pages/Cart/Cart"
import Error from "./pages/Error/Error"
import store from "./helpers/store/store"
import { Provider } from "react-redux"

function App() {
  return (
    <div className="app__container">
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<DetailedProduct />}>
            <Route path="nutrition"></Route>
            <Route path="storage"></Route>
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  )
}

function AppWrapper() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}

export default AppWrapper
