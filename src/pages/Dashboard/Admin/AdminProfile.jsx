import BarChar from "./BarChar";
import PieC from "./PieC";
import PieChartThree from "./PieChartThree";
// import PieChartTwo from "./PieChartTwo";

const AdminProfile = () => {
    return (
        <div className="flex items-center justify-center min-h-[70vh] flex-col xl:flex-row gap-12">
            <BarChar />
            <PieC />
            <PieChartThree />
            {/* <PieChartTwo /> */}
        </div>
    );
};

export default AdminProfile;