import { Hero } from "../componants/hero/Hero"
import { NewCollection } from "../componants/newCollection/NewCollection"
import { NewsLatter } from "../componants/newsLatter/NewsLatter"
import { Offers } from "../componants/offers/Offers"
import { Popular } from "../componants/popular/Popular"

export const Shop = () => {
  return (
    <>
    <Hero/>
    <Popular/>
    <Offers/>
    <NewCollection/>
    <NewsLatter/>
    </>
  )
}
