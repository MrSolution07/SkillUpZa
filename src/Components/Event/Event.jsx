// this is the contact now block on the home page
// we can even put an api to this to fetch real time event for our users.
// import { Link } from "react-router-dom";

// function Event() {
//   return (
//     <section className="event-section">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12 text-center">
//             <h2 className="sec-title">
//               <span>Contact Now</span> Upcoming Events
//             </h2>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-6">
//             <div className="event-item-1">
//               <div className="e-date">
//                 24 <span>Jun</span>
//               </div>
//               <p>
//                 <i className="icon_pin_alt"></i>Johannesburg, SA
//               </p>
//               <h4>
//                 <Link to="single-event">
//                   Consumer Food Safety Education Conference
//                 </Link>
//               </h4>
//               <Link className="SkillUplms-btn" to="#">
//                 Get Ticket
//               </Link>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="event-item-1">
//               <div className="e-date">
//                 27 <span>July</span>
//               </div>
//               <p>
//                 <i className="icon_pin_alt"></i>Vancouver, Canada
//               </p>
//               <h4>
//                 <Link to="single-event">
//                   Build Education Website Using WordPress
//                 </Link>
//               </h4>
//               <Link className="SkillUplms-btn" to="#">
//                 Get Ticket
//               </Link>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="event-item-1">
//               <div className="e-date">
//                 16 <span>Nov</span>
//               </div>
//               <p>
//                 <i className="icon_pin_alt"></i>Chicago, US
//               </p>
//               <h4>
//                 <Link to="single-event">
//                   How Meditation Improve your Mental Health?
//                 </Link>
//               </h4>
//               <Link className="SkillUplms-btn" to="#">
//                 Get Ticket
//               </Link>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="event-item-1">
//               <div className="e-date">
//                 13 <span>Nov</span>
//               </div>
//               <p>
//                 <i className="icon_pin_alt"></i>Texas, US
//               </p>
//               <h4>
//                 <Link to="single-event">
//                   Understanding Luxury Fashion in a Changing
//                 </Link>
//               </h4>
//               <Link className="SkillUplms-btn" to="#">
//                 Get Ticket
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12 text-center">
//             <Link className="read-more" to="">
//               View all Events<i className="arrow_right"></i>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Event;




import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://www.howler.co.za/upcoming')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');

        const eventTitles = Array.from(doc.querySelectorAll('.upcoming-event-card__title span'))
          .slice(0, 4)
          .map(span => span.textContent);

        const eventDates = Array.from(doc.querySelectorAll('.upcoming-event-card__date'))
          .slice(0, 4)
          .map(dateElement => dateElement.textContent.substring(0,7));

        const eventVenues = Array.from(doc.querySelectorAll('.upcoming-event-card__venue'))
          .slice(0, 4)
          .map(venueElement => venueElement.textContent);

        const eventLinks = Array.from(doc.querySelectorAll('.upcoming-event-card__title a'))
          .slice(0, 4)
          .map(linkElement => linkElement.getAttribute('href'));

        setEvents(eventTitles.map((title, index) => ({
          title,
          date: eventDates[index],
          month: eventDates[index].substring(3),
          venue: eventVenues[index],
          link: eventLinks[index],
        })));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <section className="event-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title">
              <span>Contact Now</span> Upcoming Events
            </h2>
          </div>
        </div>
        <div className="row">
          {events.map((event, index) => (
            <div className="col-md-6" key={index}>
              <div className="event-item-1">
                <div className="e-date">
                  {event.date} 
                </div>
                <p>
                  <i className="icon_pin_alt"></i>{event.venue}
                </p>
                <h4>
                  <Link to={event.link}>
                    {event.title}
                  </Link>
                </h4>
                <Link className="bisylms-btn" to="https://www.howler.co.za/upcoming">
                  Get Ticket
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <Link className="read-more" to="https://www.howler.co.za/upcoming">
              View all Events<i className="arrow_right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;

