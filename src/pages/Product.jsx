import { useParams } from "react-router-dom"
import all_product from "../componants/assets/all_product"
import BreadCrum from "../componants/breadCrum/BreadCrum"
import { ProductDisplay } from "../componants/productDisplay/ProductDisplay"
import { DescriptionBox } from "../componants/descriptionBox/DescriptionBox"

export const Product = () => {

  const { productId } = useParams()
  const product = all_product.find((e) => e.id == Number(productId))
  return (
    <>
      <div className="mx-28">
        <BreadCrum product={product} />
        <ProductDisplay product={product} />
        <DescriptionBox/>
      </div>
    </>
  )
}
