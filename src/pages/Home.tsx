import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {/* FOR MAIN IMAGE */}
      <section>

      </section>

      {/* HEADER */}
      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      {/* PRODUCT CART */}
      <main>

      </main>
    </div>
  );
};
export default Home;
