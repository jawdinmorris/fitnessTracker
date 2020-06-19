import React from "react";
import logo from "./logo192.png";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul>
            <li>
              <a href="#exercises">Exercises</a>
            </li>
            <li>
              <a href="#add-workout">Add Workout</a>
            </li>
            <li>
              <a href="#progress">Progress</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="progress">
        <div class="container">
          <div class="row">
            <div class="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
              <div class="well profile">
                <div class="col-sm-12">
                  <div class="col-xs-12 col-sm-8">
                    <h2>Progress</h2>
                    <p>
                      <strong>Level: </strong> 0 (0/100xp){" "}
                    </p>

                    <p>
                      <strong>Activity Summary: </strong>
                      <div class="tags">Jogged 1km in 3000 Secs</div>
                      <div class="tags">Lifted 1kg in 12 Reps</div>
                    </p>
                  </div>
                  <div class="col-xs-12 col-sm-4 text-center">
                    <figure>
                      <img
                        src={logo}
                        alt=""
                        class="img-circle img-responsive"
                      />
                      <figcaption class="ratings">
                        <p>
                          Persist.
                          <a href="#">
                            <span class="fa fa-star"></span>
                          </a>
                          <a href="#">
                            <span class="fa fa-star"></span>
                          </a>
                          <a href="#">
                            <span class="fa fa-star"></span>
                          </a>
                          <a href="#">
                            <span class="fa fa-star"></span>
                          </a>
                          <a href="#">
                            <span class="fa fa-star-o"></span>
                          </a>
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div class="col-xs-12 divider text-center">
                  <div class="col-xs-12 col-sm-4 emphasis">
                    <h2>
                      <strong>1</strong>
                    </h2>
                    <p>
                      <small>Workouts</small>
                    </p>
                    <button class="btn btn-success btn-block">
                      <span class="fa fa-plus-circle"></span> Add Workout{" "}
                    </button>
                  </div>
                  <div class="col-xs-12 col-sm-4 emphasis">
                    <h2>
                      <strong>2</strong>
                    </h2>
                    <p>
                      <small>Exercises</small>
                    </p>
                    <button class="btn btn-info btn-block">
                      <span class="fa fa-user"></span> View Exercises{" "}
                    </button>
                  </div>
                  <div class="col-xs-12 col-sm-4 emphasis">
                    <h2>
                      <strong>1</strong>
                    </h2>
                    <p>
                      <small>Recent Activity</small>
                    </p>
                    <div class="btn-group dropup btn-block">
                      <button type="button" class="btn btn-primary">
                        <span class="fa fa-gear"></span> View Log{" "}
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span class="caret"></span>
                        <span class="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul class="dropdown-menu text-left" role="menu">
                        <li>
                          <a href="#">
                            <span class="fa fa-envelope pull-right"></span> Send
                            an email{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="fa fa-list pull-right"></span> Add or
                            remove from a list{" "}
                          </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                          <a href="#">
                            <span class="fa fa-warning pull-right"></span>Report
                            this user for spam
                          </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                          <a href="#" class="btn disabled" role="button">
                            {" "}
                            Unfollow{" "}
                          </a>
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
      <section id="add-workout">
        <h2>Add Workout</h2>
      </section>
      <section id="exercises">
        <h2>Exercises</h2>
      </section>
    </div>
  );
}

export default App;
