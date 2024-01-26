
import useUsers from "../../../hooks/useUsers";

const AllEmploye = () => {
    const [allUsers] = useUsers();
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>No:</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Group Name</th>
                            <th>Group Lider</th>
                            <th>Hr</th>
                            <th>Company Name</th>
                            <th>Responce</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((element, index) =>
                            <>
                            <tr>
                                <th>{index + 1}</th>
                                <td><img className="h-12 w-12 rounded-full" src={element.image} alt="" /></td>
                                <td>{element.name}</td>
                                <td>Boom Saka laka</td>
                                <td>Tahmidur Rahaman</td>
                                <td>Shadul Islam</td>
                                <td>Programming Hero</td>
                                {/* TODO: if hr not responce user then button well be show (panding) */}
                                <td><button className="btn ">Responced</button></td> 
                            </tr>
                        </>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEmploye;