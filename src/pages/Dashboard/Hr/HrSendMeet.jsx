import { useEffect, useState } from "react";
import useEmployee from "../../../hooks/useEmployee";
import useHrRequestCheckedOrNot from "../../../hooks/useHrRequestCheckedOrNot";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { MdSendToMobile } from "react-icons/md";

import { FaArrowCircleDown, FaUser } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

import { Button } from "@mui/material";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdMarkEmailRead } from "react-icons/md";
import Swal from "sweetalert2";

const HrSendMeet = () => {


    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic();
    const [hrRequestCheck] = useHrRequestCheckedOrNot();
    const [myEmploye, setMyEmploye] = useState([]);
    const [employee, setEmployee] = useState([]);
    const [employeeAgreements] = useEmployee()
    const [email, setEmail] = useState('')
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

    const handelEmailSubmit = (email) => {
        setEmail(email);
    }
    

    const onHandle = async (e) => {
        e.preventDefault()

        const form = e.target;
        const Link = form.link.value;
        const Date = form.date.value
        const Alldetails = { Link, Date, email }
        console.log(Alldetails);
        axiosSecure.post('/meetLink', Alldetails)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Your Link his Submited Employ`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
            .error(error => {
                console.log(error);
            })
    }
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 lg:gap-0 max-w-screen-2xl mx-auto ">
            {
                myEmploye.map(item => <div key={item._id} className="card  lg:ml-20 mb-5   h-[350px] card-compact backdrop-blur-3xl  shadow-xl">
                    <figure><img src={item?.imageURL} alt="Shoes" className="transform transition duration-500 hover:scale-150" /></figure>

                    <div className="card-body hover:bg-black  bg-gradient-to-l hover:from-blue-300  hover:to-black rounded-b-xl">
                        <h2 className="card-title text-white"><FaUser />{item?.name}</h2>
                        <div className="flex gap-1">
                            <MdMarkEmailRead className="text-xl" />

                            <p className="text-blue-400 font-bold">
                                {item?.email}
                            </p>
                        </div>
                        <div className="card-actions   justify-end">
                            <IoMdSend onClick={() => document.getElementById('my_modal_3').showModal()} className="text-white hover:text-blue-500 cursor-pointer text-2xl" />

                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box bg-black shadow-xl  shadow-gray-500">
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
                                       
                                        <input type="url" name="link" placeholder="Meet link" className="input text-black  mt-3 input-bordered input-info w-full" id="" />
                                      
                                        <input type="date" name="date" className="textarea text-black mb-3 textarea-info w-full mt-5" placeholder="Date and time"></input>
                                        <Button onClick={() => handelEmailSubmit(item.email)} type="submit" className="w-full  p-5" variant="contained" endIcon={<MdSendToMobile />}>
                                            Send
                                        </Button>
                                    </form>



                                    {/* ----------  link  form end  here -------------- */}

                                </div>
                            </dialog>
                        </div>
                    </div>


                </div>)
            }
        </div>
    );
};

export default HrSendMeet;