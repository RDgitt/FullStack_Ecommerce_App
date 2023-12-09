import "./App.css";
import { Routes,Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App;
