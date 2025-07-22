import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Orders from './pages/Orders';
import FavoritesPage from './pages/FavoritesPage';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import Contact from './pages/Contact';



function App() {
  return (
    
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/favorites" element={<FavoritesPage />} />
           <Route path="/profile" element={<Profile />} />
           <Route path="/logout" element={<Logout />} />
           <Route path="/contact" element={<Contact />} />
          
        </Route>
      </Routes>
    
  );
}

export default App;
