import Navbar from "../components/Navbar"
import ProductForm from "../components/ProductForm"

function CreateProduct(){
    return(
      <>
        <Navbar/>
        <ProductForm type='create'/>
      </>
    )
}

export default CreateProduct