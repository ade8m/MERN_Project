
import React from 'react';

export const FooterComponent =()=> {
    return (

        <footer className="bg-warning text-dark text-center py-3">
            <div className="container">
               
                   
                 <section className="mb-4">
                 <div className="info">
                        <h4>Bus Software</h4>
                        <p>123 Main Street, City, Country</p>
                        <p>Phone: 123-456-7890</p>
                        <p>Email: info@company.com</p>
                    </div>

                            <a
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: '#3b5998' }}
                                href="#!"
                                role="button"
                            ><i className="fab fa-facebook-f"></i></a>
                            <a
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: '#55acee' }}
                                href="#!"
                                role="button"
                            ><i className="fab fa-twitter"></i></a>

                            <a
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: '#dd4b39' }}
                                href="#!"
                                role="button"
                            ><i className="fab fa-google"></i></a>
                            <a
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: '#0082ca' }}
                                href="#!"
                                role="button"
                            ><i className="fab fa-linkedin-in"></i></a>

                        </section>

                    
        <div className="container">
          <p>© 2023 Rent Car. All rights reserved.</p>
        </div>
   
                </div>
     
        </footer>


    );
};

export default FooterComponent;
