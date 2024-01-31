import SharedHeading from "../../../shared/SharedHeading/SharedHeading";

const Inclusivity = () => {
    return (
        <>
            <div className="flex justify-between flex-col md:flex-row items-center">
                <div className="px-4 2xl:px-0 flex-1 pt-4 md:pt-0">
                    <h1 className="font-bold md:text-7xl text-5xl mt-10 "></h1>
                    <SharedHeading heading="Inclusivity is Our Top Priority" />
                    <h1 className="mt-8 text-xl text-neutral-500">We believe in creating a platform that is accessible to everyone. At IONE, inclusivity is our guiding principle. Our evaluation platform ensures fair assessments, valuing every voice and contribution. Join us in fostering a culture where diversity powers innovation.</h1>
                </div>
                <div className="flex-1">
                    <img className="py-12 rounded-2xl lg:w-3/4 mx-auto" src="https://i.ibb.co/fHdGH2b/jason-goodman-Oalh2-Moj-Uuk-unsplash.jpg" alt="" />
                </div>
            </div>
        </>
    );
};

export default Inclusivity;