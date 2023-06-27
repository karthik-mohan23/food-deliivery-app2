import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <section className="container ">
      <div className="shimmer">
        <div className="shimmer-banner"></div>
        <div className="card-container shimmer-grid">
          {Array(16)
            .fill("")
            .map((e, index) => {
              return <ShimmerCard key={index} />;
            })}
        </div>
      </div>
    </section>
  );
};
export default Shimmer;
