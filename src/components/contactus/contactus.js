import React, { Component } from "react";

export default class ContactUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>
            <div className="ten columns">
              <p className="lead">
                As a Software Engineer, I am always looking to connect with
                companies that are looking for new talent, as well as other
                developers that are either starting their journey or continuing
                it. I'm looking forward to connecting with you.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              {/* form */}
              <form
                name="contactForm"
                id="contactForm"
                method="POST"
               
                data-netlify="true"
              >
                <fieldset>
                  <div>
                    <label>
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      size={35}
                      id="contactName"
                      name="contactName"
                    />
                  </div>
                  <div>
                    <label>
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      size={35}
                      id="contactEmail"
                      name="contactEmail"
                    />
                  </div>
                  <div>
                    <label>Subject</label>
                    <input
                      type="text"
                      size={35}
                      id="contactSubject"
                      name="contactSubject"
                    />
                  </div>
                  <div>
                    <label>
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols={50}
                      rows={15}
                      id="contactMessage"
                      name="contactMessage"
                    />
                  </div>
                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>{" "}
              {/* Form End */}
              {/* contact-warning */}
              <div id="message-warning">
                {" "}
                An error has occurred while processing your message
              </div>
              {/* contact-success */}
              <div id="message-success">
                <i className="fa fa-check" />
                Your message was sent, thank you!
                <br />
              </div>
            </div>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  Tiffany McLean
                  <br />
                  Lawrenceville, GA
                  <br />
                  <span>
                    {" "}
                    <a href="tel:9172912389">917-291-2389</a>
                  </span>
                </p>
              </div>
            </aside>
          </div>
        </section>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Your Role:{" "}
              <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>

        
      </React.Fragment>
    );
  }
}
