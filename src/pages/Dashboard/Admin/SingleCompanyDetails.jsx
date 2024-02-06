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
            <h1>HR Details</h1>
            <h1>{companyData?.company}</h1>
            <h2>{companyData?.name}</h2>
            <img className="h-12 w-12 rounded-full" src={companyData?.imageURL} alt="" />
            <div className="py-16">
                <SharedHeading heading="HR under Employee Details" />
                {
                    specificEmployee?.map(em => <div key={em?._id}>
                        <div className="border rounded-lg m-2">
                            <p>{em?.name}</p>
                            <p>{em?.email}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SingleCompanyDetails;