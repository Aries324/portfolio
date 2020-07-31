import React, { Component } from "react";
import axios from "axios";

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http:://localhost:3002/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send");
      }
    });
  }
  resetForm() {
    this.setState({
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: "",
    });
  }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>
          <div className="ten columns">
            <p className="lead">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            <form
              action
              method="post"
              id="contactForm"
              name="contactForm"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    size={35}
                    id="contactName"
                    name="contactName"
                    value={this.state.contactName}
                    onChange={this.onNameChange.bind(this)}
                  />
                </div>
                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    size={35}
                    id="contactEmail"
                    name="contactEmail"
                    value={this.state.contactEmail}
                    onChange={this.onEmailChange.bind(this)}
                  />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    size={35}
                    id="contactSubject"
                    name="contactSubject"
                    value={this.state.contactSubject}
                    onChange={this.onSubjectChange.bind(this)}
                  />
                </div>
                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols={50}
                    rows={15}
                    id="contactMessage"
                    name="contactMessage"
                    value={this.state.contactMessage}
                    onChange={this.onMessageChange.bind(this)}
                  />
                </div>
                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>
            <div id="message-warning"> Error boy</div>
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
                {resumeData.name}
                <br />
                {resumeData.location}
                <br />
                <span>{resumeData.phone}</span>
              </p>
            </div>
           
          </aside>
        </div>
      </section>
    );
  }
  onNameChange(event) {
    this.setState({ contactName: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ contactEmail: event.target.value });
  }
  onSubjectChange(event) {
    this.setState({ contactSubject: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ contactMessage: event.target.value });
  }
}
