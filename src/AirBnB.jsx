import { Link } from "react-router-dom";

function AirBnB() {

    return (

      <section>

        <div className="container mt-5">

            {/* Photos Nav Bar */}

            <nav className='mt-5'>
            <Link to="/commercial">Commercial</Link> |{" "}
            <Link to="/residential">Residential</Link> |{" "}
            <Link to="/airbnb">Air BnB</Link> |{" "}
            <Link to="/moving">Move-In/Move-out</Link> |{" "}
            <Link to="/postconstruct">Post Construction</Link>
            </nav>

          <h1 className="text-center">AirBnB Cleaning Services</h1>
          <p className="text-center mt-3">
            We provide top-notch cleaning services for AirBnB properties.
          </p>
          <p className="text-center mt-3">
            Our team is dedicated to ensuring your property is spotless and ready for guests.
          </p>
  
          {/* Carousel */}
          <div
            id="airbnbCarousel"
            className="carousel slide mt-4"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            {/* Indicators */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#airbnbCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#airbnbCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#airbnbCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#airbnbCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#airbnbCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#airbnbCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#airbnbCarousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
              <button type="button" data-bs-target="#airbnbCarousel" data-bs-slide-to="7" aria-label="Slide 8"></button>
            </div>
  
            {/* Slides */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/my-react-app/images/airbnbroomb4.jpg"
                  className="d-block w-100"
                  alt="AirBnB Room"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/my-react-app/images/airbnbroom.jpg"
                  className="d-block w-100"
                  alt="AirBnB Bathroom"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/my-react-app/images/airbnbrr.jpg"
                  className="d-block w-100"
                  alt="AirBnB Living Room"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/my-react-app/images/airbnbshower.jpg"
                  className="d-block w-100"
                  alt="AirBnB Living Room"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/airbnbshowerang.jpg"
                  className="d-block w-100"
                  alt="AirBnB Living Room"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/my-react-app/images/airbnbbath.jpg"
                  className="d-block w-100"
                  alt="AirBnB Living Room"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/my-react-app/images/airbnbkit.jpg"
                  className="d-block w-100"
                  alt="AirBnB Living Room"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/my-react-app/images/airbnbkitchenette.jpg"
                  className="d-block w-100"
                  alt="AirBnB Living Room"
                />
              </div>
            </div>
  
            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#airbnbCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#airbnbCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    );
  }
  
  export default AirBnB;
  