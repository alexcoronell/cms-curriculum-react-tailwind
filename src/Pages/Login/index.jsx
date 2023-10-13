import { useState } from "react";
import {  signInWithEmailAndPassword } from "firebase/auth";

/* Components */
import BasicPage from "../../Components/BasicPage";

/* Firebase */
import { auth } from "../../firebase/firebase-config";

/* Styles */
import "./style.scss";

const Login = () => {
  const titlePage = "Login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async(e) => {
    e.preventDefault();
    try {
      const res =  await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
    }
    catch (e) {
      console.error(e)
    }
  };

  return (
    <BasicPage titlePage={titlePage}>
      <div className="Login content">
        <div className="Login__box">
          <form onSubmit={(e) => handleSignIn(e)}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="myTransition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="myTransition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-primary w-full">Login</button>
          </form>
        </div>
      </div>
    </BasicPage>
  );
};

export default Login;
