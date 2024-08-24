import { useParams } from "react-router-dom"
import all_product from "../componants/assets/all_product"
import BreadCrum from "../componants/breadCrum/BreadCrum"
import { ProductDisplay } from "../componants/productDisplay/ProductDisplay"
import { DescriptionBox } from "../componants/descriptionBox/DescriptionBox"
import { RelatedProduct } from "../componants/relatedProduct/RelatedProduct"

export const Product = () => {

  const { productId } = useParams()
  const product = all_product.find((e) => e.id == Number(productId))
  return (
    <>
      <div className="container mx-auto">
        <BreadCrum product={product} />
         <ProductDisplay product={product} />
        <DescriptionBox/>
        <RelatedProduct/> 
      </div>
    </>
  )
}
