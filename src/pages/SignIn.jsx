import React, { useState, useEffect } from "react";
import "../css/signin.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { loginPage, registerPage } from "../assets";

const SignIn = () => {
  const containerRef = React.useRef(null);
  const InpassRef = React.useRef(null);
  const UppassRef = React.useRef(null);
  const userIn = React.useRef(null);
  const passIn = React.useRef(null);
  const userUp = React.useRef(null);
  const emailUp = React.useRef(null);
  const passUp = React.useRef(null);

  const signUpPage = () => {
    containerRef.current.classList.add("sign-up-mode");
  };

  const signInPage = () => {
    containerRef.current.classList.remove("sign-up-mode");
  };

  const showInPass = () => {
    InpassRef.current.classList.toggle("fa-eye");

    // Sign In show password
    if (passIn.current.type === "password") {
      passIn.current.type = "text";
    } else {
      passIn.current.type = "password";
    }
  };

  const showUpPass = () => {
    UppassRef.current.classList.toggle("fa-eye");

    // Sign Up show password
    if (passUp.current.type === "password") {
      passUp.current.type = "text";
    } else {
      passUp.current.type = "password";
    }
  };

  function changePageClass(fromClass) {
    document.getElementById(fromClass).classList.remove('sign-up-mode');
    document.getElementById(fromClass).classList.add('signup-container');
  }

  // User Login

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [token, setToken] = useState("")

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if there is a 'rememberMe' flag in local storage
    const storedRememberMe = localStorage.getItem('rememberMe');
    if (storedRememberMe === 'true') {
      // If 'rememberMe' is set to true, then set the username and password from local storage
      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');
      if (storedUsername && storedPassword) {
        setUsername(storedUsername);
        setPassword(storedPassword);
        userIn.current.value = storedUsername;
        passIn.current.value = storedPassword;
      }
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if the "Remember Me" checkbox is checked
    if (rememberMe) {
      // If checked, store the username and password in local storage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      localStorage.setItem('rememberMe', rememberMe ? 'true' : 'false');
    } else {
      // If not checked, clear the username and password from local storage
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      localStorage.removeItem('rememberMe');
    }

    const loginApiUrl = "https://api.bitshala.in/api/user/login";

    if (!username || !password) {
      toast.info("Fields cannot empty!");
    } else {
      axios.post(loginApiUrl, { username, password })
        .then((response) => {
          if (response) {
            localStorage.setItem("authToken", response?.data?.data?.token);
            setToken(response?.data?.data?.token)
            setIsAuthenticated(true);
            toast.success("Login Successfull 🤘");
          }
        })

        .catch((error) => {
          // Handle errors here
          toast.error("Invalid Credentials! 😞");
          console.error('Error:', error);
        });
    }
  };

  //   User Sign Up
  const [s_username, setUsernameUp] = useState("");
  const [s_email, setEmailUp] = useState("");
  const [s_password, setPasswordUp] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (!s_username || !s_email || !s_password) {
      toast.info("Fields cannot be empty!");
    }
    else if (!s_email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      toast.info("Enter a valid email address");
    } else {
      axios({
        url: "https://api.bitshala.in/api/user/signup",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: { email: s_email, username: s_username, password: s_password },
      })
        .then((response) => {
          if (response) {
            // Clear input fields
            userUp.current.value = "";
            emailUp.current.value = "";
            passUp.current.value = "";

            changePageClass('signin-up');
            toast('🦄 Welcome to BitShala, Go ahead & login into your new account.', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        })

        .catch((error) => {
          var errorMsg;

          if (Array.isArray(error.response.data.data.error)) {
            errorMsg = error.response.data.data.error[0].password;
          } else {
            errorMsg = error.response.data.data.error;
          }
          // console.log(error);
          toast.error(errorMsg);
        });
    }
  };

  const redirectToApp = () => {
    window.location.href = `https://app.bitshala.in/auth/redirect?token=${token}`;
  }

  return (
    // eslint-disable-next-line react/no-unknown-property
    <div transition-style="in:circle:bottom-right">
      <div className="signup-container" ref={containerRef} id="signin-up">
        <div className="forms-container">
          <div className="signin-signup">
            {/* ----------------------- Login Form ----------------------- */}
            <form action="#" className="sign-in-form">
              <h2 className="title">Login</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  ref={userIn}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  ref={passIn}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  className="fas fa-eye-slash"
                  ref={InpassRef}
                  onClick={showInPass}
                />
              </div>
              <div className="remember-forgot">
                <span>
                  <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                  <label>Remember me</label>
                </span>
                <Link>Forgot Password?</Link>
              </div>
              <input
                type="submit"
                value="Login"
                className="btn solid"
                onClick={handleLogin}
              />
              <p className="social-text">Or Login with social platforms</p>
              <div className="social-media">
                <Link href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="fab fa-github"></i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </form>

            {/* ----------------------- Sign Up Form ----------------------- */}
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  ref={userUp}
                  onChange={(event) => setUsernameUp(event.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  ref={emailUp}
                  onChange={(event) => setEmailUp(event.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  ref={passUp}
                  onChange={(event) => setPasswordUp(event.target.value)}
                />
                <i
                  className="fas fa-eye-slash"
                  ref={UppassRef}
                  onClick={showUpPass}
                />
              </div>
              <input
                type="submit"
                className="btn solid"
                value="Sign up"
                onClick={handleSignUp}
              />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <Link href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="fab fa-github"></i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={signUpPage}
              >
                Sign up
              </button>
            </div>
            <img src={loginPage} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={signInPage}
              >
                Login
              </button>
            </div>
            <img src={registerPage} className="image" alt="" />
          </div>
        </div>

        {isAuthenticated && redirectToApp()}

        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
};

export default SignIn;
