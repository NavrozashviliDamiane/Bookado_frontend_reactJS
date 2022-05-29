import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBooks } from '../actions/listBooksAction'

import { Link } from 'react-router-dom'


import '../Styles/bootstrap.min.css'
import '../Styles/fontawesome.min.css'
import '../Styles/fontawesome.css'
import '../Styles/templatemo.css'
import '../Styles/templatemo.min.css'
import '../Styles/slick-theme.min.css'
import '../Styles/slick.min.css'
import '../Styles/slick-theme.css'
import '../Styles/categories.css'

import Bookimg from '../assets/bookh.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
import heroimg from '../assets/reading-min.jpg'
import adventureimg from '../assets/adventuresh-min.jpg'
import historyimg from '../assets/historysh-min.jpg'
import classicimg from '../assets/classich-min.jpg'








export const HomePage = () => {
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
        <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
            
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src={heroimg} alt="" />
                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left align-self-center">
                                <h1 className="h1 text-success"><b>Bookado</b> Shop</h1>
                                <h3 className="h2">Tiny and Perfect </h3>
                                <p>
                                Every book in a bookstore is a fresh beginning. Every book is the next iteration of a very old story. 
                                Bookado store, therefore, is like a safe-deposit box for civilization 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            
        </div>
        
        </div>
                <section className="container py-5">
                <div className="row text-center pt-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Genres of The Month</h1>
                        <p>
                            Choose From your Vibes
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <Link to="/bookshop/"><img src={adventureimg} width='250px' height='250px' className='img1' /></Link>
                        <h5 className="text-center mt-3 mb-3">Adventure</h5>
                        <p className="text-center"><Link to='/bookshop/' className="btn btn-success">Go Shop</Link></p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <Link to="/bookshop/"><img src={classicimg} width='250px' height='250px' className='img2' /></Link>
                        <h2 className="h5 text-center mt-3 mb-3">Classic</h2>
                        <p className="text-center"><Link to='/bookshop/' className="btn btn-success">Go Shop</Link></p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <Link to="/bookshop/"><img src={historyimg} width='250px' height='250px' className='img3' /></Link>
                        <h2 className="h5 text-center mt-3 mb-3">History</h2>
                        <p className="text-center"><Link to='/bookshop/' className="btn btn-success">Go Shop</Link></p>
                    </div>
                </div>
            </section>
            <section className="bg-light">
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Featured Books</h1>
                            <p>
                            What you choose also chooses you
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        
                        {books.slice(0, 6).map(book => (
                <div className="col-12 col-md-4 mb-4">
                <div className="card h-100">
                    <Link to={`/book/${book._id}`}>
                        <img src={`http://localhost:8000${book.image}`} height='400px' className="card-img-top" alt="..." />
                    </Link>
                    <div className="card-body">
                        <ul className="list-unstyled d-flex justify-content-between">
                            <li>
                                <i className="text-warning fa fa-star"></i>
                                <h5>{book.rating}</h5>
                            </li>
                            <li className="text-muted text-right">${book.price}</li>
                        </ul>
                        <Link to={`/book/${book._id}`} className="h2 text-decoration-none text-dark">{book.name}</Link>
                        <p className="card-text">
                            {book.brand}
                        </p>
                        <p className="text-muted">Genre: {book.category} </p>
                    </div>
                </div>
            </div>
                      
              ))}
                    </div>
                </div>
            </section>
            </div>

          }
        
        <Footer />
    </div>
  )
}


export default HomePage
