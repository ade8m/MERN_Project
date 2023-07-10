import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      

      {/* Main content */}
      <div className="container-fluid bg-image" style={{ backgroundImage: 'url(path/to/your/image.jpg)' }}>
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Welcome to Rent Car</h1>
            <p>Rent your dream car today</p>
            <Link className="btn btn-primary" to="/cars">View Cars</Link>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
