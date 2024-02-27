import React from "react";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { MdSendToMobile } from "react-icons/md";

import { FaArrowCircleDown, FaUser } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

import { Button } from "@mui/material";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdMarkEmailRead } from "react-icons/md";
import Swal from "sweetalert2";
import useEmployee from "../../../hooks/useEmployee";
import useHrRequestCheckedOrNot from "../../../hooks/useHrRequestCheckedOrNot";

interface Employee {
  _id: string;
  imageURL: string;
  name: string;
  email: string;
}

const HrSendMeet: React.FC = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [hrRequestCheck] = useHrRequestCheckedOrNot();
  const [myEmploye, setMyEmploye] = useState<Employee[]>([]);
  const [employee, setEmployee] = useState<any[]>([]);
  const [employeeAgreements] = useEmployee();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (hrRequestCheck?.status === "checked") {
      const findEmployeMatch = employee.filter(
        (element: any) => element?.company === hrRequestCheck?.company
      );
      setMyEmploye(findEmployeMatch);
      axiosPublic
        .get("/imployeeTasks")
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [employee, hrRequestCheck?.company, axiosPublic, hrRequestCheck?.status]);

  useEffect(() => {
    if (employeeAgreements?.length > 0) {
      const allEmployee = employeeAgreements?.filter(
        (agreement: any) => agreement?.status === "checked"
      );
      setEmployee(allEmployee);
    }
  }, [employeeAgreements]);

  const handelEmailSubmit = (email: string) => {
    setEmail(email);
  };

  const onHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const Link = form.link.value;
    const Date = form.date.value;
    const Alldetails = { Link, Date, email };
    console.log(Alldetails);
    axiosSecure
      .post("/meetLink", Alldetails)
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Your Link his Submited Employ`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="grid grid-cols-1 mx-auto lg:grid-cols-3 md:grid-cols-2 md:gap-5 lg:gap-0 max-w-screen-2xl">
      {myEmploye.map((item: Employee) => (
        <div
          key={item._id}
          className="card lg:ml-20 mb-5 h-[350px] card-compact backdrop-blur-3xl shadow-xl"
        >
          <figure>
            <img
              src={item?.imageURL}
              alt="Shoes"
              className="transition duration-500 transform hover:scale-150"
            />
          </figure>

          <div className="card-body hover:bg-black bg-gradient-to-l hover:from-blue-300 hover:to-black rounded-b-xl">
            <h2 className="text-white card-title">
              <FaUser />
              {item?.name}
            </h2>
            <div className="flex gap-1">
              <MdMarkEmailRead className="text-xl" />
              <p className="font-bold text-blue-400">{item?.email}</p>
            </div>
            <div className="justify-end card-actions">
              <IoMdSend
                onClick={() => {
                  const dialogElement = document.getElementById(
                    "my_modal_3"
                  ) as HTMLDialogElement;
                  if (dialogElement) {
                    dialogElement.showModal();
                  }
                }}
                className="text-2xl text-white cursor-pointer hover:text-blue-500"
              />
              <dialog id="my_modal_3" className="modal">
                <div className="bg-black shadow-xl modal-box shadow-gray-500">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                      ✕
                    </button>
                  </form>
                  {/* ----------  link  form here -------------- */}
                  <form onSubmit={onHandle}>
                    <h3 className="text-xl font-bold text-center">
                      Put your <span className="text-blue-300">link</span> here
                    </h3>
                    <div className="flex items-center justify-center mt-5 ml-6 text-blue-500">
                      <div>
                        <span className="relative flex w-5 h-5 mb-5 animate-bounce">
                          <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-sky-400"></span>
                          <span className="relative inline-flex bg-blue-500 rounded-full">
                            <FaArrowCircleDown className="text-2xl text-white" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <input
                      type="url"
                      name="link"
                      placeholder="Meet link"
                      className="w-full mt-3 text-black input input-bordered input-info"
                      id=""
                    />
                    <input
                      type="date"
                      name="date"
                      className="w-full mt-5 mb-3 text-black textarea textarea-info"
                      placeholder="Date and time"
                    />
                    <Button
                      onClick={() => handelEmailSubmit(item.email)}
                      type="submit"
                      className="w-full p-5"
                      variant="contained"
                      endIcon={<MdSendToMobile />}
                    >
                      Send
                    </Button>
                  </form>
                  {/* ----------  link  form end  here -------------- */}
                </div>
              </dialog>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HrSendMeet;
