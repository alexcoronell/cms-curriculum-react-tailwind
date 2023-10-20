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

/* Admin Components */
import AdminMenu from "./AdminPages/AdminMenu";
import BasicData from "./AdminPages/BasicData";
import AdminExperiences from "./AdminPages/AdminExperiences";
import AdminStudies from "./AdminPages/AdminStudies";
import AdminTraining from "./AdminPages/AdminTraining";
import AdminBriefcase from "./AdminPages/AdminBriefcase";
import AdminContact from "./AdminPages/AdminContact";
import AdminCurriculumVitae from "./AdminPages/AdminCurriculumVitae";
import ShowHidePages from "./AdminPages/ShowHidePages";

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
          <Route path="/admin" component={AdminMenu} />
          <Route path="/admin/basic-data" component={BasicData} />
          <Route path="/admin/experiences" component={AdminExperiences} />
          <Route path="/admin/studies" component={AdminStudies} />
          <Route path="/admin/training" component={AdminTraining} />
          <Route path="/admin/briefcase" component={AdminBriefcase} />
          <Route path="/admin/contact" component={AdminContact} />
          <Route path="/admin/curriculum-vitae" component={AdminCurriculumVitae} />
          <Route path="/admin/show-hide-pages" component={ShowHidePages} />
        </Router>
      </Layout>
      <Footer />
    </AppProvider>
  );
}

export default App;
