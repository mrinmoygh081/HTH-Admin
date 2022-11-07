import React from "react";

const AddCars = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <form id="survey-form">
                <div className="form-group">
                  <label id="name-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label id="email-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your Email"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label id="number-label" htmlFor="number">
                    Age<span className="clue">(optional)</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="number"
                    min={10}
                    max={99}
                    className="form-control"
                    placeholder="Age"
                  />
                </div>
                <div className="form-group">
                  <p>Which option best describes your current role?</p>
                  <select
                    id="dropdown"
                    name="role"
                    className="form-control"
                    required=""
                  >
                    <option disabled="" value="">
                      Select current role
                    </option>
                    <option value="student">Student</option>
                    <option value="job">Full Time Job</option>
                    <option value="learner">Full Time Learner</option>
                    <option value="preferNo">Prefer not to say</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <p>Would you recommend freeCodeCamp to a friend?</p>
                  <label>
                    <input
                      name="user-recommend"
                      defaultValue="definitely"
                      type="radio"
                      className="input-radio"
                      defaultChecked=""
                    />
                    Definitely
                  </label>
                  <label>
                    <input
                      name="user-recommend"
                      defaultValue="maybe"
                      type="radio"
                      className="input-radio"
                    />
                    Maybe
                  </label>
                  <label>
                    <input
                      name="user-recommend"
                      defaultValue="not-sure"
                      type="radio"
                      className="input-radio"
                    />
                    Not sure
                  </label>
                </div>
                <div className="form-group">
                  <p>What is your favorite feature of freeCodeCamp?</p>
                  <select
                    id="most-like"
                    name="mostLike"
                    className="form-control"
                    required=""
                  >
                    <option disabled="" value="">
                      Select an option
                    </option>
                    <option value="challenges">Challenges</option>
                    <option value="projects">Projects</option>
                    <option value="community">Community</option>
                    <option value="openSource">Open Source</option>
                  </select>
                </div>

                <div className="form-group">
                  <p>Any comments or suggestions?</p>
                  <textarea
                    id="comments"
                    className="input-textarea"
                    name="comment"
                    placeholder="Enter your comment here..."
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" id="submit" className="submit-button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddCars;
