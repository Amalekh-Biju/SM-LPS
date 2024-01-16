import React from 'react'
import './about.css'
import Header from '../header/Header'

const About = () => {
  return (
    <div className="about">
    <div className="header">
     <Header/>
    </div>
    <div className="about-content">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"></link>
        <div class="container">
          <h1>Website Refresh Timeline</h1>
            <div class="timeline">
                <div class="timeline-container primary">
                    <div class="timeline-icon">
                        <i class="far fa-grin"></i>
                    </div>
                    <div class="timeline-body">
                       <h4 class="timeline-title"><span class="badge">April 2021</span></h4>
                      <h4>Project Kickoff</h4>  
                      <p>Team was informed about the deprecation of the current platform (Drupal 7) and inability to upgrade to the newest version.  A full website re-development was required to keep all 42 school sites and IUSD.org up-to-date and secure. </p>
                        <p class="timeline-subtitle">Anticipated Project Completion Nov 2022</p>
                    </div>
                </div>
                 <div class="timeline-container primary">
                    <div class="timeline-icon">
                        <i class="far fa-grin"></i>
                    </div>
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">May 2021</span></h4>
                      <h4>Stakeholder & Audience Communication/Research</h4>  
                        <p>Sent communications to stakeholders and collected feedback from primary audiences.  </p>
             
                    </div>
                </div>
               <div class="timeline-container success">
                    <div class="timeline-icon">
                        <i class="far fa-grin"></i>
                    </div>
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">June 2021</span></h4>
                      <h4>Delivered Final Designs, Functional Document & Style Guide</h4>  
                        <p>Team was given 30 days (short) timeline to deliver completely updated UI and functionality document to developer in order to commence the development of the website refresh for IUSD.org.  </p>
                        <p class="timeline-subtitle">Anticipated Website Delivery January 2022</p>
                    </div>
                </div>
              
                <div class="timeline-container warning">
                    <div class="timeline-icon">
                        <i class="far fa-grin-beam-sweat"></i>
                    </div>
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">January 2022</span></h4>
                      <h4>Developer Delay</h4>  
                        <p>Expected delivery of IUSD.org and 4 school sites for QA was delayed.  Developer requested 3 more months to deliver sites for review.  A reasononable request and IUSD agreed</p>
                      <p class="timeline-subtitle">New anticipated Website Delivery March 2022</p>
                        
                    </div>
                </div>
              
                <div class="timeline-container warning">
                    <div class="timeline-icon">
                        <i class="far fa-grin-beam-sweat"></i>
                    </div>
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">March 2022</span></h4>
                      <h4>Developer Delay</h4>  
                        <p>Delivery of IUSD.org was once again delayed and reduced to just one site for QA.  Developer once again requested more time to deliver and IUSD agreed</p>
                            <p class="timeline-subtitle">New anticipated Website Delivery June 2022</p>
                    </div>
                </div>
              
                            <div class="timeline-container warning">
                    <div class="timeline-icon">
                        <i class="far fa-grin-beam-sweat"></i>
                    </div>
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">May 2022</span></h4>
                      <h4>Storage Issues</h4>  
                        <p>Notified by Developer that we would need to double our existing storage to facilitate the migration of old website to to the new platform.</p>
                        <p class="timeline-subtitle">Worked with IT Admin to secure quote and contract to address this issue</p>
                    </div>
                </div>
              
                <div class="timeline-container danger">
                    <div class="timeline-icon">
                        <i class="far fa-grimace"></i>
                    </div>
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">June 2022</span></h4>
                      <h4>Milestone Missed!</h4>  
                        <p>Promised delivery of IUSD.org was missed. Developer apologized for lack of resources and communication.  Acknowledges responsibility for issues and promises to rectify situation.</p>
                      
                    </div>
                </div>
              
               <div class="timeline-container primary">
                    <div class="timeline-icon">
                        <i class="far fa-grin"></i>
                    </div>
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">July 2022</span></h4>
                      <h4>Website delivered</h4>  
                        <p>After more than a 1 year of our initial delivery of the designs, the developer delivered a working version of the site</p>
                      
                    </div>
                </div>
                <div class="timeline-container danger">
                    <div class="timeline-icon">
                        <i class="far fa-grimace"></i>
                    </div>
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">July-September 2022</span></h4>
                      <h4>Website QA & Slow Fixes</h4>  
                        <p>The website delivery was better than previous deliveries, however numerous functionality and design issues still existed.  Over 300 fixes/tasks created (and counting) to get websites to launch.  Turnaround time for fixes were slow.</p>
               
                    </div>
                </div>
              
                 
              
  
                <div class="timeline-container success">
                    <div class="timeline-icon">
                        <i class="far fa-grin"></i>
                    </div>
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">October 2022</span></h4>
                      <h4>IUSD.org launched!</h4>  
                        <p>A HUGE MILSTONE, but a short lived celebration as the web team needed to shift their focus to coordinating the launch for the remaining 40+ additional sites that needed to be tested ane reviewed.</p>
                     
                    </div>
                </div>

                <div class="timeline-container danger">
                    <div class="timeline-icon">
                        <i class="far fa-grimace"></i>
                    </div>
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">October 2022 - January 2023</span></h4>
                      <h4>Slow School Website Fixes</h4>  
                        <p>Lack of resources and consistency in progress hampered an earlier launch for school sites.  </p>
              
                    </div>
                </div>
              
                <div class="timeline-container success">
                    <div class="timeline-icon">
                        <i class="far fa-grin"></i>
                    </div>   
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">January 2023</span></h4>
                        <h4>First Round of School Sites Launched!</h4> 
                        <p>It was critical that the first round of schools were as complete and functional as possible.  Additional time was spent to ensure that these sites would be a solid foundation for all other school site launches</p>
                    </div>
                </div>
              
               <div class="timeline-container primary">
                    <div class="timeline-icon">
                        <i class="far fa-grin"></i>
                    </div>   
                    <div class="timeline-body">
                        
                        <h4 class="timeline-title"><span class="badge">February 2023</span></h4>
                      <h4> New Timeline Established</h4>
                        <p>Due to additional delays, the web team had to reconfigure our entire school website rollout to ensure that we could launch all schools websites before the end of the year</p>
                      
                    </div>
                </div>
              
                <div class="timeline-container warning">
                    <div class="timeline-icon">
                        <i class="far fa-grin-beam-sweat"></i>
                    </div>
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">March 2023</span></h4>
                      <h4>PM Change</h4>  
                        <p>Our project manager had a career change and move on from the project.  We were reunited with our favorite PM</p>
                        
                    </div>
                </div>
                   <div class="timeline-container warning">
                    <div class="timeline-icon">
                        <i class="far fa-grin-beam-sweat"></i>
                    </div>
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">April 2023</span></h4>
                      <h4>Web Team Delay</h4>  
                        <p>Web team initiated our first project delay to accomodate other competing priorities.  This allowed us to pivot to another project while staying on track. </p>
                      
                    </div>
                </div>
              
                  <div class="timeline-container primary">
                    <div class="timeline-icon">
                        <i class="far fa-grin"></i>
                    </div>   
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">May 2023</span></h4>
                        <h4>ALL School Sites Launched!</h4> 
                        <p>MILESTONE! The aggressive timeline established enabled our team to QA and all school websites for delivery.  We received a low number of requests for training and help desk tickets.  Our communications paired with our preparedness minimized disruption and ensured a smooth transition to the new platform. </p>
                 
                    </div>
                </div>
              
                <div class="timeline-container warning">
                    <div class="timeline-icon">
                        <i class="far fa-grin-beam-sweat"></i>
                    </div>
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">May 2023</span></h4>
                      <h4>Final Websites Developer Delay</h4>  
                        <p>Developer informed our team that additional time was needed to create custom functionality needed for our 3rd party sites.</p>
               
                    </div>
                </div>
              

                <div class="timeline-container primary">
                    <div class="timeline-icon">
                        <i class="far fa-grin"></i>
                    </div>   
                    <div class="timeline-body">
                        
                        <h4 class="timeline-title"><span class="badge">July 2023</span></h4>
                      <h4>Project Completion Date Finalized (hopefully)</h4>
                        <p>Scheduled final sites for June 20th Delivery and July 10th Launch! </p>
                
                    </div>
                </div>
              
                 <div class="timeline-container secondary">
                    <div class="timeline-icon">
                        <i class="fa-solid fa-xs fa-burst"></i>
                    </div>   
                    <div class="timeline-body">
                        
                        <h4 class="timeline-title"><span class="badge">IMPACT</span></h4>
                      <h4>Evidence</h4>
                      <ul>
                        <li>Positive feedback </li>
                        <li>Low number tickets </li>
                        <li>Few training requests</li>
                      </ul>
                
                    </div>
                </div>
              
              
                 <div class="timeline-container secondary">
                    <div class="timeline-icon">
                        <i class="fa-solid fa-xs fa-people-arrows"></i>
                    </div>   
                    <div class="timeline-body">
                        
                        <h4 class="timeline-title"><span class="badge">DEPARTMENT GOAL</span></h4>
                      <h4>Collaboration</h4>
                      <ul>
                        <li>IT Sub-departments</li>
                        <li>District Departments/Sub-departments </li>
                        <li>School Sites</li>
                        <li>Communication</li>
                      </ul>
                
                    </div>
                </div>
              
              
            </div>
        </div>
        </div>
    </div>
  )
}

export default About