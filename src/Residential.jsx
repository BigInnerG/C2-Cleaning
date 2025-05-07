import { Link } from 'react-router-dom';

function Residential(){

    return(

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


          <h1 className="text-center">Residential Cleaning Services</h1>
          <p className="text-center mt-3">
            We provide top-notch cleaning services for Residential properties.
          </p>
          <p className="text-center mt-3">
            Our team is dedicated to ensuring your property is spotless and ready for guests.
          </p>
  
          {/* Carousel */}
          <div
            id="residentialCarousel"
            className="carousel slide mt-4"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            
            {/* Indicators */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#residentialCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#residentialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#residentialCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#residentialCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
  
            {/* Slides */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/outsidehouse.jpg" className="d-block w-100" alt="pic of outside of spa" />
              </div>
              <div className="carousel-item">
                <img src="images\sittingarea.jpg" className="d-block w-100" alt="pic of living room" />
              </div>
              <div className="carousel-item">
                <img src="images/kitchen.jpg" className="d-block w-100" alt="pic of kitchen" />
              </div>
              <div className="carousel-item">
                <img src="images\hisnhersinks.jpg" 
                className="d-block w-100" alt="pic of residential bathroom" />
              </div>
            </div>
  
            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#residentialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#residentialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

    );

}
export default Residential;