import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

import OurStory from "../Pages/About/OurStory/OurStory";
import About from "../Layout/About";
import OurTeam from "../Pages/About/OurTeam/OurTeam";
import WhyShanta from "../Pages/About/WhyShanta/WhyShanta";
import OurBusiness from "../Pages/About/OurBusiness/OurBusiness/OurBusiness";
import OurClients from "../Pages/About/OurClients/OurClients/OurClients";
import EnvironmentHealthSafety from "../Pages/About/EnvironmentHealthSafety/EnvironmentHealthSafety/EnvironmentHealthSafety";
import Csr from "../Pages/About/CSR/CSR/CSR";
import LifeAtShanta from "../Pages/LifeAtShanta/LifeAtShanta/LifeAtShanta";
import Login from "../Layout/Login";
import SignIn from "../Pages/LoginLogout/SignIn/SignIn";

import AdminLayout from "../Layout/AdminLayout";
import Admin from "../Pages/BackendControl/Admin/Admin";
import AdminPortfolio from "../Pages/BackendControl/Home/Portfolio/AdminPortfolio";
import AdminFeatureProjects from "../Pages/BackendControl/Home/Admin-Feature-Projects/AdminFeatureProjects/AdminFeatureProjects";
import EditAdminFeatureProject from "../Pages/BackendControl/Home/Admin-Feature-Projects/EditAdminFeatureProject/EditAdminFeatureProject";
import CreateAdminFeatureProjects from "../Pages/BackendControl/Home/Admin-Feature-Projects/CreateAdminFeatureProjects/CreateAdminFeatureProjects";
import AdminCommitments from "../Pages/BackendControl/Home/AdminCommitment/AdminCommitments/AdminCommitments";
import AdminConnect from "../Pages/BackendControl/Home/AdminConnect/AdminConnect";
import AdminGetExplore from "../Pages/BackendControl/Home/AdminExploreProject/AdminGetExplore/AdminGetExplore";
import AdminCreateExplore from "../Pages/BackendControl/Home/AdminExploreProject/AdminCreateExplore/AdminCreateExplore";
import AdminOurStory from "../Pages/BackendControl/OurStory/AdminOurStory";
import AdminOurTeam from "../Pages/BackendControl/OurTeam/AdminOurTeam";
import AdminCreateOurTeam from "../Pages/BackendControl/OurTeam/AdminCreateOurTeam";
import AdminCreateSeniorTeam from "../Pages/BackendControl/OurTeam/AdminCreateSeniorTeam";
import Contact from "../Pages/Contact/Contact";

import AdminMessageBox from "../Pages/BackendControl/Messages/MessageBox/AdminMessageBox";

import Career from "../Pages/Career/Career/Career";

import ProjectsLayout from "../Layout/ProjectsLayout";
import OnGoingProjects from "../Pages/AllProjects/OnGoingProjects/OnGoingProjects";
import SingleProjectFullDetails from "../Pages/AllProjects/SingleProjectFullDetails/SingleProjectFullDetails";
import AdminNewsEvents from "../Pages/BackendControl/NewsEvents/NewsEvents/AdminNewsEvents";
import Investment from "../Pages/Investment/Investment/Investment";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import AdminInvestmentDetails from "../Pages/BackendControl/Investments/AdminInvestmentDetails";
import ContactForInvestments from "../Pages/Investment/ContactForInvestment/ContactForInvestments";
import AdminAllProjects from "../Pages/BackendControl/AdminAllProjects/AdminAllProjects/AdminAllProjects";
import AdminCreateProject from "../Pages/BackendControl/AdminAllProjects/AdminCreateProject/AdminCreateProject";
import AdminLifeAtChuti2 from "../Pages/BackendControl/LifeAtChuti/AdminLifeAtChuti2";
import UpComingProjects from "../Pages/AllProjects/UpComingProjects/UpComingProjects";
import AllProjects from "../Pages/AllProjects/AllProjects/AllProjects";
import CompletedProjects from "../Pages/AllProjects/CompletedProjects/CompletedProjects";
import NewsEvents from "../Pages/NewsEvents/NewsEvents/NewsEvents";
import SingleNewsAndEventFullDetails from "../Pages/NewsEvents/AllNewAndEvents/SingleNewsAndEventFullDetails";
import FeatureProjectSingleDetailsAndVideo from "../Pages/Home/FeatureProjects/FeatureProject/FeatureProjectDetailsAndVideo/FeatureProjectSingleDetailsAndVideo";
import AdminOurClients from "../Pages/BackendControl/OurClients/AdminOurClients/AdminOurClients";
import HomePagePopUp from "../Pages/BackendControl/HomePagePopUp/HomePagePopUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/",
    element: <About></About>,
    children: [
      {
        path: "/our-story",
        element: <OurStory></OurStory>,
      },
      {
        path: "/our-team",
        element: <OurTeam></OurTeam>,
      },
      {
        path: "/why-chuti",
        element: <WhyShanta></WhyShanta>,
      },
      {
        path: "/our-business",
        element: <OurBusiness></OurBusiness>,
      },

      {
        path: "/our-clients",
        element: <OurClients></OurClients>,
      },
      {
        path: "/facilities",
        element: <EnvironmentHealthSafety></EnvironmentHealthSafety>,
      },
      {
        path: "/csr",
        element: <Csr></Csr>,
      },
      {
        path: "/gallery",
        element: <LifeAtShanta></LifeAtShanta>,
      },

      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/invest",
        element: <Investment></Investment>,
      },
      {
        path: "/contact-for-investment",
        element: <ContactForInvestments></ContactForInvestments>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/news-events",
        element: <NewsEvents></NewsEvents>,
      },
      {
        path: "/news-events/:newsId",
        element: <SingleNewsAndEventFullDetails></SingleNewsAndEventFullDetails>,
      },
      {
        path: "/feature-project/:featureProjectId",
        element: <FeatureProjectSingleDetailsAndVideo></FeatureProjectSingleDetailsAndVideo>
      }
    ],
  },
  {
    path: "/",
    element: <Login></Login>,
    children: [
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      // {
      //   path: "/admin-register",
      //   element: <SignUp></SignUp>,
      // },
    ],
  },
  {
    path: "/admin",
    // element: <PrivateRoute><AdminLayout></AdminLayout></PrivateRoute>,
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        path: "/admin",
        element: <Admin></Admin>,
      },
      {
        path: "/admin/about-us",
        element: <AdminPortfolio></AdminPortfolio>,
      },
      {
        path: "/admin/feature-project",
        element: <AdminFeatureProjects></AdminFeatureProjects>,
      },
      {
        path: "/admin/feature-project/:projectId",
        element: <EditAdminFeatureProject></EditAdminFeatureProject>,
      },
      {
        path: "/admin/create-project",
        element: <CreateAdminFeatureProjects></CreateAdminFeatureProjects>,
      },
      {
        path: "/admin/commitment",
        element: <AdminCommitments></AdminCommitments>,
      },
      {
        path: "/admin/explore",
        element: <AdminGetExplore></AdminGetExplore>,
      },
      {
        path: "/admin/create-explore",
        element: <AdminCreateExplore></AdminCreateExplore>,
      },
      {
        path: "/admin/connect",
        element: <AdminConnect></AdminConnect>,
      },
      {
        path: "/admin/our-story",
        element: <AdminOurStory></AdminOurStory>,
      },
      {
        path: "/admin/our-team",
        element: <AdminOurTeam></AdminOurTeam>,
      },
      {
        path: "/admin/our-clients",
        element: <AdminOurClients></AdminOurClients>,
      },
      {
        path: "/admin/create-our-team",
        element: <AdminCreateOurTeam></AdminCreateOurTeam>,
      },
      {
        path: "/admin/create-our-senior-team",
        element: <AdminCreateSeniorTeam></AdminCreateSeniorTeam>,
      },
      {
        path: "/admin/all-projects",
        element: <AdminAllProjects></AdminAllProjects>,
      },
      {
        path: "/admin/create-admin-project",
        element: <AdminCreateProject></AdminCreateProject>,
      },
      {
        path: "/admin/life-at-chuti",

        element: <AdminLifeAtChuti2></AdminLifeAtChuti2>,
      },
      {
        path: "/admin/message-box",
        element: <AdminMessageBox></AdminMessageBox>,
      },
      {
        path: "/admin/news-event",
        element: <AdminNewsEvents></AdminNewsEvents>,
      },
      {
        path: "/admin/investment",
        element: <AdminInvestmentDetails></AdminInvestmentDetails>,
      },
      {
        path: "/admin/pop-up",
        element: <HomePagePopUp></HomePagePopUp>,
      },
    ],
  },
  {
    path: "/",
    element: <ProjectsLayout></ProjectsLayout>,
    children: [
      {
        path: "/projects",
        element: <AllProjects></AllProjects>,
      },
      {
        path: "/all-projects",
        element: <AllProjects></AllProjects>,
      },
      {
        path: "/projects/ongoing-projects",
        element: <OnGoingProjects></OnGoingProjects>,
      },
      {
        path: "/projects/upcoming-projects",
        element: <UpComingProjects></UpComingProjects>,
      },
      {
        path: "/projects/completed-projects",
        element: <CompletedProjects></CompletedProjects>,
      },
      {
        path: "/project/:projectId",
        element: <SingleProjectFullDetails></SingleProjectFullDetails>,
      },
    ],
  },
]);

export default router;
