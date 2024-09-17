
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/'
import CreateProduct from './pages/CreateProduct'
import EditProduct from './pages/EditProduct'
import Blog from './pages/blog'
import SingleProduct from './pages/SingleProduct'
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
