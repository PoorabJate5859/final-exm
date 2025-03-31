<div class="container">
        <h1>📌 CRUD Operations with React & JSON Server</h1>
        <p>This project is a CRUD application built with React and JSON Server. It supports user management with pagination, search, and soft delete features.</p>

  <h2>🚀 Features</h2>
        <ul>
          <li>✅ Fetch users from a <b>JSON Server API</b></li>
            <li>✅ <b>Search</b> users by name, email, or phone</li>
            <li>✅ <b>Soft delete</b> users (sets <code>status: false</code>)</li>
            <li>✅ <b>Pagination</b> to navigate users</li>
            <li>✅ <b>Bootstrap UI</b> for a responsive design</li>
        </ul>

  <h2>🛠 Installation & Setup</h2>
        <h3>1️⃣ Clone the Repository</h3>
        <pre>git clone https://github.com/PoorabJate5859/final-exm.git
cd final-exm</pre>

  <h3>2️⃣ Install Dependencies</h3>
        <pre>npm install</pre>

   <h3>3️⃣ Set Up JSON Server</h3>
        <p>Create a <code>db.json</code> file in the root directory and add sample data:</p>
        <pre>{
  "users": [
    { "id": 1, "name": "John Doe", "email": "john@example.com", "phone": "1234567890", "image": "https://via.placeholder.com/150", "status": true },
    { "id": 2, "name": "Jane Smith", "email": "jane@example.com", "phone": "9876543210", "image": "https://via.placeholder.com/150", "status": true }
  ]
}</pre>

   <p>Start JSON Server:</p>
        <pre>npx json-server --watch db.json --port 3000</pre>
    <h3>4️⃣ Run the React App</h3>
        <pre>npm start</pre>

  <h2>📸 Screenshots</h2>
        <p><b>Users List</b></p>
        <img src="https://via.placeholder.com/400" alt="Users List">
        <p><b>Pagination</b></p>
        <img src="https://via.placeholder.com/400" alt="Pagination">

   <h2>🏗 Project Structure</h2>
      <pre>
/final-exm
│── /src
│   ├── /components
│   │   ├── Form.jsx
│   │── App.jsx
│   │── main.jsx
│── db.json
│── package.json
│── README.html
        </pre>

  <h2>📜 License</h2>
        <p>This project is open-source and available under the <b>MIT License</b>.</p>

   <h2>🙌 Contributors</h2>
        <p>👤 <b>Your Name</b></p>
        <p>📧 <i>your.email@example.com</i></p>
        <p>🔗 <a href="https://www.linkedin.com/in/your-profile">LinkedIn Profile</a></p>

  <hr>
        <p>🔹 <b>Feel free to fork and contribute! 🚀</b></p>
        <p>⭐ Give this project a star if you like it! 😊</p>
    </div>
