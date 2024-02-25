import { useEffect, useState } from "react";
import useCompany from "../../../hooks/useCompany";
import useEmployee from "../../../hooks/useEmployee";
import Loading from "../../../shared/Loading/Loading";
import useAuth from "../../../hooks/useAuth";
import SharedHeadingDashboard from "../../../shared/SharedHeading/SharedHeadingDashboard";
import { TiMessages } from "react-icons/ti";
import { Link } from "react-router-dom";

const MessageEmployee = () => {

  const [employeeAgreements, isEmployee] = useEmployee();
  const [hrInfo, isHrPending] = useCompany();
  const [hr, setHr] = useState({});
  const { user } = useAuth();
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    if (hrInfo?.length > 0) {
      const specificHr = hrInfo?.find(item => item.email === user?.email)
      setHr(specificHr)
    }
  }, [hrInfo, user?.email])

  useEffect(() => {
    if (employeeAgreements?.length > 0 && Object.keys(hr).length > 0) {
      const specifCompanyBasedEmployee = employeeAgreements?.filter(item => item.company === hr?.company && item?.status === "checked")
      setEmployee(specifCompanyBasedEmployee)
    }
  }, [employeeAgreements, hr?.company, hr])

  if (isEmployee || isHrPending) {
    return <Loading />
  }

  console.log(employee);

  return (
    <div>
      <SharedHeadingDashboard heading="Send Message to your Employees" />
      <div className="overflow-x-auto">
        <table className="table table-xs rounded-lg">
          <thead className="font-bold text-black bg-gray-100">
            <tr>
              <th>Name</th>
              <th>Send Message</th>
            </tr>
          </thead>
          <tbody className="border-b-2 border-blue-300">
            {employee?.map(agreement => (
              <tr className="h-16 border-b-2 border-gray-200" key={agreement?._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img referrerPolicy="no-referrer" src={agreement.imageURL} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{agreement?.name}</div>
                      <div className="text-sm opacity-50">{agreement?.email}</div>
                    </div>
                  </div>
                </td>
                <td><Link to={`/dashboard/messageEmployee/${agreement?._id}`}><button className="hover:scale-115 transition hover:text-[#007cc7]"><TiMessages size={20} /></button></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessageEmployee;