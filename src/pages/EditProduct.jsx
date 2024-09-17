import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import ProductForm from "../components/ProductForm"


function EditProduct(){
    const {id} = useParams()
    
    return (
        <>
            <Navbar/>
            <ProductForm type='edit' id={id} />
        </>
    )

}
export default EditProduct