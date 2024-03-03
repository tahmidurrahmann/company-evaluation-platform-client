import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import banner from "../../../assets/65c3b693213374e97534bfdb_Video 1_hero image_v6_min-transcode (2).mp4";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FaArrowRight } from "react-icons/fa";

const OverVieww = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="max-w-screen-2xl mx-auto px-6 2xl:px-0">
            <h6 className="text-center font-semibold pt-6">Product Overview</h6>
            <h1 className="p-12 text-3xl md:text-4xl text-center xl:text-5xl font-semibold text-[#151746]">Your Complete Performance <br /> Management Toolkit</h1>
            <Tabs>
                <TabList className="flex items-center justify-between border-b">
                    <Tab onClick={() => handleTabClick(0)} className={activeTab === 0 ? `border-b-2 border-b-[#007cc7] pb-4 md:text-lg font-bold` : `pb-4 md:text-lg font-bold`}>Reviews & Check-Ins</Tab>
                    <Tab onClick={() => handleTabClick(1)} className={activeTab === 1 ? `border-b-2 border-b-[#007cc7] pb-4 md:text-lg font-bold` : `pb-4 md:text-lg font-bold`}>Goal Management</Tab>
                    <Tab onClick={() => handleTabClick(2)} className={activeTab === 2 ? `border-b-2 border-b-[#007cc7] pb-4 md:text-lg font-bold` : `pb-4 md:text-lg font-bold`}>Continuous Feedback</Tab>
                    <Tab onClick={() => handleTabClick(3)} className={activeTab === 3 ? `border-b-2 border-b-[#007cc7] pb-4 md:text-lg font-bold` : `pb-4 md:text-lg font-bold`}>Reporting and Analytics</Tab>
                    <Tab onClick={() => handleTabClick(4)} className={activeTab === 4 ? `border-b-2 border-b-[#007cc7] pb-4 md:text-lg font-bold` : `pb-4 md:text-lg font-bold`}>Employee Engagement</Tab>
                </TabList>

                <TabPanel>
                    <div className="flex justify-between items-center py-20">
                        <div>
                            <h1 className="text-2xl lg:text-4xl font-bold py-6">Drive high quality performance conversations</h1>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Employee appraisals</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />360 reviews</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Quarterly check-ins</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Project-based reviews</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />One-on-ones</p>
                            <button className="text-[#007cc7] font-bold gap-2 flex items-center justify-center my-6">Learn More <FaArrowRight/></button>
                        </div>
                        <div>
                            <video className="w-4/5 mx-auto" autoPlay loop muted src={banner}></video>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex justify-between items-center py-20">
                        <div>
                            <h1 className="text-2xl lg:text-4xl font-bold py-6">Align your people around what’s next</h1>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Collaborative goal setting</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Goal check-ins</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Cascading goals</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Development goals</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Corporate objectives</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Progress visualizations</p>
                            <button className="text-[#007cc7] font-bold gap-2 flex items-center justify-center my-6">Learn More <FaArrowRight/></button>
                        </div>
                        <div>
                            <video className="w-4/5 mx-auto" autoPlay loop muted src={banner}></video>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex justify-between items-center py-20">
                        <div>
                            <h1 className="text-2xl lg:text-4xl font-bold py-6">Formalize continuous and relevant feedback</h1>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Continuous feedback</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Employee recognition</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Performance notes</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Manager feedback</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Feedback requests</p>
                            <button className="text-[#007cc7] font-bold gap-2 flex items-center justify-center my-6">Learn More <FaArrowRight/></button>
                        </div>
                        <div>
                            <video className="w-4/5 mx-auto" autoPlay loop muted src={banner}></video>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex justify-between items-center py-20">
                        <div>
                            <h1 className="text-2xl lg:text-4xl font-bold py-6">Inform your HR decision making</h1>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Performance trends</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />9 box grids</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Rankings</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Summary reporting</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Review form calculations</p>
                            <button className="text-[#007cc7] font-bold gap-2 flex items-center justify-center my-6">Learn More <FaArrowRight/></button>
                        </div>
                        <div>
                            <video className="w-4/5 mx-auto" autoPlay loop muted src={banner}></video>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex justify-between items-center py-20">
                        <div>
                            <h1 className="text-2xl lg:text-4xl font-bold py-6">Listen. Learn. <br /> Take Action.</h1>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />iONE Engagement Survey</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Engagement Factors and Questions</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Engagement Trends Dashboard</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Satisfaction Factor Analysis</p>
                            <p className="flex items-center gap-2 text-neutral-600 font-medium"><FaCheck className="text-[#007cc7]" />Dynamic Employee Cohorting</p>
                            <button className="text-[#007cc7] font-bold gap-2 flex items-center justify-center my-6">Learn More <FaArrowRight/></button>
                        </div>
                        <div>
                            <video className="w-4/5 mx-auto" autoPlay loop muted src={banner}></video>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OverVieww;