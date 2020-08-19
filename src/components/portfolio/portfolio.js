import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img
                      alt="Connect 4 Game"
                      src="images/portfolio/modals/connect_4.png"
                    />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Connect 4</h5>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="Maze" src="images/maze.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Maze</h5>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img
                      alt="Rock Paper Scissors Game"
                      src="images/rock_paper_scissors.png"
                    />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Rock Paper Scissors</h5>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img
                      alt="Tower Of Hanoi Game"
                      src="images/towerOfHanoi.png"
                    />
                    /Users/tiffanymclean/MyPortfolio/resume/public/images/towerOfHanoi.png
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Tower Of Hanoi</h5>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt="Kwitter" src="images/Kwitter.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Kwitter</h5>
                        <p>A Clone Of Twitter</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img
                      alt="Cowsway"
                      src="images/portfolio/modals/cowsay.png"
                    />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Cowsay</h5>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img
                      alt="JunkFinder App"
                      src="images/portfolio/modals/junkfinder.png"
                    />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>JunkFinder</h5>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="modal-01" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/connect_4.png"
              alt="This is my take on Connect 4"
            />
            <div className="description-box">
              <h4>Connect 4</h4>
              <p>
                Connect 4 is a popular game that has been around since the
                1970s. My implementation requires both players to sit at one
                computer and take turns. Can you get 4 in row?? This game was
                made with pure JavaScript.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
              </span>
            </div>
            <div className="link-box">
              <a class="play" href="https://aries324.github.io/Connect-4/">
                Play{" "}
              </a>
              <a href="https://github.com/Aries324/Connect-4"> Repo</a>

              <button className="popup-modal-dismiss">CLOSE</button>
            </div>
          </div>
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" alt="Maze" src="images/maze.png" />
            <div className="description-box">
              <h4>Console</h4>
              <p>
                Made with pure Javascript. See if you can get the character to
                the end of the maze.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Branding, Web Development
              </span>
            </div>
            <div className="link-box">
              <a class="play" href="https://aries324.github.io/Maze/">
                Play{" "}
              </a>
              <a href="https://github.com/Aries324/Maze"> Repo</a>
              <button className="popup-modal-dismiss">CLOSE</button>
            </div>
          </div>
          <div id="modal-03" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              alt="Rock Paper Scissors Game"
              src="images/rock_paper_scissors.png"
            />
            <div className="description-box">
              <h4>Rock Paper Scissors</h4>
              <p>
                Made with pure JavaScript, Rock Paper Scissors is my take one of
                my favorite childhood games. It's you against the machine. Can
                you beat it?
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
              </span>
            </div>
            <div className="link-box">
              <a
                class="play"
                href="https://aries324.github.io/Rock-Paper-Scissors/"
              >
                Play{" "}
              </a>
              <a href="https://github.com/Aries324/Rock-Paper-Scissors">
                {" "}
                Repo
              </a>
              <button className="popup-modal-dismiss">CLOSE</button>
            </div>
          </div>
          <div id="modal-04" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              alt="Tower Of Hanoi Game"
              src="images/portfolio/towerOfHanoi"
            />
            <div className="description-box">
              <h4>Tower Of Hanoi</h4>
              <p>
                Tower Of Hanoi is mathematical game. It can be solved in 7
                moves.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
              </span>
            </div>
            <div className="link-box">
              <a class="play" href="https://aries324.github.io/Tower-Of-Hanoi/">
                Play{" "}
              </a>
              <a href="https://github.com/Aries324/Tower-Of-Hanoi"> Repo</a>
              <button className="popup-modal-dismiss">CLOSE</button>
            </div>
          </div>
          <div id="modal-04" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              alt="Kwitter"
              src="images/Kwitter.png"
            />
            <div className="description-box">
              <h4>Kwitter</h4>
              <p>
                Kwitter is a clone of Twitter that was created using React and
                Redux along with a backend API. The API is not currently stored
                locally so please note that it might take a few seconds to load.
                However, this project was created by myself along with one other
                teammate and is too amazing not to share. Our original design
                was a little out of scope as to what the API would allow,
                however, if we revisit it at a later date, there are several
                great features that we would implement
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
              </span>
            </div>
            <div className="link-box">
              <a
                class="play"
                href="https://aries324.github.io/Kwitter-Frontend/"
              >
                Try It{" "}
              </a>
              <a href="https://github.com/Aries324/Kwitter-Frontend"> Repo</a>
              <button className="popup-modal-dismiss">CLOSE</button>
            </div>
          </div>
          <div id="modal-05" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              alt=""
              src="images/portfolio/modals/cowsay.png"
            />
            <div className="description-box">
              <h4>Cowsay</h4>
              <p>
                Cowsay is a program that produces text with an image of a cow.
                This project was created using Django.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
              </span>
            </div>
            <div className="link-box">
              <a href="https://github.com/Aries324/django_cowsay">Repo</a>
              <button className="popup-modal-dismiss">CLOSE</button>
            </div>
          </div>
          <div id="modal-06" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              alt="JunkFinder App"
              src="images/modals/junkfinder.png"
            />
            <div className="description-box">
              <h4>JunkFinder</h4>
              <p>
                JunkFinder was a group project where my amazing team members
                were located in different regions. Despite our conflicting
                schedule, we were able to bring this vision to life. This app is
                made with Django and Bootstrap. It allows users to post items
                that they want to get rid of and other to claim them.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Photography
              </span>
            </div>
            <div className="link-box">
              <a href="https://github.com/Aries324/junk-finder">Repo</a>
              <button className="popup-modal-dismiss">CLOSE</button>
            </div>
          </div>

          <div id="modal-08" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/m-retrocam.jpg"
              alt=""
            />
            <div className="description-box">
              <h4>Retrocam</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Webdesign, Photography
              </span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <button className="popup-modal-dismiss">CLOSE</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
