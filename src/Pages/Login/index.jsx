import { useState, useEffect, useContext } from "react";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { navigate } from "wouter/use-location";

/* Components */
import BasicPage from "../../Components/BasicPage";

/* Firebase */
import { auth } from "../../firebase/firebase-config";

/* Context */
import { AppContext } from "../../Context";

/* Styles */
import "./style.scss";

const Login = () => {
  const titlePage = "Login";
  const context = useContext(AppContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async(e) => {
    e.preventDefault();
    try {
      const res =  await signInWithEmailAndPassword(auth, email, password);
      context.setUser(await res.user)
      localStorage.setItem('user', await JSON.stringify(res.user));
      navigate('/admin');
    }
    catch (e) {
      console.error(e)
    }
  };

  useEffect(() => {
    if(context.user) navigate('/')
  }, [context.user])

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
