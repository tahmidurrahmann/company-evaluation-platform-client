const SharedHeadingDashboard = ({heading}) => {
    return (
        <div className="flex justify-center items-center">
            <h1 className="font-bold text-2xl md:text-3xl p-6 text-white">{heading}</h1>
        </div>
    );
};

export default SharedHeadingDashboard;