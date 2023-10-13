import { Router, Route } from "wouter";

/* Context */
import { AppProvider } from "./Context";

/* Components */
import Header from "./Components/Header/Header";
import Layout from "./Layout/Layout";
import Footer from "./Components/Footer/Footer";

/* Component Pages */
import Home from "./Pages/Home";
import Experiences from "./Pages/Experiences";
import Studies from "./Pages/Studies";
import Training from "./Pages/Training";
import Briefcase from "./Pages/Briefcase";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";

function App() {
  return (
    <AppProvider>
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
    </AppProvider>
  );
}

export default App;
