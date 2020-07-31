import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <div class="row education">
          <div class="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div class="nine columns main-col">
            <div class="row item">
              <div class="twelve columns">
                <h3>Kenzie Academy</h3>
                <p class="info">
                  Full Stack Engineer <span>&bull;</span>{" "}
                  <em class="date">July 2020</em>
                </p>
              </div>
            </div>

            <div class="row item">
              <div class="twelve columns">
                <h3>Colorado Technical University</h3>
                <p class="info">
                  B.S.B.A Degree in Business Administration <span>&bull;</span>{" "}
                  <em class="date">December 2009</em>
                </p>
              </div>
            </div>
            <div className="row work">
              <div className="three columns header-col">
                <h1>
                  <span>Work</span>
                </h1>
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Kenzie Academy</h3>
                    <p className="info">
                      Student Coach (Remote) <span>•</span>{" "}
                      <em className="date">March 2010 - Present</em>
                    </p>
                    <p>
                      • Aid students with troubleshooting, debugging, and
                      solving complex programming problems <br />• Identify
                      steps to assist students who are not currently passing
                      achieve a grade of at least 80% <br />• Assist with
                      whiteboard assessments
                    </p>
                  </div>
                </div>
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Mount Sinai Hospital</h3>
                    <p className="info">
                      Credentials Coordinator <span>•</span>{" "}
                      <em className="date">February 2018 - September 2018</em>
                    </p>
                    <p>
                      • Coordinated the credentialing and re-credentialing
                      process for the Medical Staff and Allied Health <br /> •
                      Ensured requests for privileges were in compliance with
                      the department’s delineation of privileges criteria <br />
                      • Served as an operational resource for internal team
                      members for expedited problem identification and
                      resolution, provision of credentialing-specific updates,
                      and team interactions and deadline <br /> • Reduced the
                      turnaround time for recredentialing by overhauling the
                      legacy filing system which resulted in a 50% increase in
                      productivity
                    </p>
                  </div>
                </div>
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Sutherland Cloud Source (Remote)</h3>
                    <p className="info">
                      Advance Service Representative <span>•</span>{" "}
                      <em className="date">May 2015 - February 2016</em>
                    </p>
                    <p>
                      • Fielded inbound calls regarding billing and technical
                      issues <br /> • Accessed customer databases, knowledge
                      resources, and technical applications to perform root
                      cause analysis.
                      <br />• Verified that requests for privileges were in
                      compliance with the department’s delineation of privileges
                      criteria <br /> • Upsold 30% of the customers that wanted
                      to cancel service due to pricing
                    </p>
                  </div>
                </div>
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Memorial Sloan Kettering Cancer Center</h3>
                    <p className="info">
                      Session Assistant<span>•</span>{" "}
                      <em className="date">June 2010 - January 2014</em>
                    </p>
                    <p className="info">
                      Physician's Office Assistant <span>•</span>{" "}
                      <em className="date">July 2015 - April 2017</em>
                    </p>
                    <p>
                      • Coordinated appointments with internal and external
                      physicians for procedures, consults, and treatments <br />
                      • Handled travel itineraries and processed travel expense
                      reports <br />• Maintained the physicians academic
                      calendars • Trained onboarding staff <br /> • Surgical
                      billing <br />• Reduced wait time for treatments by 40%
                      which resulted in an 75% increase in patient satisfaction
                    </p>
                  </div>
                </div>
                <div className="row skill">
                  <div className="three columns header-col">
                    <h1>
                      <span>Skills</span>
                    </h1>
                  </div>
                  <div className="nine columns main-col">
                    {/* <p>
                     Throughout my time at Kenzie Academy, I have gained experience working in Agile environment while adhering to Scrum 
                    </p> */}
                    <div>
                      <ul className="skills">
                        <li>
                          {/* <span className="bar-expand javascript" /> */}
                          <em>JavaScript</em>
                        </li>
                        <li>
                          {/* <span className="bar-expand react" /> */}
                          <em>React</em>
                        </li>
                        <li>
                          {/* <span className="bar-expand redux" /> */}
                          <em>Redux</em>
                        </li>
                        <li>
                          {/* <span className="bar-expand css" /> */}
                          <em>CSS</em>
                        </li>
                        <li>
                          {/* <span className="bar-expand html5" /> */}
                          <em>HTML5</em>
                        </li>
                        <li>
                          {/* <span className="bar-expand python" /> */}
                          <em>Python</em>
                        </li>
                        <li>
                          {/* <span className="bar-expand django" /> */}
                          <em>Django</em>
                        </li>
                        <li>
                          {/* <span className="bar-expand javascript" /> */}
                          <em>Node.js</em>
                        </li>
                        <li>
                          {/* <span className="bar-expand javascript" /> */}
                          <em>Express.js</em>
                        </li>
                        <li>
                          {/* <span className="bar-expand javascript" /> */}
                          <em>Git</em>
                        </li>
                        <li>
                          {/* <span className="bar-expand javascript" /> */}
                          <em>GitFlow</em>
                        </li>
                        <li>
                          {/* <span className="bar-expand javascript" /> */}
                          <em>Material UI</em>
                        </li>
                        <li>
                          {/* <span className="bar-expand javascript" /> */}
                          <em>Semantic UI</em>
                        </li>
                        <li>
                          {/* <span className="bar-expand javascript" /> */}
                          <em>Bootstrap</em>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
