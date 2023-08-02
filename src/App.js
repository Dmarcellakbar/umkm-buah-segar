import React, { Suspense } from 'react';
import { Element } from 'react-scroll';
import Loader from './Loader/Loader';
import './style.css';

const Navbar = React.lazy(() => import('./Navbar/Navbar'));
const Hero = React.lazy(() => import('./Hero/Hero'));
const Product = React.lazy(() => import('./Product/Product'));
const Footer = React.lazy(() => import('./Footer/Footer'));
const Profile = React.lazy(() => import('./Profile'));
const Testimonial = React.lazy(() => import('./Testimonial'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div style={{ scroll: 'smooth' }}>
          <Navbar />
          <Element className="element" name="section1">
            <Hero />
          </Element>
          <Element className="element" name="section2">
            <Profile />
          </Element>
          <Element className="element" name="section3">
            <Product />
          </Element>
          <Element className="element" name="section4">
            <Testimonial />
          </Element>
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default App;
