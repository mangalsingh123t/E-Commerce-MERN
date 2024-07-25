
import data_product from "../assets/data"
import { Item } from "../items/Item"

export const Popular = () => {
    return (
      <>
        <div>
          <h1 className="font-bold text-center text-5xl ">POPULER IN WOMEN</h1>
          <hr className="m-auto w-52 h-1 bg-black mt-[15px]"/>
          <div className="flex md:flex-row sm:flex-col  gap-7 ms-20 me-20 mt-[15px] pb-9">
            {
              data_product.map((item,index)=>{
               return <Item key={index} id={item.id} image = {item.image} name = {item.name} new_price = {item.new_price} old_price = {item.old_price}/>
              })
            }
          </div>
        </div>
      </>
    )
  } 
  