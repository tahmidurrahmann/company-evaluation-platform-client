import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import SharedHeading from "../../../shared/SharedHeading/SharedHeading";
import useEmployee from "../../../hooks/useEmployee";
import Loading from "../../../shared/Loading/Loading";

const SingleCompanyDetails = () => {
    const companyData = useLoaderData();
    const [employeeAgreements, isEmployee] = useEmployee();
    const [specificEmployee, setSpecificEmployee] = useState([]);

    useEffect(() => {
        if (employeeAgreements?.length > 0) {
            const employee = employeeAgreements?.filter(agreement => agreement?.status === "checked" && agreement?.company === companyData?.company);
            setSpecificEmployee(employee);
        }
    }, [companyData?.company, employeeAgreements]);

    if (isEmployee) {
        return <Loading />
    }

    console.log(specificEmployee);

    return (
        <div>
            <SharedHeading heading="Company Details" />
            <div className="card w-64 bg-base-100 shadow-xl image-full m-12">
                <figure><img src={companyData?.imageURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{companyData?.name}</h2>
                    <p className="text-white">{companyData?.company}</p>
                </div>
            </div>
            <div>
                <SharedHeading heading="Employee Details" />
                <div className="overflow-x-auto p-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Company Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                specificEmployee?.map((employee, index) => 
                                    <tr key={employee?._id}>
                                        <th>{index + 1}</th>
                                        <th><img className="h-12 w-12 rounded-full" src={employee?.imageURL} alt="" /></th>
                                        <td>{employee?.name}</td>
                                        <td>{employee?.email}</td>
                                        <td>{employee?.company}</td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SingleCompanyDetails;