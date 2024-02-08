import { useEffect, useState } from "react";
import useEmployee from "../../../hooks/useEmployee";
import useHrRequestCheckedOrNot from "../../../hooks/useHrRequestCheckedOrNot";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { LuSendHorizonal } from "react-icons/lu";
import { MdSendToMobile } from "react-icons/md";

import { FaArrowCircleDown } from "react-icons/fa";

import { Button } from "@mui/material";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const HrSendMeet = () => {


    const axiosSecure =useAxiosSecure()
    const axiosPublic = useAxiosPublic();
    const [hrRequestCheck] = useHrRequestCheckedOrNot();
    const [myEmploye, setMyEmploye] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [employeeAgreements, isEmployee, refetch] = useEmployee()
    useEffect(() => {
        if (hrRequestCheck?.status === "checked") {
            const findEmployeMatch = employee.filter(element => element?.company === hrRequestCheck?.company);
            setMyEmploye(findEmployeMatch);
            axiosPublic.get('/imployeeTasks')
                .then(res => {
                    console.log(res.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [employee, hrRequestCheck?.company, axiosPublic, hrRequestCheck?.status]);


    useEffect(() => {
        if (employeeAgreements?.length > 0) {
            const allEmployee = employeeAgreements?.filter(agreement => agreement?.status === "checked");
            setEmployee(allEmployee);
        }
    }, [employeeAgreements]);



    const onHandle = async (e) => {
        e.preventDefault()
        const form = e.target;
        const Link = form.link.value;
        const Date = form.date.value
        const Alldetails = { Link, Date }
        console.log(Alldetails);
        axiosSecure.post('/meetLink',Alldetails)
        .then(res =>{
            console.log(res.data);
        })
        .error(error =>{
            console.log(error);
        })


    }
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-gray-200 text-black font-bold ">
                            <th>Image</th>

                            <th>Name</th>
                            <th>Company</th>
                            <th>Send</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            myEmploye.map(item => <tr key={item._id}>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.imageURL} className="border-2 rounded-full border-blue-400" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item?.name}
                                    <br />
                                    <span className="text-blue-400 font-bold">{item?.email}</span>
                                </td>
                                <td>{item?.company}</td>
                                <th>
                                    <LuSendHorizonal onClick={() => document.getElementById('my_modal_3').showModal()} className="text-2xl hover:text-blue-500 cursor-pointer" />
                                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                    <dialog id="my_modal_3" className="modal">
                                        <div className="modal-box">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>

                                            {/* ----------  link  form here -------------- */}
                                            <form onSubmit={onHandle}>

                                                <h3 className="font-bold text-xl text-center">Put your <span className="text-blue-300">link</span> here</h3>
                                                <div className="flex justify-center ml-6 text-blue-500 items-center  mt-5">
                                                    <div>
                                                        <span className="relative flex h-5 w-5 mb-5 animate-bounce">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                                            <span className="relative inline-flex rounded-full  bg-blue-500"><FaArrowCircleDown className='text-2xl text-white' /></span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <input type="text" placeholder="Meet Link" name="link" className="input mt-3 input-bordered input-info w-full " />
                                                <input type="date" name="date" className="textarea mb-3 textarea-info w-full mt-5" placeholder="Date and time"></input>
                                                <Button type="submit" className="w-full  p-5" variant="contained" endIcon={<MdSendToMobile />}>
                                                    Send
                                                </Button>
                                            </form>



                                            {/* ----------  link  form end  here -------------- */}

                                        </div>
                                    </dialog>
                                </th>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default HrSendMeet;