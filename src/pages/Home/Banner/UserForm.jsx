import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import "./custom.css"
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useAgreement from '../../../hooks/useAgreement';
import Loading from '../../../shared/Loading/Loading';

const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
const apiURL = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const UserForm = () => {

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const { user } = useAuth();

    const {
        register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        const company = data?.company;
        const photo = data?.photo[0];
        const role = "user";
        const name = user?.displayName;
        const email = user?.email;
        const photoObj = { image: photo }
        const uploadImage = await axiosPublic.post(apiURL, photoObj, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        const imageURL = uploadImage?.data?.data?.display_url;
        const formDetails = { company, imageURL, role, name, email };
        const res = await axiosSecure.post("/employee", formDetails);
        if (res?.data?.insertedId) {
            toast.success("Your Form Submitted");
        }
        else {
            toast.error("You Cannot Post Twice")
        }
    }

    const [allAgreements, isAgreement] = useAgreement();

    if (isAgreement) {
        return <Loading />
    }

    return (
        <div>
            <div className="inset-0 flex items-center justify-center">
                <button onClick={openModal} type="button" className="but">
                    <div className="but-top font-medium">EMPLOYEE</div>
                    <div className="but-bottom"></div>
                    <div className="but-base"></div>
                </button>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <form className='flex flex-col justify-center items-center py-12 space-y-8' onSubmit={handleSubmit(onSubmit)}>
                                        <div className="inputContainer w-full">
                                            <input defaultValue={user?.displayName} readOnly name="user_name" required className="customInput py-3" type="name" />
                                            <label className="inputLabel font-semibold">NAME</label>
                                            <div className="inputUnderline"></div>
                                        </div>
                                        <div className="inputContainer w-full">
                                            <input defaultValue={user?.email} readOnly name="user_email" required className="customInput py-3" type="email" />
                                            <label className="inputLabel font-semibold">EMAIL</label>
                                            <div className="inputUnderline"></div>
                                        </div>
                                        <select {...register("company", { required: true })} className="select select-bordered w-full">
                                            <option disabled selected>Select Your Company</option>
                                            {
                                                allAgreements?.map((agreement, index) => <option key={index} value={agreement?.company}>{agreement?.company}</option>)
                                            }
                                        </select>
                                        {errors.company?.type === "required" && (
                                            <p className="text-red-600 text-left pt-1">Company is required</p>
                                        )}
                                        <input {...register("photo", { required: true })} type="file" className="file-input file-input-bordered w-full" />
                                        {errors.photo?.type === "required" && (
                                            <p className="text-red-600 text-left pt-1">Photo is required</p>
                                        )}
                                        <br />
                                        <button type="submit" className="but">
                                            <div className="but-top font-medium">Submit</div>
                                            <div className="but-bottom"></div>
                                            <div className="but-base"></div>
                                        </button>
                                    </form>
                                    <div className="mt-4">
                                        <span onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-red-600 hover:text-white">✕</span>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default UserForm;