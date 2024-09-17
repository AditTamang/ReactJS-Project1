import { Link } from "react-router-dom"

function Card({hehe}){
    return(
      <Link to={`/product/${hehe.id}`} >
          <div class="max-w-sm m-20 rounded overflow-hidden shadow-lg">
          <img class="w-full" src={hehe.prooductImage} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{hehe.productName}</div>
            <p class="text-gray-700 text-base">
              {hehe.productDescription}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#
            {hehe.productBrand}</span>
           
      </div>
    </div>
      </Link>
    )
}


export default Card