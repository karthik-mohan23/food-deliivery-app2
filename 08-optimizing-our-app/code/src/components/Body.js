import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0260688&lng=76.3124753&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // console.log(json?.data?.cards[2]?.data?.data?.cards[0]?.data);
  }

  if (allRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <section>
      <div className="banner">
        <div className="container">
          <div className="banner-container">
            <img
              className="banner-img"
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep"
              }
              alt=""
            />
            <img
              className="banner-img"
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/qsgjyrelvjr3atzl0ypm"
              }
              alt=""
            />
            <img
              className="banner-img"
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v"
              }
              alt=""
            />
            <img
              className="banner-img"
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex-sbc filter-container">
          <h2 className="no-restaurants">
            {allRestaurants.length} restaurants
          </h2>
          <div className="filter-input">
            <input
              type="text"
              placeholder="Restaurant name"
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
          <button className="rating-filter-btn">Rating</button>
        </div>
        <hr />
        <div className="card-container">
          {allRestaurants.map((restaurant) => {
            return <RestaurantCard key={restaurant.id} {...restaurant} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Body;
