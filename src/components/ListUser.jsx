import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("http://localhost/api/users/").then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost/api/user/${id}/delete`)
      .then(function (response) {
        console.log(response.data);
        getUsers();
      });
  };
  return (
    <div className="container">
      <h2 className="text-center"> List users </h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th> Id </th>
            <th> First Name </th>
            <th> Last Name </th>
            <th> NickName </th>
            <th> Email </th>
            <th> Birthday </th>
            <th> Gender </th>
            <th> Postion </th>
            <th> Status </th>
            <th> createdAt </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td> {user.id} </td>
              <td> {user.name} </td>
              <td>{user.lastname}</td>
              <td>{user.nickname}</td>
              <td>{user.email}</td>
              <td>{user.birthday}</td>
              <td>{user.gender}</td>
              <td>{user.position}</td>
              <td>{user.status}</td>
              <td>{user.createdAt}</td>
              <td>
                <Link
                  to={`user/${user.id}/edit`}
                  style={{ marginRight: "10px" }}
                  className="btn btn-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
