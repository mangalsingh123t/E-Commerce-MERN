import { Hero } from "../componants/hero/Hero";
import { NewCollection } from "../componants/newCollection/NewCollection";
import { NewsLatter } from "../componants/newsLatter/NewsLatter";
import { Offers } from "../componants/offers/Offers";
import { Popular } from "../componants/popular/Popular";
import { useRef } from "react";

export const Shop = () => {
  const newCollectionRef = useRef(null); // Create a ref for the NewCollection section

  const scrollToNewCollection = () => {
    if (newCollectionRef.current) {
      const elementPosition = newCollectionRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth' // Enables smooth scrolling
      });
    }
  };

  return (
    <>
      {/* Pass the scrollToNewCollection function as a prop to the Hero component */}
      <Hero scrollToNewCollection={scrollToNewCollection} />

      <Popular />
      <Offers />
      
      {/* NewCollection section with ref */}
      <div ref={newCollectionRef}>
        <NewCollection />
      </div>

      <NewsLatter />
    </>
  );
};
