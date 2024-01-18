const Integrity = () => {
    return (
        <div className="flex md:flex-row flex-col  lg:h-[500px] md:h-[400px] bg-sky-500 mt-10">
            <div className="max-w-xl mb-5 md:mb-0 mx-auto mt-10 text-white ml-5">
                <h1 className="font-bold lg:text-7xl md:text-5xl ">Our Commitment to Integrity</h1>
                <p className="flex items-end h-[100px] text-xl">Learn about our core values and principles.</p>
                <button className="btn btn-outline mt-10">Learn Now</button>
            </div>
            <div>
                <img className="lg:h-[500px] md:h-[400px] w-full border border-spacing-10 border-[#FC9C70]" src="https://i.ibb.co/p2McdgW/proud-portrait-business-woman-office-260nw-2276730965.jpg" alt="" />
            </div>
        </div>
    );
};

export default Integrity;