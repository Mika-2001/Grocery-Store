import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4 fw-bold mb-4">Welcome to Your Online Grocery Store!</h1>
        <p className="lead mb-5">
          Your one-stop shop for the best products at unbeatable prices. Whether you're looking for the latest trends, everyday essentials, or unique finds, we have it all. Shop confidently with our hassle-free shipping and top-notch customer service.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <img
              src="https://static.israel21c.org/www/uploads/2021/06/grocery-shopping.jpg"
              alt="Store Image"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        <div className="mt-5">
          <Link to="/products" className="btn btn-primary btn-lg me-3">
            Shop Now
          </Link>
          <Link to="/login" className="btn btn-outline-secondary btn-lg me-3">
            Login
          </Link>
          <Link to="/signup" className="btn btn-outline-success btn-lg">
            Register
          </Link>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 text-center">
          <h4 className="fw-bold">Wide Selection</h4>
          <p>Explore a vast range of products curated just for you.</p>
        </div>
        <div className="col-md-4 text-center">
          <h4 className="fw-bold">Fast Shipping</h4>
          <p>Get your products delivered quickly and securely.</p>
        </div>
        <div className="col-md-4 text-center">
          <h4 className="fw-bold">Customer Support</h4>
          <p>We're here to help, every step of the way.</p>
        </div>
      </div>

      <footer className="text-center mt-5">
        <p className="text-muted">&copy; {new Date().getFullYear()} Your Online Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
