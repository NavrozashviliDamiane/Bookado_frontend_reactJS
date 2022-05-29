import React from 'react'
import '../Styles/bootstrap.min.css'
import '../Styles/fontawesome.min.css'
import '../Styles/fontawesome.css'
import '../Styles/templatemo.css'
import '../Styles/templatemo.min.css'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className="bg-dark" id="tempaltemo_footer">
        <div className="container">
            <div className="row">

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-success border-bottom pb-3 border-light logo">Bookado Shop</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li>
                            <i className="fas fa-map-marker-alt fa-fw"></i>
                            Tbilisi
                        </li>
                        
                        <li>
                            <i className="fa fa-envelope fa-fw"></i>
                            <a className="text-decoration-none" href="mailto:info@company.com">info@bookado.com</a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Books</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                    
                        <li><Link className="text-decoration-none" to="/bookshop/">Adventure</Link></li>
                        <li><Link className="text-decoration-none" to="/bookshop/">Classics</Link></li>
                        <li><Link className="text-decoration-none" to="/bookshop/">Comic</Link></li>
                        <li><Link className="text-decoration-none" to="/bookshop/">Detective</Link></li>
                        <li><Link className="text-decoration-none" to="/bookshop/">Documentary & History</Link></li>
                        <li><Link className="text-decoration-none" to="/bookshop/">All</Link></li>
                    </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li><Link className="text-decoration-none" to="/">Home</Link></li>
                        <li><Link className="text-decoration-none" to="/about/">About Us</Link></li>
                        <li><Link className="text-decoration-none" to="/BookShop/">Shop List</Link></li>
                        <li><Link className="text-decoration-none" to="/contact/">Contact</Link></li>
                    </ul>
                </div>

            </div>

            <div className="row text-light mb-4">
                <div className="col-12 mb-3">
                    <div className="w-100 my-3 border-top border-light"></div>
                </div>
                <div className="col-auto me-auto">
                    <ul className="list-inline text-left footer-icons">
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw"></i></a>
                        </li>
                    </ul>
                </div>
              
            </div>
        </div>

        <div className="w-100 bg-black py-3">
            <div className="container">
                <div className="row pt-2">
                    <div className="col-12">
                        <p className="text-left text-light">
                            Copyright &copy; 2022 Company Name 
                            | Created by <a rel="sponsored" href="https://daminavrozashvili.netlify.app/" target="_blank">Damiane Navrozashvili</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    </div>
  )
}

export default Footer