
import all_product from "../assets/all_product"
import { Item } from '../items/Item'

export const Mens = () => {
  return (
    <>
    {
    all_product.map((item,index)=>{
    return   item.category == "men" ?  <Item key={index} id={item.id} name={item.name} image = {item.image} new_price={item.new_price} old_price = {item.old_price}/> : ""
    })
    }
    </>
  )
}
