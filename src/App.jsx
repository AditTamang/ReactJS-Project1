
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import CreateProduct from './pages/create/CreateProduct'
import EditProduct from './pages/edit/EditProduct'
import Blog from './pages/blog/Blog'
import SingleProduct from './pages/single/SingleProduct'
import ProductForm from './components/ProductForm'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<CreateProduct/>} />
        <Route path='/edit/:id' element={<EditProduct/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/product/:id' element={<SingleProduct/>} />
        <Route path='/form' element={<ProductForm/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
