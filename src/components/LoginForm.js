import React, { useRef, useEffect, useState, useContext } from "react";
import authContext from "../context/AuthProvider";
import Logo from "../assets/loginImg.png";
import axios from "../api/axios";

const LOGIN_URL = "/admin/auth/login";

const LoginForm = () => {
  const { setAuth } = useContext(authContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSucces] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, password, roles, accessToken });
      setUser("");
      setPwd("");
      setSucces(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Email or Password");
      } else if (err.response?.status === 404) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You Are Logged in!</h1>
          <br />
          <p>
            <a href="#"> Go to Home</a>
          </p>
        </section>
      ) : (
        <section className="h-screen">
          <div className="px-6 h-full text-gray-800">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-7/12 lg:w-7/12 md:w-10/12 mb-12 md:mb-0">
                <img src={Logo} className="object-fill w-67 h-67" alt="img" />
              </div>
              <div className="xl:ml-20 xl:w-4/12 lg:w-4/12 md:w-7/12 mb-12 md:mb-0">
                <p
                  ref={errRef}
                  className={
                    (errMsg ? "errms" : "offscree") +
                    " text-red-500 text-left font-bold"
                  }
                  aria-live="assertive"
                >
                  {errMsg}
                </p>
                <p className="font-bold text-left text-2xl py-4">
                  Welcome, Admin BCR
                </p>
                <form onSubmit={handleSubmit}>
                  {/* Email input  */}
                  <p className="text-lg text-left" htmlFor="username">
                    Email
                  </p>
                  <div className="mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="username"
                      placeholder="Contoh: johndee@gmail.com"
                      ref={userRef}
                      // autoComplete="off"
                      onChange={(e) => setUser(e.target.value)}
                      value={email}
                      required
                    />
                  </div>

                  {/* Password input  */}
                  <p className="text-lg text-left" htmlFor="password">
                    Password
                  </p>
                  <div className="mb-6">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="password"
                      placeholder="+6 karakter"
                      ref={userRef}
                      onChange={(e) => setPwd(e.target.value)}
                      value={password}
                      required
                    />
                  </div>
                  <div className="text-center lg:text-left">
                    <button
                      type="submit"
                      className="inline-block px-20 py-3 w-full bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default LoginForm;
