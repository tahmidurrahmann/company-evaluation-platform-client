import { PopupButton } from "react-calendly";
import useEmployeeProfile from "../../../hooks/useEmployeeProfile";
import Loading from "../../../shared/Loading/Loading";
import { CgMail } from "react-icons/cg";
import { PiMediumLogoFill } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";

const UserProfile = () => {

    const [employeeRequestCheck, isEmployee] = useEmployeeProfile();

    if (isEmployee) {
        return <Loading />
    }

    console.log(employeeRequestCheck);

    return (
        <div>
            <div className="overflow-x-auto">
                <section className='mt-10'>
                    {employeeRequestCheck?.status === "checked" ?
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 rounded-lg border p-6">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img referrerPolicy="no-referrer" src={employeeRequestCheck?.imageURL} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-xl font-semibold flex items-center gap-2"><FaRegUser />{employeeRequestCheck?.name}</h1>
                                <h1 className="text-xl font-semibold flex items-center gap-2"><PiMediumLogoFill /> {employeeRequestCheck?.company}</h1>
                                <h2 className="font-medium text-neutral-400 flex items-center gap-2"><CgMail />{employeeRequestCheck?.email}</h2>
                            </div>
                        </div>
                        : <div className="min-h-[80vh] flex justify-center items-center font-semibold text-xl">Please Request for Employee or wait for Accept your request</div>}
                </section>
                <div className="App flex justify-center items-center">
                    <PopupButton
                        url="https://calendly.com/tahmidurrahman/30min"

                        rootElement={document.getElementById("root")}
                        text="Click here to schedule!"
                    />
                </div>
            </div>
        </div>
    );
};

export default UserProfile;