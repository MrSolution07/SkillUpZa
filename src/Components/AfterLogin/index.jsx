import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import './AfterLogin.css'; // Import CSS file for styling

const AfterLogin = () => {
  const [isCardToggled, setIsCardToggled] = useState(false);

  const handleCardToggle = () => {
    setIsCardToggled(!isCardToggled); // Toggle the state when the card is clicked
  };

  return (
    
    <div className="container">
      

      {/* Cards */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Card 1 */}
        <div className="col mb-3">
          
          <div
            className={`card ${isCardToggled ? 'toggled' : ''}`}
            style={{ width: '22rem' }}
            onClick={handleCardToggle}
          >
            <img src="/public/assets/images/image1.jpg" className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h5 className="card-title">Dashboard</h5>
              <p className="card-text">
                Navigate to the dashboard to view progress,courses and job listings

              </p>
              <Link to="/dashboard"  className="btn btn-primary">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col mb-3">
          <div
            className={`card ${isCardToggled ? 'toggled' : ''}`}
            style={{ width: '22rem' }}
            onClick={handleCardToggle}
          >
            <img src="/public/assets/images/image2.jpg" className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h5 className="card-title">Payment</h5>
              <p className="card-text">
                Navigate to the payment gateway to purchase specified courses
              </p>
              <a href="#" className="btn btn-primary">
                Payment
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col mb-3">
          <div
            className={`card ${isCardToggled ? 'toggled' : ''}`}
            style={{ width: '22rem' }}
            onClick={handleCardToggle}
          >
            <img src="/public/assets/images/image3.jpg" className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h5 className="card-title">Job application checklist</h5>
              <p className="card-text">
                View this article that provides a basic outline of an effective job application
              </p>
              <Link to="https://www.linkedin.com/pulse/strategies-submitting-successful-job-application-krishna-kumar/" className="btn btn-primary">
                Job application 
              </Link>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col mb-3">
          <div
            className={`card ${isCardToggled ? 'toggled' : ''}`}
            style={{ width: '22rem' }}
            onClick={handleCardToggle}
          >
            <img src="/public/assets/images/image4.jpg" className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h5 className="card-title">Career Insights</h5>
              <p className="card-text">
                View inisghts and on-demand skills related to your career
              </p>
              <a href="#" className="btn btn-primary">
                Career
              </a>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col mb-3">
          <div
            className={`card ${isCardToggled ? 'toggled' : ''}`}
            style={{ width: '22rem' }}
            onClick={handleCardToggle}
          >
            <img src="/public/assets/images/image5.jpg" className="card-img-top " alt="Card Image"/>
            <div className="card-body">
              <h5 className="card-title">Networking</h5>
              <p className="card-text">
                Network with other people in your industry
              </p>
              <a href="#" className="btn btn-primary">
              Networking 
             </a>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col mb-3">
          <div
            className={`card ${isCardToggled ? 'toggled' : ''}`}
            style={{ width: '22rem' }}
            onClick={handleCardToggle}
          >
            <img src="/public/assets/images/image6.jpg" className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h5 className="card-title">Certification Programs</h5>
              <p className="card-text">
                Checkout cerification programs to enhance your credibility
              </p>
              <a href="#" className="btn btn-primary">
                Certification
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterLogin;
