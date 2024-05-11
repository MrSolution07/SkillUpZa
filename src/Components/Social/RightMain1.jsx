import React from 'react';

const RightMain1 = () => {
  return (
    <div className="right-main-1">
      <div>
        <h4 style={{ padding: 0, margin: 0 }}>Add to your feed</h4>
      </div>
      <div className="arz-card">
        <div>
          <img className="arz" src="/public/assets/images/photos/anz.jpeg" alt="ANZ Logo" />
        </div>
        <div className="arz-info">
          <h5>ANZ OILFIELD SERVICES PVT. LTD.</h5>
          <p>Company - Oil & Energy</p>
          <button className="follow-button"><i className="fa fa-plus"></i> Follow</button>
        </div>
      </div>
      <div className="arz-card">
        <div>
          <img className="arz" src="/public/assets/images/photos/ropay.jpeg" alt="roPay Logo" />
        </div>
        <div className="arz-info">
          <h5>roPay</h5>
          <p>Company - Financial Services</p>
          <button className="follow-button"><i className="fa fa-plus"></i> Follow</button>
        </div>
      </div>
      <div className="arz-card">
        <div>
          <img className="arz" src="/public/assets/images/photos/ARM.jpeg" alt="ARM Labs Logo" />
        </div>
        <div className="arz-info">
          <h5>ARM Labs Lagos Techstars Accelerator</h5>
          <p>Company - Venture Capital & Private</p>
          <button className="follow-button"><i className="fa fa-plus"></i> Follow</button>
        </div>
      </div>
      <p style={{ fontSize: '14px', textAlign: 'center', marginTop: '10px', color: 'grey' }}>View all recommendations <i className="fa fa-arrow-right"></i></p>
    </div>
  );
};

export default RightMain1;
