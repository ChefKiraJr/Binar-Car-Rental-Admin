import React, { useState, useEffect } from "react";
import Logo from "../assets/loginImg.png";

function LoginForm() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];
  //   const [user, setUser] = useState([]);

  //   useEffect(() => {
  //     async function getUsername() {
  //       const request = await fetch(
  //         "https://bootcamp-rent-cars.herokuapp.com/admin/auth/login",
  //         {
  //           method: "POST",
  //           headers: {
  //             access_token:
  //               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3NjYxNjk4MX0.qPx-2NPQmmEJyXrWjRqTXShTKd4OAXgk4Nkzd9Xh61g",
  //           },
  //         }
  //       );
  //       const response = await request.json();
  //       setUser(response);
  //     }
  //     getUsername();
  //   }, [user]);

  const errors = {
    uname: "invalid email",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderForm = (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-7/12 lg:w-7/12 md:w-10/12 mb-12 md:mb-0">
            <img src={Logo} className="w-full h-full" alt="Sample image" />
          </div>
          <div className="xl:ml-20 xl:w-4/12 lg:w-4/12 md:w-7/12 mb-12 md:mb-0">
            <p className="font-bold text-left text-2xl py-4">
              Welcome, Admin BCR
            </p>
            <form onSubmit={handleSubmit}>
              {/* Email input  */}
              <p className="text-lg text-left">Email</p>
              <div className="mb-6">
                <input
                  type="text"
                  name="uname"
                  className="form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Contoh: johndee@gmail.com"
                  required
                />
                {renderErrorMessage("uname")}
              </div>

              {/* Password input */}
              <p className="text-lg text-left">Password</p>
              <div className="mb-6">
                <input
                  type="password"
                  name="pass"
                  className="form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="+6 karakter"
                  required
                />
                {renderErrorMessage("pass")}
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
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default LoginForm;
