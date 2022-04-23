import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ManageProduct from './components/ManageProduct/ManageProduct';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product' element={<Products></Products>}></Route>
        <Route path='/manage' element={<ManageProduct></ManageProduct>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
