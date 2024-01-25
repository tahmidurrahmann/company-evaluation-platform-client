import useAgreement from "../../../hooks/useAgreement";
import Loading from "../../../shared/Loading/Loading";

const AgreementRequest = () => {

    const [allAgreements, isAgreement] = useAgreement();

    if (isAgreement) {
        return <Loading />
    }

    console.log(allAgreements);

    return (
        <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">All Agreement Requests</h1>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>company</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allAgreements?.map(agreement => <tr key={agreement?._id}>
                                <th><img referrerPolicy="no-referrer" className="w-8 md:w-12 rounded-full" src={agreement?.imageURL} alt="" /></th>
                                <td>{agreement?.name}</td>
                                <td>{agreement?.email}</td>
                                <td>{agreement?.company}</td>
                                <td>{agreement?.role}</td>
                                <td className="bg-[#007cc7] px-2 py-1 hover:border hover:border-[#007cc7] hover:bg-white hover:text-[#007cc7] text-white font-semibold">Accept</td>
                                <td className="bg-red-600 px-2 py-1 hover:border hover:border-red-600 hover:bg-white hover:text-red-600 text-white font-semibold">Reject</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AgreementRequest;