import { Link } from 'react-router-dom';

function PostConstruct() {

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

            <h1 className="text-center">Post Construction Services</h1>
          <p className="text-center mt-3">
            We provide top-notch cleaning services for post construction sites.
          </p>
          <p className="text-center mt-3">
            Our team is dedicated to ensuring your property is spotless and ready for guests.
          </p>

            {/* Carousel */}
          <div
            id="postconCarousel"
            className="carousel slide mt-4"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >

            {/* Indicators */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#postconCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#postconCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#postconCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#postconCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>

            {/* Slides */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="images\postpoolside.jpg"
                  className="d-block w-100"
                  alt="photo of poolside after construction"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images\postwithstairs.jpg"
                  className="d-block w-100"
                  alt="photo of stairs after construction"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images\postcleaning.jpg"
                  className="d-block w-100"
                  alt="photo of post contruction cleaning"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images\postofficecleaning.jpg"
                  className="d-block w-100"
                  alt="photo of office cleaning"
                />
              </div>
            </div>

             {/* Controls */}
             <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="postconCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#postconCarousel"
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
  
  export default PostConstruct;