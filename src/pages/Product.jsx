import { useParams } from "react-router-dom"
import BreadCrum from "../componants/breadCrum/BreadCrum"
import { ProductDisplay } from "../componants/productDisplay/ProductDisplay"
import { DescriptionBox } from "../componants/descriptionBox/DescriptionBox"
import { RelatedProduct } from "../componants/relatedProduct/RelatedProduct"
import { useContext } from "react"
import { ShopContext } from "../componants/context/ShopContext"
// eslint-disable-next-line react/prop-types
export const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams()
  // eslint-disable-next-line react/prop-types
  const product = allProducts.products?.find((e) => e.id == Number(productId))
  return (
    <>
      <div className="container mx-auto">
        <BreadCrum product={product} />
         <ProductDisplay product={product} />
        <DescriptionBox/>
        <RelatedProduct product={product}/> 
      </div>
    </>
  )
}
