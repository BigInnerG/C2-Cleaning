import { Link } from "react-router-dom";

function Moving() {
  return (
    <section>
      <div className="container mt-5">
        {/* Photos Nav Bar */}
        <nav className="mt-5">
          <Link to="/commercial">Commercial</Link> |{" "}
          <Link to="/residential">Residential</Link> |{" "}
          <Link to="/airbnb">Air BnB</Link> |{" "}
          <Link to="/moving">Move-In/Move-out</Link> |{" "}
          <Link to="/postconstruct">Post Construction</Link>
        </nav>

        <h1 className="text-center">Moving In/Out Cleaning Services</h1>
        <p className="text-center mt-3">
          We provide top-notch cleaning services for Moving In/Out properties.
        </p>
        <p className="text-center mt-3">
          Our team is dedicated to ensuring your property is spotless and ready for guests.
        </p>

        {/* Carousel */}
        <div
          id="movingCarousel"
          className="carousel slide mt-4"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#movingCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#movingCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#movingCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/holdnmovingboxes.jpg"
                className="d-block w-100"
                alt="pic someone holding moving boxes"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/cleanmovein.jpg"
                className="d-block w-100"
                alt="pic of woman in clean empty room"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/moveinclean.jpg"
                className="d-block w-100"
                alt="pic of clean living room"
              />
            </div>
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#movingCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#movingCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Moving;
