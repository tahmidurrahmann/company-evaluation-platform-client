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
import HrProfileRating from "../pages/Dashboard/Hr/MessageEmployee";
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
import PayEmployeeById from "../pages/Dashboard/Hr/PayEmployeeById";
import PaymentHistory from "../pages/Dashboard/Hr/PaymentHistory";
import UserPerformance from "../pages/Dashboard/UserProfile/UserPerformance";
import Companies from "../pages/Companies/Companies";
import Apply from "../pages/ApplyFor/Apply";
import ApplyForHr from "../pages/ApplyFor/ApplyForHr";
import ApplyForEmployee from "../pages/ApplyFor/ApplyForEmployee";
import PayEmployee from "../pages/Dashboard/Hr/PayEmployee";
import PaymentSuccess from "../pages/Dashboard/Hr/PaymentSuccess";
import PaymentFail from "../pages/Dashboard/Hr/PaymentFail";
import HrprivateRoute from "../pages/Dashboard/Hr/HrprivateRoute";
import AdminprivateRoute from "../pages/Dashboard/Admin/AdminprivateRoute";
import Perfomence from "../pages/Perfomence/Perfomence";
import MessageEmployee from "../pages/Dashboard/Hr/MessageEmployee";
import MessageEmployeeById from "../pages/Dashboard/Hr/MessageEmployeeById";
import MessageHr from "../pages/Dashboard/Hr/MessageHr";
import Userprivaterepo from "../pages/Dashboard/UserProfile/Userprivaterepo";
import EmployeTaskes from "../pages/Dashboard/Hr/EmployeTaskes";
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
      {
        path: '/Perfomence',
        element: <Perfomence />
      }
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
        element: <Userprivaterepo><PrivateRoute><UserProfile /></PrivateRoute></Userprivaterepo>
      },
      {
        path: "userTask",
        element: <Userprivaterepo><PrivateRoute><UserTask /></PrivateRoute></Userprivaterepo>
      },
      {
        path: "userPerformance",
        element: <Userprivaterepo><PrivateRoute> <UserPerformance></UserPerformance> </PrivateRoute></Userprivaterepo>
      },
      //hr
      {
        path: "hrProfile",
        element: <HrprivateRoute><PrivateRoute><HrProfile /></PrivateRoute></HrprivateRoute>,
      },
      {
        path: "hrProfile",
        element: <HrprivateRoute><PrivateRoute><HrProfileRating /></PrivateRoute></HrprivateRoute>
      },
      {
        path: "messageEmployee",
        element: <HrprivateRoute><PrivateRoute><MessageEmployee /></PrivateRoute></HrprivateRoute>
      },
      {
        path: "messageHr",
        element: <Userprivaterepo><PrivateRoute><MessageHr /></PrivateRoute></Userprivaterepo>
      },
      {
        path: "messageEmployee/:id",
        element: <PrivateRoute><MessageEmployeeById /></PrivateRoute>
      },
      {
        path: "allEmploye",
        element: <HrprivateRoute><PrivateRoute><AllEmploye /></PrivateRoute></HrprivateRoute>
      },
      {
        path: "employeTask",
        element: <HrprivateRoute> <PrivateRoute><EmployeTaskes /></PrivateRoute></HrprivateRoute>
      },
      {
        path: "employeTeamPearformence",
        element: <HrprivateRoute><PrivateRoute><EmployeTeamPearformence /></PrivateRoute></HrprivateRoute>
      },
      {
        path: 'meet',
        element: <HrprivateRoute><PrivateRoute><Meets /></PrivateRoute></HrprivateRoute>
      },
      {
        path: 'employeeRequest',
        element: <HrprivateRoute><PrivateRoute><EmployeeRequest /></PrivateRoute></HrprivateRoute>
      },
      {
        path: 'payEmployee',
        element: <HrprivateRoute> <PrivateRoute><PayEmployee /></PrivateRoute></HrprivateRoute>
      },
      {
        path: 'payEmployee/:id',
        element: <HrprivateRoute><PrivateRoute><PayEmployeeById /></PrivateRoute></HrprivateRoute>
      },
      {
        path: 'paymentSuccess/:tranId',
        element: <HrprivateRoute><PrivateRoute><PaymentSuccess /></PrivateRoute></HrprivateRoute>
      },
      {
        path: 'paymentFail/:tranId',
        element: <HrprivateRoute><PrivateRoute><PaymentFail /></PrivateRoute></HrprivateRoute>
      },
      {
        path: 'paymentHistory',
        element: <Userprivaterepo><PrivateRoute><PaymentHistory /></PrivateRoute></Userprivaterepo>
      },
      {
        path: 'feedback',
        element: <FeedbackHr />
      },
      //admin
      {
        path: "adminProfile",
        element: <AdminprivateRoute><PrivateRoute><AdminProfile /></PrivateRoute></AdminprivateRoute>
      },
      {
        path: "agreementRequest",
        element: <AdminprivateRoute><PrivateRoute><AgreementRequest /></PrivateRoute></AdminprivateRoute>
      },
      {
        path: "notices",
        element: <AdminprivateRoute><PrivateRoute><PostNotices /></PrivateRoute></AdminprivateRoute>
      },
      {
        path: "companyInfo",
        element: <AdminprivateRoute> <PrivateRoute><CompanyInfo /></PrivateRoute></AdminprivateRoute>
      },
      {
        path: "singleCompanyDetails/:id",
        element: <AdminprivateRoute><PrivateRoute><SingleCompanyDetails /></PrivateRoute></AdminprivateRoute>,
        loader: ({ params }) => fetch(`https://company-evaluation-platform-server.vercel.app/hrAndUsers/${params?.id}`)
      },
      {
        path: "linkNotice",
        element: <Userprivaterepo><PrivateRoute><LinkNotice /></PrivateRoute></Userprivaterepo>
      },
    ]
  },
]);


export default router;
