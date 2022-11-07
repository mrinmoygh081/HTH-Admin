import React, { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../config";
import { useDispatch } from "react-redux";

import { loadingEnd, loadingStart, loginFun } from "../redux/actions";

const Login = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [user, setUser] = useState(null);

  const getUserLoginFun = async (phone, pwd) => {
    dispatch(loadingStart());
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      phone: phone,
      password: pwd,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(`${BASE_URL}/auth/signin/admin`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 0) {
          setErrMsg(result.message);
        } else if (result.status === 1) {
          setUser(result);
          dispatch(loginFun(result));
        }
        dispatch(loadingEnd());
      })
      .catch((error) => console.log("error", error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(phone, pwd);
    getUserLoginFun(phone, pwd);
    setPwd("");
  };

  useEffect(() => {
    if (user) {
      setErrMsg("");
      // console.log(user);
    }
  }, [user]);

  return (
    <>
      <section>
        <div className="login">
          <div className="form">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="d-flex justify-content-center">
                <span className="bx bx-lock-alt"></span>
                <p>ADMIN LOGIN</p>
              </div>

              <input
                type="number"
                placeholder="Phone Number"
                autoComplete="off"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />

              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />

              <p
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <button>Login</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
