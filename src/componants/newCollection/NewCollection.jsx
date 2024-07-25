 
 import new_collections from '../assets/new_collections'
import { Item } from '../items/Item'
 export const NewCollection = () => {
   return (
     <>
      <div>
      <h1 className="font-bold text-center text-5xl ">NEW COLLECTIONS</h1>
      <hr className="m-auto w-52 h-1 bg-black mt-[15px]"/>
          <div className='grid grid-cols-4 gap-2 ms-5'>
            {
                new_collections.map((item, index) => {
                return <Item key={index} id={item.id} name={item.name} image = {item.image} new_price={item.new_price} old_price = {item.old_price}/>
                }
                )
            }
            </div>        
      </div>
     </>
   )
 }
 