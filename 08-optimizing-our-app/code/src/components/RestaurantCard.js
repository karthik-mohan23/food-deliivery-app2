import { RESTAURANT_CARD_IMG } from "../utilities/links";

const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    slaString,
    costForTwoString,
  } = props?.data;
  return (
    <div className="card">
      <div>
        <img
          src={RESTAURANT_CARD_IMG + cloudinaryImageId}
          alt="restaurant image"
        />
      </div>
      <h2 className="res-name">{name}</h2>
      <p className="res-cuisines">{cuisines.join(", ")}</p>
      <div className="card-flex">
        <p className={avgRating < 4 ? "res-rating-o" : "res-rating-g"}>
          <span className="rating-bg-white">★ {avgRating}</span>
        </p>
        <div>•</div>
        <p>{slaString}</p>
        <div>•</div>
        <p>{costForTwoString}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
