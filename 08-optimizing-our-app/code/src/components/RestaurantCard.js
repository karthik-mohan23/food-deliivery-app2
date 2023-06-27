const RestaurantCard = (props) => {
  console.log(props.data);
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
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          alt="restaurant image"
        />
      </div>
      <h2 className="res-name">{name}</h2>
      <p className="res-cuisines">{cuisines.join(", ")}</p>
      <div className="card-flex">
        <p className={avgRating < 4 ? "res-rating-o" : "res-rating-g"}>
          ★ {avgRating}
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
