import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBookDetail } from '../actions/listBooksAction'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


import '../Styles/bootstrap.min.css'
import '../Styles/fontawesome.min.css'
import '../Styles/fontawesome.css'
import '../Styles/templatemo.css'
import './BookLists.css'
import '../Styles/templatemo.min.css'

import Navbar from './Navbar'
import Footer from './Footer'

const BookDetal = () => {
    const dispatch = useDispatch()
    const bookDetail = useSelector(state => state.bookDetail)
    const { loading, error, book } = bookDetail


    const {id} = useParams();


    useEffect(()=> {
        dispatch(listBookDetail(id))
    }, [dispatch, id])




  return (
    <div>
        <Navbar />
 
        { loading ? <h2>Loading...</h2>
          : error ? <h3>{error}</h3>
          : (
            <div>
            <div className="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="w-100 pt-1 mb-5 text-right">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="" method="get" className="modal-content modal-body border-0 p-0">
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..."/>
                            <button type="submit" className="input-group-text bg-success text-light">
                                <i className="fa fa-fw fa-search text-white"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        
        
            <section className="bg-light">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-5 mt-5">
                            <div className="card mb-3">
                                <img className="card-img img-fluid" src={`http://localhost:8000${book.image}`} alt="Card image cap" id="product-detail"/>
                            </div>
                           
                        </div>
                      
                        <div className="col-lg-7 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="h2">{book.name}</h1>
                                    <p className="h3 py-2">${book.price}</p>
                                    <p className="py-2">
                                        <i className="fa fa-star text-warning"></i>
                                        
                                        <span className="list-inline-item text-dark">{book.rating}</span>
                                    </p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h6>Author: {book.brand}</h6>
                                        </li>
                                        
                                    </ul>
        
                                    <h6>Description:</h6>
                                    <p>{book.description}</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h6>In Stock : {book.countInStock}</h6>
                                        </li>
                                        
                                    </ul>
        
                                    
        
                                    <form action="" method="GET">
                                        <input type="hidden" name="product-title" value="Activewear"/>
                                        <div className="row">
                                            
                                            
                                        </div>
                                        <div className="row pb-3">
                                            <div className="col d-grid">
                                                <Link to='/contact/'><button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Contact For More Details</button></Link>
                                            </div>
                                           
                                        </div>
                                    </form>
        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
        
           
           
          
            </div>
          )
       
    
     }
        <Footer />
  
    </div>
  )
}

export default BookDetal