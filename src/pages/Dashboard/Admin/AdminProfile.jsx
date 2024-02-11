import BarChar from "./BarChar";
import PieChartThree from "./PieChartThree";

const AdminProfile = () => {
    return (
        <div className="flex items-center justify-center min-h-screen flex-col xl:flex-row gap-12">
            <BarChar />
            <PieChartThree />
        </div>
    );
};

export default AdminProfile;