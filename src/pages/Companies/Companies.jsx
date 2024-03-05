import { useEffect, useState } from "react";
import SharedBanner from "../../shared/SharedBanner/SharedBanner";
import SharedHeading from "../../shared/SharedHeading/SharedHeading";
import useCompany from "../../hooks/useCompany";
import Loading from "../../shared/Loading/Loading";
import { useForm } from "react-hook-form";
import "./companies.css"
import { Helmet } from "react-helmet";

const Companies = () => {
  const [hrInfo, isHrPending] = useCompany();
  const [companies, setCompanies] = useState([]);
  const [showMoreData, setShowMoreData] = useState(2);

  const toggleShowMore = () => {
    if (showMoreData === 2) {
      setShowMoreData(companies.length);
    } else if (showMoreData > 2) {
      setShowMoreData(2);
    }
  };

  const {
    register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const category = data?.category;
    const companySize = data?.companySize;
    const location = data?.location;
    const companyName = data?.companyName;
    const allData = hrInfo?.filter(company => company?.companySize === companySize | company?.industrySector === category | company?.location === location | company?.company === companyName);
    setCompanies(allData);
  }

  const handleSearchCompanyName = (e) => {
    e.preventDefault();
    const form = e.target;
    const companyName = form.companyName.value;
    const allData = hrInfo?.filter(company => company?.company.toLowerCase() === companyName.toLowerCase());
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

  return (
    <div>
      <Helmet>
        <title>IONE | Companies</title>
      </Helmet>
      <div>
        <SharedBanner heading="All Companies" passage="All Companies" />
     </div>
      <div className="max-w-screen-xl mx-auto px-6 xl:px-0">
        <form className="flex justify-end items-center my-6" onSubmit={handleSearchCompanyName}>
          <div className="input-containerr" data-aos="fade-up"
            data-aos-duration="1000">
            <input placeholder="Search by Company Name" className="inputy" name="companyName" type="text" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="iconn">
              <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
              <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                <rect fill="white"></rect>
                <path d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z" clipRule="evenodd" fillRule="evenodd"></path>
              </g>
            </svg>
          </div>
        </form>
        <div className="mt-6 mb-4 md:mt-8" data-aos="fade-up"
          data-aos-duration="1000">
          <SharedHeading heading="All Companies" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 col-span-1">
              <h1 className="text-xl lg:text-2xl font-semibold">Search Company</h1>
              <div className="flex flex-col flex-1">
                <label className="font-semibold">Category</label>
                <select {...register("category")} className="select select-bordered w-full flex-1" data-aos="fade-up"
                  data-aos-duration="500">
                  {
                    hrInfo?.map((agreement, index) => <option key={index} value={agreement?.industrySector}>{agreement?.industrySector}</option>)
                  }
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label className="font-semibold">Location</label>
                <select {...register("location")} className="select select-bordered w-full flex-1" data-aos="fade-up"
                  data-aos-duration="1000">
                  {
                    hrInfo?.map((agreement, index) => <option key={index} value={agreement?.location}>{agreement?.location}</option>)
                  }
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label className="font-semibold">Company Size</label>
                <select {...register("companySize")} className="select select-bordered w-full flex-1" data-aos="fade-up"
                  data-aos-duration="1000">
                  <option value="Less Than 10 Employee">
                    Less Than 10 Employee
                  </option>
                  <option value="10 ~ 50 Employee">10 ~ 50 Employee</option>
                  <option value="50 ~ 200 Employee">50 ~ 200 Employee</option>
                  <option value="200 ~ 500 Employee">200 ~ 500 Employee</option>
                  <option value="500 ~ 2000 Employee">500 ~ 2000 Employee</option>
                  <option value="More Than 2000 Employee">
                    More Than 2000 Employee
                  </option>
                </select>
              </div>
              <button type="submit" className="but" data-aos="fade-up"
                data-aos-duration="1500">
                <div className="but-top font-medium">Submit</div>
                <div className="but-bottom"></div>
                <div className="but-base"></div>
              </button>
            </form>
          </div>
          <div className="col-span-2 " data-aos="fade-up"
            data-aos-duration="1000">
            {
              companies?.length > 2 ? <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {companies?.slice(0, showMoreData).map(company => (
                  <div key={company?._id} className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img
                      alt=""
                      src={company?.imageURL}
                      className="h-56 w-full rounded-md object-cover"
                    />

                    <div className="mt-2">
                      <dl>
                        <div>
                          <dt className="sr-only">Company Name</dt>

                          <dd className="text-sm text-gray-500">{company?.company}</dd>
                        </div>

                        <div>
                          <dt className="sr-only">Address</dt>

                          <dd className="font-medium">{company?.location}</dd>
                        </div>
                      </dl>

                      <div className="mt-6 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                          <svg
                            className="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                            />
                          </svg>

                          <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500">Company Size</p>

                            <p className="font-medium">{company?.companySize}</p>
                          </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                          <svg
                            className="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                          </svg>

                          <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500">Year Founded</p>

                            <p className="font-medium">{company?.monthName},{company?.yearFounded?.split("-")[0]}</p>
                          </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                          <svg
                            className="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                          </svg>

                          <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500">Industry Sector</p>

                            <p className="font-medium">{company?.industrySector}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div> : <div className="grid grid-cols-1 xl:grid-cols-2 gap-6" >
                {companies?.map(company => (
                  <div key={company?._id} className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img
                      alt=""
                      src={company?.imageURL}
                      className="h-56 w-full rounded-md object-cover"
                    />

                    <div className="mt-2">
                      <dl>
                        <div>
                          <dt className="sr-only">Company Name</dt>

                          <dd className="text-sm text-gray-500">{company?.company}</dd>
                        </div>

                        <div>
                          <dt className="sr-only">Address</dt>

                          <dd className="font-medium">{company?.location}</dd>
                        </div>
                      </dl>

                      <div className="mt-6 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                          <svg
                            className="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                            />
                          </svg>

                          <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500">Company Size</p>

                            <p className="font-medium">{company?.companySize}</p>
                          </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                          <svg
                            className="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                          </svg>

                          <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500">Year Founded</p>

                            <p className="font-medium">{company?.monthName},{company?.yearFounded?.split("-")[0]}</p>
                          </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                          <svg
                            className="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                          </svg>

                          <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500">Industry Sector</p>

                            <p className="font-medium">{company?.industrySector}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            }
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {companies.length > 2 && (
          <button onClick={toggleShowMore} type="button" className="but my-6 md:my-8 lg:my-12">
            <div className="but-top font-medium">{showMoreData > 2 ? 'Show less' : 'Show More'}</div>
            <div className="but-bottom"></div>
            <div className="but-base"></div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Companies;