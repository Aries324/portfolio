import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="images/portfolio/Profile_Pic.jpg"
                alt="Me"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                Hey!! Thanks for stopping by my page. I've read plenty of
                people's about me sections and decided that mine would truly
                reflect who I am. So, who am I? I am a New York native, Full
                Stack Engineer who transitioned from a career in Healthcare. I
                am not only a team player, but I derive great pleasure in
                helping ensure that everyone on my team excels. In me you'll
                find a person with a friendly demeanor, that embraces new
                challenges...a life long lover of learning who thrives under
                pressure.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Tiffany McLean</span>
                    <br />
                    <span>Lawrenceville, GA 30044</span>
                    <br />
                    <a href="tel:9172912389">917-291-2389</a>
                    <br />
                    <a href="mailto:tamclean@needleinastack.dev">
                      tamclean@needleinastack.dev
                    </a>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="current_resume/myresume.pdf" className="button">
                      <i className="fa fa-download" />
                      Download Resume
                    </a>
                  </p>
                </div>
              </div>{" "}
              {/* end row */}
            </div>{" "}
            {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
