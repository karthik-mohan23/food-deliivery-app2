import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import {
  API_LINK,
  BANNER_IMAGE_1,
  BANNER_IMAGE_2,
  BANNER_IMAGE_3,
  BANNER_IMAGE_4,
} from "../utilities/links";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(API_LINK);

    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <section>
      <div className="banner">
        <div className="container">
          <div className="banner-container">
            <img
              className="banner-img"
              src={BANNER_IMAGE_1}
              alt="banner image"
            />
            <img
              className="banner-img"
              src={BANNER_IMAGE_2}
              alt="banner image"
            />
            <img className="banner-img" src={BANNER_IMAGE_3} alt="" />
            <img
              className="banner-img"
              src={BANNER_IMAGE_4}
              alt="banner image"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex-sbc filter-container">
          <h2 className="no-restaurants">
            {filteredRestaurants.length} restaurants
          </h2>
          <div className="filter-input">
            <input
              type="text"
              placeholder="restaurant name"
              className="search-input"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="search-btn"
              onClick={() => {
                const searchedRestaurants = allRestaurants.filter(
                  (restaurant) => {
                    return restaurant?.data?.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase());
                  }
                );
                setSearchText("");
                return setFilteredRestaurants(searchedRestaurants);
              }}>
              🔍
            </button>
          </div>
          <button
            className="rating-filter-btn"
            onClick={() => {
              const filterRestaurants = allRestaurants.filter((restaurant) => {
                return restaurant?.data?.avgRating > 4;
              });
              return setFilteredRestaurants(filterRestaurants);
            }}>
            Rating
          </button>
        </div>
        <hr />
        <div className="card-container">
          {filteredRestaurants.map((restaurant) => {
            return <RestaurantCard key={restaurant.data.id} {...restaurant} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Body;
