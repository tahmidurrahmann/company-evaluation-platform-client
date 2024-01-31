const SharedHeading = ({ heading }) => {
    return (
        <div className="flex justify-start items-center max-w-screen-2xl">
            <h1 className="border-l-8 uppercase pl-3 border-l-[#0098dc] font-extrabold text-3xl md:text-4xl text-neutral-700">{heading}</h1>
        </div>
    );
};

export default SharedHeading;