import { Router, Route } from "wouter";

import Header from "./Components/Header/Header";
import Layout from "./Layout/Layout";
import Footer from "./Components/Footer/Footer";

/* Component Pages */
import Home from "./Pages/Home/Home";
import Experiences from "./Pages/Experiences";
import Studies from "./Pages/Studies/Studies";
import Training from "./Pages/Training/Training";
import Briefcase from "./Pages/Briefcase/Briefcase";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <Header />
        <Layout>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/experiences" component={Experiences} />
            <Route path="/studies" component={Studies} />
            <Route path="/training" component={Training} />
            <Route path="/briefcase" component={Briefcase} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
          </Router>
        </Layout>
      <Footer />
    </>
  );
}

export default App;
