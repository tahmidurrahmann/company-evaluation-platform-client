import { useEffect, useState } from "react";
import SharedBanner from "../../shared/SharedBanner/SharedBanner";
import SharedHeading from "../../shared/SharedHeading/SharedHeading";
import useCompany from "../../hooks/useCompany";
import Loading from "../../shared/Loading/Loading";
import { useForm } from "react-hook-form";

const Companies = () => {
    const [hrInfo, isHrPending] = useCompany();
    const [companies, setCompanies] = useState([]);
    const {
        register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        const category = data?.category;
        const companySize = data?.companySize;
        const location = data?.location;
        const allData = hrInfo?.filter(company => company?.companySize === companySize | company?.industrySector === category | company?.location === location);
        setCompanies(allData);
    }

    useEffect(() => {
        if (hrInfo?.length > 0) {
            const allCheckedCompanyInfo = hrInfo?.filter(hr => hr?.status === "checked");
            const formattedCompanies = allCheckedCompanyInfo.map(company => {
                const yearFounded = company.yearFounded;
                const monthName = getMonthName(yearFounded);
                return {
                    ...company,
                    monthName: monthName
                };
            });
            setCompanies(formattedCompanies);
        }
    }, [hrInfo]);

    const getMonthName = (dateString) => {
        const dateObj = new Date(dateString);
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthNames[dateObj.getMonth()];
    };

    if (isHrPending) {
        return <Loading />;
    }

    console.log(companies);

    return (
        <div className="pt-16">
            <SharedBanner heading="All Companies" passage="All Companies" />
            <div className="max-w-screen-2xl mx-auto px-6 xl:px-0">
                <div className="my-6 md:my-8 lg:my-12">
                    <SharedHeading heading="All Companies" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                    <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {companies?.map(company => (
                            <div className="border rounded-lg my-12 p-6" key={company?._id}>
                                <h1>{company?.company}</h1>
                                <h1>{company?.companySize}</h1>
                                <h1>{company?.industrySector}</h1>
                                <h1>{company?.location}</h1>
                                <h1>Year Founded: {company?.yearFounded?.split("-")[0]}, Month: {company?.monthName}</h1>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 col-span-1">
                        <h1 className="text-xl lg:text-2xl font-semibold">Search Company</h1>
                        <div className="flex flex-col flex-1">
                            <label className="font-semibold">Category</label>
                            <select {...register("category", { required: true })} className="select select-bordered w-full flex-1">
                                {
                                    hrInfo?.map((agreement, index) => <option key={index} value={agreement?.industrySector}>{agreement?.industrySector}</option>)
                                }
                            </select>
                        </div>
                        {errors.category?.type === "required" && (
                            <p className="text-red-600 text-left pt-1">Category Size is required</p>
                        )}
                        <div className="flex flex-col flex-1">
                            <label className="font-semibold">Location</label>
                            <select {...register("location", { required: true })} className="select select-bordered w-full flex-1">
                                {
                                    hrInfo?.map((agreement, index) => <option key={index} value={agreement?.location}>{agreement?.location}</option>)
                                }
                            </select>
                        </div>
                        {errors.location?.type === "required" && (
                            <p className="text-red-600 text-left pt-1">Location is required</p>
                        )}
                        <div className="flex flex-col flex-1">
                            <label className="font-semibold">Company Size</label>
                            <select {...register("companySize", { required: true })} className="select select-bordered w-full flex-1">
                                <option value="Less Than 10 Employee">Less Than 10 Employee</option>
                                <option value="10 ~ 50 Employee">10 ~ 50 Employee</option>
                                <option value="50 ~ 200 Employee">50 ~ 200 Employee</option>
                                <option value="200 ~ 500 Employee">200 ~ 500 Employee</option>
                                <option value="500 ~ 2000 Employee">500 ~ 2000 Employee</option>
                                <option value="More Than 2000 Employee">More Than 2000 Employee</option>
                            </select>
                        </div>
                        {errors.companySize?.type === "required" && (
                            <p className="text-red-600 text-left pt-1">Company Size is required</p>
                        )}
                        <button type="submit" className="but">
                            <div className="but-top font-medium">Submit</div>
                            <div className="but-bottom"></div>
                            <div className="but-base"></div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Companies;
