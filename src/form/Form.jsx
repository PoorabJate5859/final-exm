import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = "http://localhost:3000/users";

const Form = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchUsers();
  }, [page, limit]); 
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}?_page=${page}&_limit=${limit}`);
      const totalCount = response.headers["x-total-count"];

      setTotalPages(Math.ceil(totalCount / limit));
      setUsers(response.data.filter(user => user.status !== false));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSoftDelete = async (id) => {
    try {
      await axios.patch(`${API_URL}/${id}`, { status: false });
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(search.toLowerCase().trim()) || 
    user.email.toLowerCase().includes(search.toLowerCase().trim()) || 
    user.phone.includes(search.trim())
  );

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">CRUD Operations with React & JSON Server</h1>

      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by name, email, or phone..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="form-select w-25" onChange={(e) => setLimit(Number(e.target.value))}>
          <option value="5">Show 5</option>
          <option value="10">Show 10</option>
          <option value="15">Show 15</option>
        </select>
      </div>

      <div className="row">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <img src={user.image} className="card-img-top" alt={user.name} style={{ height: "350px", objectFit: "cover" }} />
                <div className="card-body text-center">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">
                    <strong>Email:</strong> {user.email} <br />
                    <strong>Phone:</strong> {user.phone}
                  </p>
                  <button className="btn btn-danger" onClick={() => handleSoftDelete(user.id)}>
                    Soft Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No users found.</p>
        )}
      </div>

      
    </div>
  );
};

export default Form;
