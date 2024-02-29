import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useEmployeeTask from "../../../hooks/useEmployeeTask";
import useUsers from "../../../hooks/useUsers";



const Evaluationchart3 = () => {
    const axiosPublic = useAxiosPublic();
    const [allUsers] = useUsers()
    const [allEmployeeTask] = useEmployeeTask()
    const [data, setCompanyTask] = useState([])

    useEffect(() => {
        const compleatedTask = allEmployeeTask?.filter(element => element.status === 'completed')
        axiosPublic.get("/hrAndUsers")
            .then(res => {
                if (res?.data?.length > 0 && compleatedTask?.length > 0) {
                    const data = res?.data?.map((hrElement) => {
                        const taskFilter = compleatedTask?.filter(taskElement => taskElement.company === hrElement.company)
                        console.log(hrElement);
                        return {
                            email: hrElement?.email,
                            name: hrElement?.name,
                            image: hrElement?.imageURL,
                            role: hrElement?.role,
                            value: taskFilter?.length
                        };
                    });
                    const dataShorting = data.sort((a, b) => b.value - a.value);
                    setCompanyTask(dataShorting);

                }
            })
            .catch(error => {
                console.log(error);
            })

    }, [allEmployeeTask, axiosPublic, allUsers])



    // console.log(hrData);

    return (
        <div>
            <h1 className="text-3xl font-semibold pl-5 pt-3">Audiance lookalikes</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="">
                            <tr className="">

                                <th>Influencer</th>
                                <th>Engagement</th>
                                <th>Favorite</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {

                                data.slice(0,3).map((sapratehr, index) => <tr key={index}>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img className="rounded-full" src={sapratehr.image} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{sapratehr.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {sapratehr.email}
                                    </td>
                                    <td>{sapratehr.role}</td>

                                </tr>)


                            }
                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default Evaluationchart3;