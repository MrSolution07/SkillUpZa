import TeacherCard from "../../../Components/Cards/TeacherCard";
import Header from "../../../Components/Social/Header";
import React, { useState, useEffect } from 'react';
function UserJobs() {
  const [userJobs, setUserJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('https://backend-skillup.onrender.com/jobs/getJobs.php')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setUserJobs(data.jobListings);
        } else {
          console.error('Error fetching jobs:', data.message);
        }
      })
      .catch(error => console.error('Error fetching jobs:', error))
      .finally(() => setLoading(false));
  }, []);
  
  
  return (
            <div className="container" style={{marginTop:"10%"}}>
           <Header/>
            <div className="row">
                <h2 className="sec-title mb-15">
                  <span></span> 
                </h2>
            </div>

            <div className="row">
            {loading ? (
          <p>Loading...</p>
        ) : (
          userJobs.map(job => (
            <TeacherCard
              key={job.id}
              teacher={{
                img: `data:image/jpeg;base64,${job.jobImage}`,
                name: job.businessName,
                subject: job.jobName,
              }}
            />
          ))
        )}
            </div>
          </div>

        
    )
}

export default UserJobs;