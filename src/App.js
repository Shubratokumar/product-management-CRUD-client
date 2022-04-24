import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ManageProduct from './components/ManageProduct/ManageProduct';
import Products from './components/Products/Products';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product' element={<Products></Products>}></Route>
        <Route path='/manage' element={<ManageProduct></ManageProduct>}></Route>        
        <Route path='/update/:id' element={<UpdateProduct></UpdateProduct>}></Route>        
      </Routes>
      
    </div>
  );
}

export default App;
