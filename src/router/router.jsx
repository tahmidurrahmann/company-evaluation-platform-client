import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../error/Error";
import Home from "../pages/Home/Home/Home";
import Aboutus from "../pages/About-us/Aboutus";
import OurValuesOrMission from "../pages/Our Values or Mission/OurValuesOrMission";
import Contact from "../pages/Contact/Contact";
import Innovation from "../pages/Innovation/Innovation";
import Management from "../pages/Management/Management";
import SignIn from "../shared/SignIn/SignIn";
import SignUp from "../shared/SignUp/SignUp";
import PrivateRoute from "../Provider/PrivateRoute";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile";
import HrProfile from "../pages/Dashboard/Hr/HrProfile";
import AllEmploye from "../pages/Dashboard/Hr/AllEmploye";
import HrProfileRating from "../pages/Dashboard/Hr/HrProfileRating";
import EmployeTaskes from "../pages/Dashboard/Hr/EmployeTaskes";
import EmployeTeamPearformence from "../pages/Dashboard/Hr/EmployeTeamPearformence";
import AgreementRequest from "../pages/Dashboard/Admin/AgreementRequest";
import UserTask from "../pages/Dashboard/UserProfile/UserTask";
import Meets from "../pages/Meet/Meets";
import PostNotices from "../pages/Dashboard/Admin/PostNotices";
import CompanyInfo from "../pages/Dashboard/Admin/CompanyInfo";
import SingleCompanyDetails from "../pages/Dashboard/Admin/SingleCompanyDetails";
import LinkNotice from "../pages/Dashboard/Admin/LinkNotice";
import EmployeeRequest from "../pages/Dashboard/Hr/EmployeeRequest";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import FeedbackHr from "../pages/Dashboard/Hr/FeedbackHr";
import PayEmployee from "../pages/Dashboard/Hr/PayEmployee";
import PayEmployeeById from "../pages/Dashboard/Hr/PayEmployeeById";
import PaymentSuccess from "../pages/Dashboard/Hr/PaymentSuccess";
import PaymentFail from "../pages/Dashboard/Hr/PaymentFail";
import PaymentHistory from "../pages/Dashboard/Hr/PaymentHistory";
import Companies from "../pages/Companies/Companies";
import Apply from "../pages/ApplyFor/Apply";
import ApplyForHr from "../pages/ApplyFor/ApplyForHr";
import ApplyForEmployee from "../pages/ApplyFor/ApplyForEmployee";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutUs",
        element: (
          <PrivateRoute>
            <Aboutus />,
          </PrivateRoute>
        ),
      },
      {
        path: "/ourValuesOrMission",
        element: <OurValuesOrMission></OurValuesOrMission>,
      },
      {
        path: "/jobHub",
        element: <Apply />,
      },
      {
        path: "/applyForHr",
        element: <ApplyForHr />,
      },
      {
        path: "/applyForEmployee",
        element: <ApplyForEmployee />,
      },
      {
        path: "/companies",
        element: <Companies />,
      },
      {
        path: "/innovation",
        element: <Innovation />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/management",
        element: <Management />,
      },
    ],
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      //user
      {
        path: "userProfile",
        element: <PrivateRoute><UserProfile /></PrivateRoute>
      },
      {
        path: "userTask",
        element: <PrivateRoute><UserTask /></PrivateRoute>
      },
      //hr
      {
        path: "hrProfile",
        element: <PrivateRoute><HrProfile /></PrivateRoute>,
      },
      {
        path: "hrProfile",
        element: <PrivateRoute><HrProfileRating /></PrivateRoute>
      },
      {
        path: "allEmploye",
        element: <PrivateRoute><AllEmploye /></PrivateRoute>
      },
      {
        path: "employeTask",
        element: <PrivateRoute><EmployeTaskes /></PrivateRoute>
      },
      {
        path: "employeTeamPearformence",
        element: <PrivateRoute><EmployeTeamPearformence /></PrivateRoute>
      },
      {
        path: 'meet',
        element: <PrivateRoute><Meets /></PrivateRoute>
      },
      {
        path: 'employeeRequest',
        element: <PrivateRoute><EmployeeRequest /></PrivateRoute>
      },
      {
        path: 'payEmployee',
        element: <PrivateRoute><PayEmployee /></PrivateRoute>
      },
      {
        path: 'payEmployee/:id',
        element: <PrivateRoute><PayEmployeeById /></PrivateRoute>
      },
      {
        path: 'paymentSuccess/:tranId',
        element: <PrivateRoute><PaymentSuccess /></PrivateRoute>
      },
      {
        path: 'paymentFail/:tranId',
        element: <PrivateRoute><PaymentFail /></PrivateRoute>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory/>
      },
      {
        path: 'feedback',
        element: <FeedbackHr/>
      },
      //admin
      {
        path: "adminProfile",
        element: <PrivateRoute><AdminProfile /></PrivateRoute>
      },
      {
        path: "agreementRequest",
        element: <PrivateRoute><AgreementRequest /></PrivateRoute>
      },
      {
        path: "notices",
        element: <PrivateRoute><PostNotices /></PrivateRoute>
      },
      {
        path: "companyInfo",
        element: <PrivateRoute><CompanyInfo /></PrivateRoute>
      },
      {
        path: "singleCompanyDetails/:id",
        element: <PrivateRoute><SingleCompanyDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://company-evaluation-platform-server.vercel.app/hrAndUsers/${params?.id}`)
      },
      {
        path: "linkNotice",
        element: <PrivateRoute><LinkNotice /></PrivateRoute>
      },
    ]
  },
]);


export default router;
