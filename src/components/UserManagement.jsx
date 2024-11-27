import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    role: "user",
  });
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://your-backend-api/users");
        setUsers(response.data.users);
      } catch (error) {
        console.error("Failed to fetch users");
      }
    };
    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    try {
      const response = await axios.post(
        "https://your-backend-api/add-user",
        newUser
      );
      setFeedback(response.data.message);
      // Refresh users after adding new one
      const fetchResponse = await axios.get("https://your-backend-api/users");
      setUsers(fetchResponse.data.users);
    } catch (error) {
      setFeedback("Failed to add user. Please try again.");
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        `https://your-backend-api/delete-user/${userId}`
      );
      setFeedback(response.data.message);
      // Refresh users after deletion
      const fetchResponse = await axios.get("https://your-backend-api/users");
      setUsers(fetchResponse.data.users);
    } catch (error) {
      setFeedback("Failed to delete user. Please try again.");
    }
  };

  const handleDisableUser = async (userId) => {
    try {
      const response = await axios.patch(
        `https://your-backend-api/disable-user/${userId}`
      );
      setFeedback(response.data.message);
      // Refresh users after disabling
      const fetchResponse = await axios.get("https://your-backend-api/users");
      setUsers(fetchResponse.data.users);
    } catch (error) {
      setFeedback("Failed to disable user. Please try again.");
    }
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <div className="add-user-form">
        <input
          type="email"
          placeholder="New User Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="New User Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleAddUser}>Add User</button>
      </div>
      {feedback && <div className="feedback">{feedback}</div>}
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.isActive ? "Active" : "Disabled"}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </button>
                {!user.isActive && (
                  <button onClick={() => handleDisableUser(user.id)}>
                    Enable
                  </button>
                )}
                {user.isActive && (
                  <button onClick={() => handleDisableUser(user.id)}>
                    Disable
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
