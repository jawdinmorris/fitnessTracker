import React from "react";
import logo from "./logo192.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
              <div className="well profile">
                <div className="col-sm-12">
                  <div className="col-xs-12 col-sm-8">
                    <h2>Progress</h2>
                    <p>
                      <strong>Level: </strong> 0 (20/100xp){" "}
                    </p>

                    <p>
                      <strong>Activity Summary: </strong>
                      <div className="tags">Jogged 1km in 3000 Secs 16/06</div>
                      <div className="tags">Lifted 1kg in 12 Reps 16/06</div>
                    </p>
                  </div>
                  <div className="col-xs-12 col-sm-4 text-center">
                    <figure>
                      <img
                        src={logo}
                        alt=""
                        className="img-circle img-responsive"
                      />
                      <figcaption className="ratings">
                        <p>
                          Persist.
                          <a href="#">
                            <span className="fa fa-star"></span>
                          </a>
                          <a href="#">
                            <span className="fa fa-star"></span>
                          </a>
                          <a href="#">
                            <span className="fa fa-star"></span>
                          </a>
                          <a href="#">
                            <span className="fa fa-star"></span>
                          </a>
                          <a href="#">
                            <span className="fa fa-star-o"></span>
                          </a>
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="col-xs-12 divider text-center">
                  <div className="col-xs-12 col-sm-4 emphasis">
                    <h2>
                      <strong>1</strong>
                    </h2>
                    <p>
                      <small>Workouts</small>
                    </p>
                    <button className="btn btn-success btn-block">
                      <span className="fa fa-plus-circle"></span> Add Workout{" "}
                    </button>
                  </div>
                  <div className="col-xs-12 col-sm-4 emphasis">
                    <h2>
                      <strong>2</strong>
                    </h2>
                    <p>
                      <small>Exercises</small>
                    </p>
                    <button className="btn btn-info btn-block">
                      <span className="fa fa-user"></span> View Exercises{" "}
                    </button>
                  </div>
                  <div className="col-xs-12 col-sm-4 emphasis">
                    <h2>
                      <strong>1</strong>
                    </h2>
                    <p>
                      <small>Recent Activity</small>
                    </p>
                    <div className="btn-group dropup btn-block">
                      <button type="button" className="btn btn-primary">
                        <span className="fa fa-gear"></span> View Log{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span className="caret"></span>
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu text-left" role="menu">
                        <li>
                          <a href="#">
                            <span className="fa fa-envelope pull-right"></span>{" "}
                            Send an email{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fa fa-list pull-right"></span> Add
                            or remove from a list{" "}
                          </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                          <a href="#">
                            <span className="fa fa-warning pull-right"></span>
                            Report this user for spam
                          </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                          <a href="#" className="btn disabled" role="button">
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
        <div className="container">
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Example select</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Example multiple select</Form.Label>
              <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
        </div>
      </section>
      <section id="exercises">
        <h2>Exercises</h2>
      </section>
    </div>
  );
}

export default App;
