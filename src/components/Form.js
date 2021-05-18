import React from "react";
import { Link } from "react-router-dom";

function Form() {
  return (
    <div className="row">
      <div className="col">
        <h1>Log in</h1>
        <br />

        <div className="col">
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="someone@gmail.com"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="****************"
                //style={{ width: "%" }}
              />
            </div>

            <Link to="/Home">
              <button type="submit" class="btn btn-primary">
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
      <div className="col">
        <img
          className="img-thumbnail"
          src="rights.jpg"
          alt=""
          style={{ position: "up" }}
        />
      </div>
    </div>
  );
}

export default Form;
