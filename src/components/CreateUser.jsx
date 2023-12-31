import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListUser() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost/api/user/save", inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/");
      });
  };
  return (
    <div>
      <h1>Create user</h1>
      <form onSubmit={handleSubmit}>
        <table className="table">
          <tbody>
            <tr>
              <th className="col">
                <label>Name: </label>
              </th>
              <td>
                <input type="text" name="name" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <th>
                <label>Lastname: </label>
              </th>
              <td>
                <input type="text" name="lastname" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <th>
                <label>Nickname: </label>
              </th>
              <td>
                <input type="text" name="nickname" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <th>
                <label>Email: </label>
              </th>
              <td>
                <input type="text" name="email" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Mobile: </label>
              </th>
              <td>
                <input type="text" name="mobile" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <th>
                <label>Birthday: </label>
              </th>
              <td>
                <input type="date" name="birthday" onChange={handleChange} className="input"/>
              </td>
            </tr>
            <tr>
              <th>
                <label>Gender: </label>
              </th>
              <td>
                <input type="text" name="gender" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Postion: </label>
              </th>
              <td>
                <input type="text" name="position" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Status: </label>
              </th>
              <td>
                <input type="text" name="status" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <button className="btn">Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
