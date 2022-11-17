//rsc - Creates a stateless React component
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

// DemoRouter Component
const DemoRouter = () => {
    return (
        <>
            <Router>

                <Header />

                <Routes>
                    <Route path='/' element={<Welcome />} />
                    <Route path='about' element={<About />} />
                    <Route path='home' element={<Home />} />
                    <Route path='person' element={<Person />} />
                    <Route path='error' element={<NotFound />} />
                    <Route path='*' element={<Navigate to={'/error'} />} /> {/* All other paths will show Error page */}
                </Routes>
            </Router>

        </>
    );
};

//Navigation Component
const Header = () =>{
    return(
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

        <Link to={'/'} className='d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none'>
            🧰 Welcome
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li className='nav-item'>
                <Link className='nav-link' to={'home'}>Home</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to={'person'}>Person</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to={'about'}>About</Link>
            </li>

        </ul>

        <div className="col-md-3 text-end">
            <Link to={"/login"} className="btn btn-outline-primary me-2">Login</Link>
            <Link to={"/signup"} className="btn btn-primary">Sign-up</Link>
        </div>
    </header>
    )}



// Minor Page Components
const Welcome = () => <h1>Welcome Page 🗯️</h1>
const About = () => <h1>About Page ❓</h1>
const Home = () => <h1>Home Page 🏠</h1>
const Person = () => <h1>Person Page 🧔</h1>
const NotFound = () => <h1> ❗ Page Not Found ❗ 🙀</h1>




export default DemoRouter;