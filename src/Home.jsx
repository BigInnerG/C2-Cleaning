import { Link } from 'react-router-dom';

function Home() {

    return (

      <div className="container text-center mt-5">
        {/* Logo */}
        <img src=".\public\images\logo.jpg" 
        alt="C2 Cleaning Logo" className="img-fluid mb-4" style={{ maxWidth: '1000px' }} />
  
        {/* Hero Heading */}
        <h1 className="display-4">Welcome to C2 Cleaning Services</h1>
        <p className="lead mt-3">
          Professional, Reliable, and Detail-Oriented Cleaning for Homes and Businesses.
        </p>
  
        {/* Call to Action Buttons */}
        <div className="mt-4">
          <Link to="/photos" className="btn btn-primary btn-lg mx-2">View Our Work</Link>
          <Link to="/contact" className="btn btn-outline-secondary btn-lg mx-2">Get a Quote</Link>
        </div>
  
        {/* About Section */}
        <section className="mt-5">
          <h2>Why Choose C2 Cleaning?</h2>
          <p className="mt-3">
            We specialize in residential, commercial, and AirBnB cleaning with unmatched attention to detail. 
            Our team is trained, trusted, and committed to delivering exceptional results for every space.
          </p>
        </section>
  
        {/* Footer (optional) */}
        <footer className="text-muted mt-5 mb-3">
          <small>© {new Date().getFullYear()} C2 Cleaning Services | <Link to="/contact">Contact Us</Link></small>
        </footer>
      </div>
    );

  }
  

  export default Home;