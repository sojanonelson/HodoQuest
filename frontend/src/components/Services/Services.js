import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <section className="services">
      <h2>Services</h2>
      <div>
        <Link to="/services/premium">Premium Services</Link>
        <Link to="/services/economic">Economic Services</Link>
      </div>
    </section>
  );
}

export default Services;
