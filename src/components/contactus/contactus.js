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
              <form name="contact" method="post" >
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
              {/* Form End */}
              {/* contact-warning */}
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
      </React.Fragment>
    );
  }
}
