import React from 'react'
import '../Styles/bootstrap.min.css'
import '../Styles/fontawesome.min.css'
import '../Styles/fontawesome.css'
import '../Styles/templatemo.css'
import '../Styles/templatemo.min.css'

import pearson from '../assets/pearson.png'
import penguine from '../assets/penguine.png'
import relx from '../assets/relx.png'
import routers from '../assets/reuters.png'
import passionimg from '../assets/passion-min.jpg'

import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <div>
        < Navbar />
        

    <div className="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="w-100 pt-1 mb-5 text-right">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="" method="get" className="modal-content modal-body border-0 p-0">
                <div className="input-group mb-2">
                    <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                    <button type="submit" className="input-group-text bg-success text-light">
                        <i className="fa fa-fw fa-search text-white"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>



    <section className="bg-success py-5">
        <div className="container">
            <div className="row align-items-center py-5">
                <div className="col-md-8 text-white">
                    <h1>About Us</h1>
                    <p>
                    Welcome to Bookado, your number one source for all genres of books. 
                    <br></br>
                    We're dedicated to providing you the best of books, 
                    with a focus on dependability. <br></br>


           We're working to turn our passion for Books 
           into a booming online store. <br></br>
           We hope you enjoy our books as much as we enjoy 
           offering them to you.
                    </p>
                </div>
                <div className="col-md-4">
                    <img src={passionimg} width='400px' height='300px' alt="About Hero" />
                </div>
            </div>
        </div>
    </section>

    <section className="container py-5">
        <div className="row text-center pt-5 pb-3">
            <div className="col-lg-6 m-auto">
                <h1 className="h1">Our Services</h1>
                <p>
                Good service is good business
                </p>
            </div>
        </div>
        <div className="row">

            <div className="col-md-6 col-lg-3 pb-5">
                <div className="h-100 py-5 services-icon-wap shadow">
                    <div className="h1 text-success text-center"><i className="fa fa-truck fa-lg"></i></div>
                    <h2 className="h5 mt-4 text-center">Delivery Services</h2>
                </div>
            </div>

            <div className="col-md-6 col-lg-3 pb-5">
                <div className="h-100 py-5 services-icon-wap shadow">
                    <div className="h1 text-success text-center"><i className="fas fa-exchange-alt"></i></div>
                    <h2 className="h5 mt-4 text-center">Shipping & Return</h2>
                </div>
            </div>

            <div className="col-md-6 col-lg-3 pb-5">
                <div className="h-100 py-5 services-icon-wap shadow">
                    <div className="h1 text-success text-center"><i className="fa fa-percent"></i></div>
                    <h2 className="h5 mt-4 text-center">Promotion</h2>
                </div>
            </div>

            <div className="col-md-6 col-lg-3 pb-5">
                <div className="h-100 py-5 services-icon-wap shadow">
                    <div className="h1 text-success text-center"><i className="fa fa-user"></i></div>
                    <h2 className="h5 mt-4 text-center">Customer Service</h2>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-light py-5">
        <div className="container my-4">
            <div className="row text-center py-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Our Brands</h1>
                    <p>
                    The best way to predict the future is to create it
                    </p>
                </div>
                <div className="col-lg-9 m-auto tempaltemo-carousel">
                    <div className="row d-flex flex-row">
                      
                        <div className="col-1 align-self-center">
                            <a className="h1" href="#multi-item-example" role="button" data-bs-slide="prev">
                               
                            </a>
                        </div>
                      
                        <div className="col">
                            <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="multi-item-example" data-bs-ride="carousel">
                             
                                <div className="carousel-inner product-links-wap" role="listbox">

                                  
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-3 p-md-5">
                                                <a href="#"><img className="img-fluid brand-img" src={pearson} alt="Brand Logo" /></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#"><img className="img-fluid brand-img" src={routers} alt="Brand Logo"/></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#"><img className="img-fluid brand-img" src={penguine} alt="Brand Logo"/></a>
                                            </div>
                                            <div className="col-3 p-md-5">
                                                <a href="#"><img className="img-fluid brand-img" src={relx} alt="Brand Logo"/></a>
                                            </div>
                                        </div>
                                    </div>
                                  

                                   
                        
                                  
                                
                                
                                </div>
                              
                            </div>
                        </div>
                      
                        <div className="col-1 align-self-center">
                            <a className="h1" href="#multi-item-example" role="button" data-bs-slide="next">
                                
                            </a>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />


    </div>
  )
}

export default About