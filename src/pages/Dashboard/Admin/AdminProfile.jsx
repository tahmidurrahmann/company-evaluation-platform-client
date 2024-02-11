import BarChar from "./BarChar";
import PieC from "./PieC";
import PieChartThree from "./PieChartThree";

const AdminProfile = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 m-5 gap-6">
            <BarChar />
            <PieChartThree />
            <PieC />
        </div>
    );
};

export default AdminProfile;