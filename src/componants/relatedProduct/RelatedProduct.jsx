
import data_product from "../assets/data"
import { Item } from "../items/Item"

export const RelatedProduct = () => {
    return (
      <>
       <div>
        <h1 className="font-bold text-center text-5xl pt-3">Related Product</h1>
        <hr className="m-auto w-52 h-1 bg-black mt-3" />
        <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-4  gap-5 rounded-md  mt-[15px] pb-9  place-content-center">
          {data_product.map((item, index) => {
            return (
              <Item 
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>

      </div>
      </>
    )
  } 
  