import React from 'react'

const AboutPage = () => {
  return (
   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="/about-image.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">About Us</h1>
      <p className="py-6">
        We are passionate about delivering the best food with love ❤️. 
        Our mission is to serve happiness through taste.
      </p>
      <button className="btn btn-primary">Learn More</button>
    </div>
  </div>
</div>

  )
}

export default AboutPage