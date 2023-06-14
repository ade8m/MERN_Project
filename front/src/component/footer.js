
import React from 'react';

export const FooterComponent =()=> {
    return (

        <footer className="bg-light py-2">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h4>Bus Software</h4>
                        <p>123 Main Street, City, Country</p>
                        <p>Phone: 123-456-7890</p>
                        <p>Email: info@company.com</p>
                    </div>
                 <section className="mb-4">

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

                    </div>

                    <div className="text-center p-3" style={{ backgroundColor: '#f7e5e5' }}>
                        © 2023 Copyright: 
                        <a className="text-dark" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                    </div>
                </div>
     
        </footer>


    );
};

export default FooterComponent;
