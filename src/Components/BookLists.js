import React, {useEffect} from 'react'

import '../Styles/bootstrap.min.css'
import '../Styles/fontawesome.min.css'
import '../Styles/fontawesome.css'
import '../Styles/templatemo.css'
import '../Styles/templatemo.min.css'

import pearson from '../assets/pearson.png'
import penguine from '../assets/penguine.png'
import relx from '../assets/relx.png'
import routers from '../assets/reuters.png'


import Navbar from './Navbar'
import Footer from './Footer'


import { useDispatch, useSelector } from 'react-redux'
import { listBooks } from '../actions/listBooksAction'

import { Link } from 'react-router-dom'


    
           

const BookLists = () => {
    const dispatch = useDispatch()
    const booklist = useSelector(state => state.booklist)
    const {error, loading, books} = booklist


    useEffect(() => {
        dispatch(listBooks())
    }, [dispatch])



  return (
    <div>
        <Navbar />
        { loading ? <h2>Loading...</h2>
          : error ? <h3>{error}</h3>
          : 
  
    <div>
     

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



    
    <div className="container py-5">
          <h2 className='Categoryfield'>All Books</h2>
        <div className="row">

            <div className="col-lg-3">
                <h1 className="h2 pb-4">Categories</h1>
                <ul className="list-unstyled templatemo-accordion">
                    <li className="pb-3">
                        <Link className="collapsed d-flex justify-content-between h3 text-decoration-none" to="/bookshop/">
                        Adventure
                            
                        </Link>
                        
                    </li>
                    <li className="pb-3">
                        <Link className="collapsed d-flex justify-content-between h3 text-decoration-none" to="/bookshop/">
                        Classics
                    
                        </Link>
                     
                    </li>
                    <li className="pb-3">
                        <Link className="collapsed d-flex justify-content-between h3 text-decoration-none" to="/bookshop/">
                        Comic
                            
                        </Link>
                     
                    </li>
                    <li className="pb-3">
                        <Link className="collapsed d-flex justify-content-between h3 text-decoration-none" to="/bookshop/">
                        Detective
                            
                        </Link>
                     
                    </li>
                    <li className="pb-3">
                        <Link className="collapsed d-flex justify-content-between h3 text-decoration-none" to="/bookshop/">
                        Documentary & History
                            
                        </Link>
                     
                    </li>
                    <li className="pb-3">
                        <Link className="collapsed d-flex justify-content-between h3 text-decoration-none" to="/bookshop/">

                        All
                            
                        </Link>
                     
                    </li>
                </ul>
            </div>

            <div className="col-lg-9">
                <div className="row">
                   
                  
                </div>
                <div className="row">
                {books.map(book => (
                    <div className="col-md-4">
                        <div className="card mb-4 product-wap rounded-0">
                            <div className="card rounded-0">
                            <Link to={`/book/${book._id}`}>
                                <img className="card-img rounded-0 img-fluid" alt='..' src={`http://localhost:8000${book.image}`} /></Link>
                              
                            </div>
                            <div className="card-body">
                                <a href="shop-single.html" className="h3 text-decoration-none">{book.name}</a>
                                <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                    <li>Author: {book.brand}</li>
                                    <li className="pt-2">
                                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                    </li>
                                </ul>
                                <ul className="list-unstyled d-flex justify-content-center mb-1">
                                    <li className='ratingfield'>
                                        <i className="text-warning fa fa-star"></i>
                                        <h4 className='ratingnum'>{book.rating}</h4>
                                        
                                    </li>
                                </ul>
                                <p className="text-center mb-0">${book.price}</p>
                            </div>
                        </div>
                    </div>))}
               
                </div>
                <div div="row">
                    <ul className="pagination pagination-lg justify-content-end">
                        <li className="page-item disabled">
                            <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#" tabindex="-1">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">3</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    
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
  
    < Footer />

    </div>
}
    </div>
)
}

export default BookLists