 
//  import new_collections from '../assets/new_collections'
import { useEffect, useState } from 'react';
import { Item } from '../items/Item'
import axios from 'axios';
 export const NewCollection = () => {

 const[newCollections,setNewCollections] = useState([])
 const getNew_Collections = async () =>{
  const new_Collections  = await axios.get("http://localhost:9090/newCollections")
   setNewCollections(new_Collections)
 }

 useEffect(()=>{
  getNew_Collections()
 },[])

   return (
     <>
<div>
        <h1 className="font-bold text-center text-5xl pt-3 mt-10">New Collections</h1>
        <hr className="m-auto w-52 h-1 bg-black mt-3" />
        <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-4  gap-5 rounded-md  mt-[15px] pb-9  place-content-center">
          {newCollections.data?.map((item, index) => {
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
 