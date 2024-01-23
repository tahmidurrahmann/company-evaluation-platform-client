import { GrUserAdmin } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";

const AdminRole = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/user.json").then((res) => {
      setUsers(res.data);
    });
  }, []); // Empty dependency array to execute only once on mount

  const handleUser = (id) => {
    console.log(id);

    axios.patch(`/user.json/${id}`, { role: "admin" }).then((res) => {
      console.log(res.data),
        setUsers(
          users.map((user) =>
            user._id === id ? { ...user, role: "admin" } : "user"
          )
        );
    });
  };

  return (
    <div className="px-6 ">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 md:from-yellow-400 my-6 px-2 py-6">
        All Users: 5
      </h2>

      <div>
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.email}</td>
                  <td>
                    <button className="btn btn-outline btn-accent text-2xl">
                      {item.role === "admin" ? (
                        <GrUserAdmin />
                      ) : (
                        <FaRegUserCircle onClick={() => handleUser(item._id)} />
                      )}
                    </button>
                  </td>
                  <th>
                    <button className="btn btn-outline btn-error text-2xl">
                      <MdDeleteForever />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminRole;
