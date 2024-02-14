import { useEffect, useState } from "react";
import useEmployee from "../../../hooks/useEmployee";
import useHrRequestCheckedOrNot from "../../../hooks/useHrRequestCheckedOrNot";
import Loading from "../../../shared/Loading/Loading";
import SharedHeadingDashboard from "../../../shared/SharedHeading/SharedHeadingDashboard";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const PayEmployee = () => {

    const [employeeAgreements, isEmployee] = useEmployee();
    const [hrRequestCheck] = useHrRequestCheckedOrNot();
    const [myEmployee, setMyEmployee] = useState([])

    useEffect(() => {
        if (hrRequestCheck?.status === "checked") {
            const findEmployeeMatch = employeeAgreements.filter(element => element?.company === hrRequestCheck?.company)
            setMyEmployee(findEmployeeMatch)
        }
    }, [employeeAgreements, hrRequestCheck?.company, hrRequestCheck?.status])

    if (isEmployee) {
        return <Loading />
    }

    return (
        <div>
            <SharedHeadingDashboard heading="Monthly Compensation for Employees" />
            <div className="overflow-x-auto">
                <table className="table table-xs rounded-lg">
                    <thead className="font-bold text-black bg-gray-100 ">
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>company</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="border-b-2 border-blue-300">
                        {
                            myEmployee?.map(agreement => <tr className="h-16 border-b-2 border-gray-200" key={agreement?._id}>
                                <th ><img referrerPolicy="no-referrer" className="w-8 md:w-16  rounded-full" src={agreement?.imageURL} alt="" /></th>
                                <td>{agreement?.name}</td>
                                <td>{agreement?.email}</td>
                                <td>{agreement?.company}</td>
                                <td><Link to={`/dashboard/payEmployee/${agreement?._id}`}><span className="bg-[#007cc7] px-2 py-1 text-white font-semibold rounded">PAY</span></Link></td>
                                <td className="cursor-pointer"><FaEye size={16} /></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PayEmployee;