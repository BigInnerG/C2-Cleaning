import { Link } from "react-router-dom";

function Commercial() {

    return (

      <section>
        <div className="container mt-5">

            {/* Photos Nav Bar */}
            <nav>
            <Link to="/commercial">Commercial</Link> |{" "}
            <Link to="/residential">Residential</Link> |{" "}
            <Link to="/airbnb">Air BnB</Link> |{" "}
            <Link to="/moving">Move-In/Move-out</Link> |{" "}
            <Link to="/postconstruct">Post Construction</Link>
            </nav>


          <h1 className="text-center">Commercial Cleaning Services</h1>
          <p className="text-center mt-3">
            We provide top-notch cleaning services for Commercial properties.
          </p>
          <p className="text-center mt-3">
            Our team is dedicated to ensuring your property is spotless and ready for guests.
          </p>
  
          {/* Carousel */}
          <div
            id="commercialCarousel"
            className="carousel slide mt-4"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >

            {/* Indicators */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#commercialCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#commercialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#commercialCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#commercialCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#commercialCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
  
            {/* Slides */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/storefront.jpg" className="d-block w-100" alt="pic of outside of spa" />
              </div>
              <div className="carousel-item">
                <img src="images/insidespa.jpg" className="d-block w-100" alt="pic of inside of a spa" />
              </div>
              <div className="carousel-item">
                <img src="images/cleaning.jpg" className="d-block w-100" alt="pic of someone scrubbing floors" />
              </div>
              <div className="carousel-item">
                <img src="images/cleanhall.jpg" className="d-block w-100" alt="pic of clean hallway" />
              </div>
              <div className="carousel-item">
                <img src="images\comcleanhousekeep.jpg" className="d-block w-100" alt="cleaning guy with cleaning cart" />
              </div>
            </div>
  
            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#commercialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#commercialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    );
  }
  
  export default Commercial;