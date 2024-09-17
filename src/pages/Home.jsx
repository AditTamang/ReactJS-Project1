import axios from "axios";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function Home(){
    const [products,setProduct] = useState([]) //Use state means its a variable in the react
    const fetchProducts = async () =>{
        const response = await axios.get('https://66dea33fde4426916ee1c965.mockapi.io/Products')
        // console.log(response.status)
        if(response.status === 200){
            setProduct(response.data)
        }
    }
    useEffect(()=>{
        fetchProducts()
        // console.log("Hi my name is Adit Tamang..")
    },[])

    console.log(products)

    return(
        // Rounded means => border Radius in the CSS
        //px means => padding in the x-axis
        //Kebab Cases => kunai pani wordko middle ma "--"" or "-"" xa bhane teslai nai kebab bhaninxa
        //Snake cases => kunai pani wordko middle ma "_" xa bhane teslai nai kebab bhaninxa

        <>
        <Navbar/>
        {/* We can use this in these way as well. */}
        {/* <div style={{display: 'flex'}}> */}
        <div className="flex space-x-5 mt-4 ml-2 flex-wrap">
            {
                products.map((haha)=>{
                   return(
                    <Card hehe = {haha}/>
                   ) 
                })
            }

        </div>

            </>
    )
}



export default Home